<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
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
    public function login(Request $request)
    {
        $token = Auth::attempt($request->only('email', 'password'));

        if (!$token) {
            throw new AuthenticationException('Credenciais inválidas.');
        }

        return $this->sendToken($token);
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
        return $this->sendToken(Auth::refresh());
    }

    /**
     * Sends the token to user.
     *
     * @param string $token
     * @return \Illuminate\Http\JsonResponse
     */
    private function sendToken($token)
    {
        return response()->json([
            'token'      => $token,
            'type'       => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60
        ], 201);
    }
}
