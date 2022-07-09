<?php

namespace App\Http\Controllers;

use App\Models\Like_comment;
use Illuminate\Http\Request;

class Like_CommentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }
    public function store(Request $request)
    {
        $likeComment = Like_comment::where('cmt_id', $request->comment_id)->where('user_id', auth()->user()->id)->first();
        if(!empty($likeComment)){
            $likeComment->delete();
        }
        else{
        $likeComment = new Like_comment();
        $likeComment->user_id = auth()->user()->id;
        $likeComment->cmt_id = $request->comment_id;
        $likeComment->save();
        }
    }
}
