<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Resources\TokenResource;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Create a new LoginController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api')->except('login');
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(LoginRequest $request)
    {
        $token = Auth::attempt($request->only('email', 'password'));

        if (!$token) {

        }

        return new TokenResource((object) ['token' => $token]);
    }

    /**
     * Log the user out.
     *
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {
        Auth::logout();

        return response()->noContent();
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\Response
     */
    public function refresh()
    {
        return $this->sendToken();
    }
}
