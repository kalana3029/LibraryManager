<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\AuthService;

class LoginController extends Controller
{

    /**
     *
     * @var type 
     */
    protected $userService;

    /**
     * 
     * @param AuthService $userService
     */
    public function __construct(AuthService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * authenticate
     * 
     * @param LoginRequest $request
     * @return type
     */
    public function login(LoginRequest $request)
    {
        $user = $this->userService->login($request->email, $request->password);

        if ($user) {

            return response()->success(null, [
                        'user' => $user,
            ]);
        }

        return response()->error('Unauthorized!');
    }

}
