<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request){
        $fields = $request->validate([
            // 'name' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'username' => 'required|string|max:255|unique:users,username',
            // 'gender' => 'required',
            'password' => 'required|string|min:6|confirmed'
        ]);
        
        $user = new User();
        $user->name = 'Ngan';
        $user->email = $fields['email'];
        $user->username = $fields['username'];
        $user->gender = 1;
        $user->dob = null;
        $user->img = 'afdsfs';
        $user->role_id = 1;
        $user->password = bcrypt($fields['password']);
        $user->save();

        $token = $user->createToken('myapptoken')->plainTextToken;

        $response = [
            'user' => $user,
            'token' => $token
        ];

        return response($response, 201);
    }
}
