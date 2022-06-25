<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function logout(Request $request){
        auth()->user()->tokens->delete();

        return [
            'message' => 'Logged out'
        ];
    }
}
