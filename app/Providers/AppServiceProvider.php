<?php

namespace App\Providers;

use Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Response::macro('success', function ($message = null, $data = null) {
            return Response::json([
                'status' => 1,
                'message' => $message,
                'data' => $data
            ]);
        });
        
        Response::macro('error', function ($message = null) {
            $message = $message ?? 'No Message.';
            
            return Response::json([
                'status' => 0,
                'message' => $message,
            ]);
        });
    }
}
