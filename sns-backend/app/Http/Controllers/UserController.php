<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Laravel\Ui\Presets\React;
use Namshi\JOSE\Signer\OpenSSL\RSA;

class UserController extends Controller
{
    public function index(){
        $users = User::all();
        return $users;
    }
    public function edit(Request $request, User $user){
        $user->name = $request->input('name');
        $user->dob = $request->input('dob');
        $user->gender = $request->input('gender');
        $user->save();
        return $user;
    }
    public function avatar(Request $request, User $user){
        $user->img = $request->file('img')->store('img', 'public');
        $user->save();
        return $user;
    }
}
