<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use App\User;
use App\Http\Resources\UserResource;

class RegisterController extends Controller
{
    /**
     * Create a new account.
     *
     * @param \Illuminate\Http\Request
     * @return \Illuminate\Http\Response
     */
    public function store(RegisterRequest $request)
    {
        return new UserResource(
            User::create($request->all())
        );
    }
}
