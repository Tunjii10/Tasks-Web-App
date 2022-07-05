<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    //create user
    public function store(Request $request)
    {
        try {
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
                'message' => "user created successfully",
                'results' => $user
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // login
    public function login(Request $request)
    {
        try {
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
                'results' => $user
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // logout
    public function logout(Request $request)
    {
        try {
            $request->user()->currentAccessToken()->delete();

            return response()->json([
                'message' => 'User Logged out',
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // delete user
    public function destroy(User $user)
    {
        try {
            $user->delete();
            // DB::transaction(function () use ($userId) {

            //     DB::delete('delete from task where user_id = (?)', [$userId]);
            //     DB::delete('delete from users where id = (?)', [$userId]);
            // });

            return response()->json([
                'message' => 'User and task Deleted',
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // show users tasks
    public function index()
    {
        try {
            $id = auth()->user()->id;
            $result  = User::find($id)->tasks;
            // $result->tasks;
            return response()->json([
                'message' => "task found",
                'result' => $result
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
