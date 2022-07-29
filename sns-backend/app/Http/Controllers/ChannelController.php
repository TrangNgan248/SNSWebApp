<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Channel;
use App\Models\User;
use App\Models\JoinChannel;
use PhpParser\Builder\Use_;

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
    public function userChanel(User $user){
        $channel = Channel::join('join_channel', 'channel.id', '=', 'join_channel.channel_id')->join('users', 'users.id', '=', 'join_channel.user_id')->select('channel.*')->where('users.id', '=', $user->id)->get();
        return $channel;
    }
    public function countUsers(Channel $channel){
        $count = Channel::join('join_channel', 'channel.id', '=', 'join_channel.channel_id')->select('join_channel.user_id')->where('channel.id', '=', $channel->id)->count();
        return $count;
    }
}
