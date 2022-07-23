<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;
use App\Models\User;

class LikeController extends Controller
{
    public function index(Post $post){
        $like = Like::where('post_id', $post->id)->get('user_id');
        return $like;
    }
    public function store(Request $request){
        $like = Like::where('post_id', $request->post_id)->where('user_id', auth()->user()->id)->first();
        if(!empty($like)){
            $like->delete();
        }
        else{
            $like = new Like;
            $like->user_id = auth()->user()->id;
            $like->post_id = $request->post_id;
            $like->save();
        }
    }
    public function liked(Post $post, User $user){
        $like = Like::where('post_id', $post->id)->where('user_id', $user->id)->get();
        if($like->isEmpty()){
            return false;
        }
        else{
            return true;
        }
    }
}
