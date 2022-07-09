<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like_comment extends Model
{
    use HasFactory;

    protected $tables = 'likeComments';
    public $timestamps = false;

    public function comment(){
        return $this->belongsTo(Comment::class, 'cmt_id');
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
