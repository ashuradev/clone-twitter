<?php

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth',
    'namespace' => 'Auth'
], function () {
    Route::post('login', 'LoginController@login');
    Route::post('logout', 'LoginController@logout');
});
