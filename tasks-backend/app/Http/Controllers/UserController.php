<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //create user
    public function store(Request $request)
    {
        $attr = $request->validate([
            'firstname' => 'required|string|max:255|min:3',
            'othernames' => 'required|string|max:255|min:3',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|alpha_dash',
            'phone' => 'required|string|unique:users,phone'
        ]);

        $user = User::create([
            'firstname' => $attr['firstname'],
            'othernames' => $attr['othernames'],
            'email' => $attr['email'],
            'password' => bcrypt($attr['password']),
            'phone' => $attr['phone']

        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ], 200);
    }

    // login
    public function login(Request $request)
    {
        $attr = $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string|min:6'
        ]);

        if (!Auth::attempt($attr)) {
            return response()->json([
                'message' => 'Login information is invalid.'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('authToken')->plainTextToken;
        return response()->json([
            'message' => "successfully logged in",
            'access_token' => $token,
        ], 200);
    }

    // logout
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'User Logged out',
        ], 200);
    }

    // delete user
    public function destroy(User $user)
    {

        DB::transaction(function (User $user) {
            dd($user->id);
            DB::table('task')->where('user_id', $user->id)->delete();
            DB::table('users')->where('id', $user->id)->delete();
        });

        return response()->json([
            'message' => 'User Deleted',
        ], 200);
    }
}
