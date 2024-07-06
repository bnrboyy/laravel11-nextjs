<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', function (Request $request) {

    return response([
        'users' => 'okok',
        'data' => $request->user()
    ]);
});
