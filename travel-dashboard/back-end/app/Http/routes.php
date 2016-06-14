<?php

use Illuminate\Http\Response;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


$app->group(['prefix' => 'utility'], function($app){

    $app->get('/app-version', function () use ($app) {
        return $app->version();
    });

    $app->get('/key', function(){
        return str_random(32);
    });

});


$app->group(['prefix' => 'api/v1', 'namespace' => 'App\Http\Controllers'], function($app){

    $app->get('/users', 'UsersController@get');

    $app->get('/countries', 'CountriesController@get');

});
