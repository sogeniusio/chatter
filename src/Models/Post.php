<?php

namespace DevDojo\Chatter\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

use Overtrue\LaravelFollow\Traits\CanBeLiked;
use Overtrue\LaravelFollow\Traits\CanBeVoted;

/* Search */
use Laravel\Scout\Searchable;

class Post extends Model
{
    use Searchable, SoftDeletes, CanBeLiked, CanBeVoted;

    protected $touches = ['discussion'];
    protected $table = 'chatter_post';
    public $timestamps = true;
    protected $fillable = ['chatter_discussion_id', 'user_id', 'body', 'markdown'];
    protected $dates = ['deleted_at'];

    public function discussion()
    {
        return $this->belongsTo(Models::className(Discussion::class), 'chatter_discussion_id');
    }

    public function user()
    {
        return $this->belongsTo(config('chatter.user.namespace'));
    }

    /**
     * Get the index name for the model.
     *
     * @return string
     */
    public function searchableAs()
    {
        return 'posts';
    }

    public function toSearchableArray()
    {
        $post = $this->toArray();
        $post['category'] = $this->discussion->category['name'];
        $post['discussion'] = $this->discussion;

        return $post;
    }
}
