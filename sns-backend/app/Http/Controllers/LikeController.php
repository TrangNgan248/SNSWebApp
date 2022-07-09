<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    public function __construct() {
        $this->middleware('auth:api', ['except' => ['index']]);
    }
    public function index(Post $post){
        $like = Like::where('post_id', $post->id)->get();
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
}
