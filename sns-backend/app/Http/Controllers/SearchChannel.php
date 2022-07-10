<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use Dotenv\Util\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use App\Models\Channel;
use Exception;
use GuzzleHttp\Psr7\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class SearchChannel extends Controller
{
    public function index(){
        $channel = Channel::all();
        return $channel;
    }
    public function store(Request $request){
        $channel = new Channel;
        $channel ->name = $request->name;   
        $channel ->save();
        return $channel;
    }

    public function searchchannel($key){
       
        return Channel::where('name','LIKE',"%{$key}%")->get();
    }
}
