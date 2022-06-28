<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
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
    // Route::post('/login', ['as' => 'login', 'uses' => 'AuthController@login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::middleware(['auth:api'])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::post('/refresh', [AuthController::class, 'refresh']);
        Route::get('/user', [AuthController::class, 'userProfile']);
        Route::post('/change-pass', [AuthController::class, 'changePassWord']);
       
    });   
});

Route::post('/like/{post}', [LikeController::class, 'store']);
Route::post('/comment', [CommentController::class, 'store']);
Route::get('/comment', [CommentController::class, 'index']);


Route::post('/post/create', [PostController::class, 'store']);

Route::get('/post', [PostController::class, 'index']);

Route::get('/post/{post}', [PostController::class, 'show']);

Route::get('search/{key}', [PostController::class, 'search']);


