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

    public function index(Request $request)
    {
        $data = Comment::join('users', 'users.id', '=', 'comments.user_id')
                        ->where('comments.post_id', '=', $request->post_id)
                        ->get(['users.name', 'comments.*']);

        return $data;
                        
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
