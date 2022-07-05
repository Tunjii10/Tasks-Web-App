<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// user routes
Route::post('/user/new', [UserController::class, 'store']);

Route::post('/user/login', [UserController::class, 'login']);

Route::get('/user/logout', [UserController::class, 'logout'])->middleware('auth:sanctum');

Route::delete('/user/delete/{user}', [UserController::class, 'destroy'])->middleware('auth:sanctum');

Route::get('/user/tasks', [UserController::class, 'index'])->middleware('auth:sanctum');

// tasks routes
Route::post('/tasks/new', [TaskController::class, 'store'])->middleware('auth:sanctum');

Route::put('/tasks/edit/{task}', [TaskController::class, 'update'])->middleware('auth:sanctum');

Route::delete('/tasks/delete/{task}', [TaskController::class, 'destroy'])->middleware('auth:sanctum');

Route::get('/tasks/{task}', [TaskController::class, 'show'])->middleware('auth:sanctum');
