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
    public function __construct() {
        $this->middleware('auth:api');
    }


    public function index(Post $post)
    {
        $comment = Comment::where('post_id', $post->id)->get();
        return $comment;

    }
    public function store(Request $request){
        $comment = new Comment;
        $comment->post_id = $request->post_id;
        $comment->user_id = 1;      
        $comment->content = $request->content;
        $comment->save();
        return response()->json(['message'=>'success', 'count'=>count($comment->post->comments)]);
    }
}
