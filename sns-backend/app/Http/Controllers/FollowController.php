<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Follow;

class FollowController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    public function index(User $user){
        $follows = Follow::where('follower_id', $user->id)->get();
        return $follows;
    }
   
    public function store(Request $request){
        $follows = Follow::where('follower_id', $request->follower_id)->where('parent_id', auth()->user()->id)->first();
        if(!empty($follows)){
            $follows->delete();
        }
        else{
            $follows = new Like;
            $follows->parent_id = auth()->user()->id;
            $follows->follower_id = $request->follower_id;
            $follows->save();
        }
    }
}