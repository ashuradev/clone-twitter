<?php

Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function () {
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('refresh', 'LoginController@refresh');
});

Route::post('/users', 'UserController@store');

Route::middleware('auth:api')->group(function () {
    Route::apiResource('posts', 'PostController');
    Route::apiResource('users', 'UserController')->only('index,show');
});
