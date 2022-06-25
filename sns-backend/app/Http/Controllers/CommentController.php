<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post)
    {
        $data = Comment::join('users', 'users.id', '=', 'comments.user_id')
                        ->where('comments.post_id', '=', $post->id)
                        ->get(['users.name', 'comments.*']);

        return $data;
                        
    }
    public function store(Request $request, Post $post){
        $comment = new Comment;
        $comment->post_id = $post->id;
        $comment->user_id = 1;
        $comment->content = $request->content;
        $comment->save();
        return response()->json(['message'=>'success', 'count'=>count($post->comments)]);
    }
}
