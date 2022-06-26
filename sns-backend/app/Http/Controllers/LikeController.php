<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    public function index(Post $post){
        $like = Like::where('post_id', $post->id)->get();
        return $like;
    }
    public function store(Post $post){
        // $like = Like::where('post_id', $post->id)->where('user_id', $this->user->id)->first();
        // if(!empty($like)){
        //     $like->delete();
        // }
        // else{
        //     $like = new Like;
        //     $like->user_id = 1;
        //     $like->post_id = $post->id;
        //     $like->save();
        // }
            $like = new Like();
            $like->user_id = 1;
            $like->post_id = $post->id;
            $like->save();
            return response()->json(['message'=>'success', 'count'=>count($post->likes)]);
    }
}
