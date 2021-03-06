<?php

use Illuminate\Http\Request;

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

Route::post('/register', 'API\AuthController@register');
Route::post('/login', 'API\AuthController@login');

Route::get('/TKs','TKController@fetchAll');
Route::post('/TKs','TKController@store');
Route::delete('/TKs/{id}','TKController@delete');

Route::middleware('auth:api')->group(function () {
    Route::get('/logout', 'API\AuthController@logout');
    Route::get('/get-user', 'API\AuthController@getUser');
});