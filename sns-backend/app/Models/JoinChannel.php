<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JoinChannel extends Model
{
    use HasFactory;

    protected $table = 'join_channel';
    public $timestamps = false;
}
