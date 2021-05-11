<?php

namespace App\Repositories\Book;

use App\Book;

interface BookRepositoryInterface
{
    public function getAll(array $where = null);
    
    public function find(int $id) : Book;
    
    public function create(array $data) : Book;
    
    public function update(int $id, array $data) : Book;
    
    public function delete(int $id);
}
