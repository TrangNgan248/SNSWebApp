<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $table = 'posts';

    public function user(){
        return $this->belongsTo(User::class, 'author_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function bookmarks(){
        return $this->hasMany(Bookmark::class);
    }

    public function channel(){
        return $this->belongsTo(Channel::class);
    }
}
