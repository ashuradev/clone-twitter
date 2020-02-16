<?php

namespace App\Http\Controllers;

use App\Http\Resources\PostResource;
use App\Post;

class FeedController extends Controller
{
    /**
     * Get user feed.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PostResource::collection(
            Post::with('user:id,name,avatar,email,username')->paginate(25)
        );
    }
}
