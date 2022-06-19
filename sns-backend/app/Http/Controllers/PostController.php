<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
class PostController extends Controller
{
    function AddPost(Request $req){
        $post = new Post();
        $post->title = $req->input('title');
        $post->content = $req->input('content');
        $post-> display = $req->input('display');

        $post-> image = $req->file('image')->store('img_posts');
        $post->save();

        return $post;
    }
}
