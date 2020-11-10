<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\CategoryController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/contacts', [ContactController::class, 'index']);
Route::post('/contacts/create', [ContactController::class, 'create']);
Route::get('/contacts/{id}/edit', [ContactController::class, 'edit']);
Route::put('/contacts/{id}/update', [ContactController::class, 'update']);
Route::delete('/contacts/{id}/delete', [ContactController::class, 'delete']);
Route::get('/contacts/{id}/filter', [ContactController::class, 'filter']);


Route::get('/categories', [CategoryController::class, 'index']);