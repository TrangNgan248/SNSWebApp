<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Dotenv\Util\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Exception;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index(){
        $posts = Post::all();
        return $posts;
    }

    public function store(Request $req){
       

        $post = new Post();
        $post->title = $req->input('title');
        $post->content = $req->input('content');
        $post->author_id = 1;
        $post->channel_id = 1;
<<<<<<< HEAD
        $post-> display = $req->file('display')->store('img');
=======
        $post->display = $req->file('display')->store('img', 'public');
>>>>>>> 22cc9b7c059e305386f5a761a935e4f45320ff97
        $post->num_view = 3;
        $post->save();
        return $post;
        // Log::info("Post ID {$post->id} created successfully.");
        // return response()->json($post);
      
       
         //      $request->validate([
        //     'content' => 'required',
        //  ]);
        //  $post = new Post();
        //  $post->title = 'abc';
        //  $post->content = $request->input('content');
        //  $post->author_id = 1;
        //  $post->channel_id = 1;
        //  $post->display = 'abc'; //TODO: nghien cuu phan dang anh
        //  $post->num_view = 3;
        //  $post->save();
        //  Log::info("Post ID {$post->id} created successfully.");
        //  return response()->json($post);
        
        
    }
    public function search($key){
        
        return Post::where('title','LIKE',"%$key%")->get();
    }
    public function edit(Request $request, Post $post){
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
        if ($post->author_id === Auth::id() && $post->delete()) {
            return response()->json([
                'status' => 'success'
            ]);
        }
        return response()->json([
            'status' => 'fail'
        ]);
    }
}

