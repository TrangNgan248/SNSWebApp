<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\UserController;
use GuzzleHttp\Middleware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
//Route::get('/like', [LikeController::class, 'index']);
Route::post('/register', [RegisterController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
Route::group(['middleware' => ['auth:sanctum']], function(){
    Route::post('/logout', [LogoutController::class, 'logout']);
});

Route::post('/like/{post}', [LikeController::class, 'store']);
Route::get('/like/{post}', [LikeController::class, 'index']);
Route::get('/comment/{post}', [CommentController::class, 'index']);
Route::post('/comment', [CommentController::class, 'store']);

Route::post('/post/create', [PostController::class, 'store']);

Route::get('/post', [PostController::class, 'index']);

Route::get('/channel', [ChannelController::class, 'index']);

Route::get('/user', [UserController::class, 'index']);

Route::post('/post/edit/{post}', [PostController::class, 'edit']);

Route::delete('/post/delete/{post}', [PostController::class, 'delete']);

Route::get('/post/{post}', [PostController::class, 'show']);

Route::get('search/{key}', [PostController::class, 'search']);


