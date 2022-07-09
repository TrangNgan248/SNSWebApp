<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;
use App\Models\JoinChannel;

class ChannelController extends Controller
{
    public function index(){
        $channels = Channel::all();
        return $channels;
    }

    public function show(Channel $channel){       
        return Channel::where('id', $channel->id)->get();
    }

    public function join(Request $request){
        $joinChannel = JoinChannel::where('channel_id', $request->channel_id)->where('user_id', auth()->user()->id)->first();
        if(!empty($joinChannel)){
            $joinChannel->delete();
        }
        else{
            $joinChannel = new JoinChannel();
            $joinChannel->user_id = auth()->user()->id;
            $joinChannel->channel_id = $request->channel_id;
            $joinChannel->save();
        }
    }
}
