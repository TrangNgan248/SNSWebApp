<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ChannelController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SearchChannel;
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
// Route::post('/register', [RegisterController::class, 'register']);
// Route::post('/login', [LoginController::class, 'login']);
// Route::group(['middleware' => ['auth:sanctum']], function(){
//     Route::post('/logout', [LogoutController::class, 'logout']);
// });

Route::prefix('auth')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::middleware(['auth:api'])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::get('/user', [AuthController::class, 'userProfile']);
        Route::post('/change-pass', [AuthController::class, 'changePassWord']);
        Route::post('/comment', [CommentController::class, 'store']);
        Route::post('/like', [LikeController::class, 'store']);
    });   
});

Route::get('/like/{post}', [LikeController::class, 'index']);
Route::get('/comment/{post}', [CommentController::class, 'index']);

Route::delete('/post/{post}', [PostController::class, 'delete']);
Route::post('/post/edit/{post}', [PostController::class, 'edit']);

Route::post('/post/create', [PostController::class, 'store']);

Route::get('/post', [PostController::class, 'index']);

Route::get('/channel', [ChannelController::class, 'index']);

Route::get('/user', [UserController::class, 'index']);

Route::get('/post/{post}', [PostController::class, 'show']);

Route::get('/search/{key}', [PostController::class, 'search']);

Route::get('/SearchChannel/{key}', [SearchChannel::class, 'searchchannel']);


