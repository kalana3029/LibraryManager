<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\LoginController;

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */

Route::post('/login', [LoginController::class, 'login']);

Route::group(['prefix' => 'ajax'], function () {

    Route::group(['prefix' => 'admin'], function () {

        Route::group(['prefix' => 'categories'], function () {
            Route::get('/', [CategoryController::class, 'index']);
        });
        
        Route::group(['prefix' => 'books'], function () {
            Route::get('/', [BookController::class, 'index']);
            Route::get('/{book}', [BookController::class, 'show']);
            Route::post('/', [BookController::class, 'store']);
            Route::patch('/{book}', [BookController::class, 'update']);
            Route::delete('/{book}', [BookController::class, 'destroy']);
        });
    });
});



Route::get('{route?}', function () {
    return view('welcome');
})->where('route', '.*');