<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Dotenv\Util\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Models\User;
use Exception;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
class SearchUser extends Controller
{
    public function index(){
        $users = User::all();
        return $users;
    }
    public function store(Request $request){
        $user = new User;
        $user ->name = $request->name;   
        $user ->email = $request->email;   
        $user ->img = $request->img;   
        $user ->role_id = $request->role_id;   
        $user ->gender = $request->gender;   
        $user ->dob = $request->dob;    
        $user ->save();
        return $user;
    }
    public function searchUser($key){
       
        return User::where('name','LIKE',"%{$key}%")->get();
    }
}
