<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    /**
     *  
     * @var type 
     */
    protected $fillable = [
        'category_id', 'isbn', 'title','author','price','availbility'
    ];


    /**
     * return category belong to book
     * 
     * @return type
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

}
