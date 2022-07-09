<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;


class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'img',
        'role_id',
        'gender',
        'dob',
        ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public $timestamps = false;

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function channels(){
        return $this->belongsToMany(Channel::class, 'join_channel', 'user_id', 'channel_id');
    }

    public function posts(){
        return $this->hasMany(Post::class, 'author_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class);
    }

    public function likeComments(){
        return $this->hasMany(Like_comment::class, 'user_id');
    }

    public function likes(){
        return $this->hasMany(Like::class);
    }

    public function bookmarks(){
        return $this->hasMany(Bookmark::class);
    }

    public function userRole(){
        return $this->belongsTo(User_role::class, 'role_id');
    }

    public function followers()
    {
        return $this->hasMany(Follow::class, 'follower_id');
    }

    public function followings(){
        return $this->hasMany(Follow::class, 'parent_id');
    }
}
