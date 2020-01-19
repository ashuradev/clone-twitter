<?php

Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', 'AuthController@login');
    Route::post('/logout', 'AuthController@logout');
    Route::post('/refresh', 'AuthController@refresh');
});

Route::post('/users', 'UserController@store');

Route::middleware('auth:api')->group(function () {
    Route::get('/feed', 'FeedController@index');

    Route::prefix('/me')->group(function () {
        Route::get('/', 'MeController@index');
        Route::delete('/', 'MeController@destroy');
        Route::put('/', 'MeController@update');
    });

    Route::apiResource('posts', 'PostController');
    Route::apiResource('users', 'UserController')->only(['index', 'show']);
});
