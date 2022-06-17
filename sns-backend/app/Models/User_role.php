<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_role extends Model
{
    use HasFactory;

    protected $table = 'user_roles';
    protected $timestamp = false;

    public function users(){
        return $this->hasMany(User::class, 'role_id');
    }
}
