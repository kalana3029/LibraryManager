<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if ($request->basic == 'on') {
            return [
                'id' => $this->id,
                'category' => $this->category->name,
                'isbn' => $this->isbn,
                'title' => $this->title,
                'availbility' => $this->availbility
            ];
        } else {
            return [
                'id' => $this->id,
                'category_id' => $this->category->id,
                'isbn' => $this->isbn,
                'title' => $this->title,
                'author' => $this->author,
                'price' => $this->price,
                'availbility' => $this->availbility
            ];
        }
    }

}
