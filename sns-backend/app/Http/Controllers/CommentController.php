<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request, Post $post){
        $comment = new Comment;
        $comment->post_id = $post->id;
        $comment->user_id = $this->user->id;
        $comment->content = $request->content;
        $comment->save();
        return $this->respondSuccess([
            'comment' => $comment
        ]);
    }
}
