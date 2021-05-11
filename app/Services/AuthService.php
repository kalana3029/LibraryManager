<?php

namespace App\Services;

use App\User;

class AuthService
{

    /**
     *
     * @var User 
     */
    protected $user;

    /**
     * setup
     * 
     * @param User $user
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * login
     * 
     * @param string $email
     * @param string $password
     * @return type
     */
    public function login(string $email, string $password)
    {
        if(auth()->attempt(['email' =>$email,'password' => $password])){
            
            return $this->user->where('email',$email)->first();
            
        }
        
        return null;
    }

}
