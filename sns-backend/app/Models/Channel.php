<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    use HasFactory;

    protected $table = 'channel';
    protected $timestamp = false;

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function users(){
        return $this->belongsToMany(User::class, 'join_channel', 'channel_id', 'user_id');
    }
}
