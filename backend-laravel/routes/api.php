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

Route::get('employees', 'MemberController@showall');
Route::get('employees/{id}', 'MemberController@showbyid');
Route::post('employees', 'MemberController@postmember');
Route::put('employees/{id}', 'MemberController@update');
Route::delete('employees/{id}', 'MemberController@delete');

