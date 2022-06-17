<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Like;

class LikeController extends Controller
{
    public function store(Post $blog){
        $like = Like::where('blog_id', $blog->id)->where('user_id', $this->user->id)->first();
        if(!empty($like)){
            $like->delete();
        }
        else{
            $like = new Like;
            $like->user_id = $this->user->id;
            $like->blog_id = $blog->id;
            $like->save();
        }
        return $this->repondSuccess(['count' => count($blog->like)]);
    }
}
