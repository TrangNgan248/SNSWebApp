<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{

    protected $user;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function index(Post $post)
    {
        $comment = Comment::where('post_id', $post->id)->latest()->get();
        return $comment;

    }
    public function store(Request $request){
        $comment = new Comment;
        $comment->post_id = $request->post_id;
        $comment->user_id = auth()->user()->id;   
        $comment->content = $request->content;
        $comment->save();
        return response()->json(['message'=>'success', 'count'=>count($comment->post->comments)]);
    }

    public function edit(Request $request, Comment $comment)
    {
        $request->validate([
            'content' => 'required',
        ]);
        $comment->content = $request->input('content');
        $comment->save();
        return response()->json($comment);
    }

    public function delete(Comment $comment){
        $comment = Comment::find($comment->id);
        $comment->delete();
        return response()->json('Successfully Deleted');
    }
}
