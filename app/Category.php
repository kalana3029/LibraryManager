<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     *
     * @var type 
     */
    protected $fillable = [
        'name'
    ];

    /**
     * return books belongs to category
     * 
     * @return type
     */
    public function books()
    {
        return $this->hasMany(Book::class);
    }

}
