<?php

Route::group([
    'prefix' => 'auth',
    'namespace' => 'Auth'
], function () {
    Route::post('register', 'RegisterController@store');
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
    Route::post('refresh', 'LoginController@refresh');
});

Route::middleware('auth:api,jwt.refresh')->group(function () {
    Route::get('/feed', 'FeedController@index');
});
