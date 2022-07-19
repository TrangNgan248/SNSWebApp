<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use Illuminate\Http\Request;
use App\Models\Post;
use Dotenv\Util\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Models\User;
use Exception;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{



    public function index(){

        $posts = Post::latest()->with('likes:post_id,user_id')->get();

        return $posts;
    }

    public function store(Request $req)
    {
            $post = new Post();
            $post->title = $req->input('title');
            $post->content = $req->input('content');
            $post->author_id = auth()->user()->id;
            $post->channel_id = $req->channel_id;
            // $post->display = $req->file('display')->store('img', 'public');
            $post->display = "khhj";
            $post->num_view = 0;
            $post->save();
    }

    public function search($key)
    {

        return Post::where('title', 'LIKE', "%$key%")->get();
    }


    public function edit(Request $request, Post $post)
    {
        $request->validate([
            'content' => 'required',
        ]);
        $post->title = $request->input('title');
        $post->content = $request->input('content');
        $post->display = $request->file('display')->store('img', 'public');
        $post->save();
        return $post;
    }
    public function delete(Post $post)
    {
        $post = Post::find($post->id);

        $post->delete();

        return response()->json('Successfully Deleted');
    }
    public function userPost(User $user)
    {
        $post = Post::where('author_id', $user->id)->latest()->get();
        
        return $post;
    }
}
