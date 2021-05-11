<?php

namespace App\Services;

use App\Repositories\Book\BookRepositoryInterface;

class BookService
{

    /**
     *
     * @var BookInterface 
     */
    protected $bookRepo;

    /**
     * setup
     * 
     * @param BookRepositoryInterface $bookRepo
     */
    public function __construct(BookRepositoryInterface $bookRepo)
    {
        $this->bookRepo = $bookRepo;
    }

    /**
     * get all books
     * 
     * @return type
     */
    public function getAll(array $where = [])
    {
        return $this->bookRepo->getAll($where);
    }

    /**
     * find a book by id
     * 
     * @param int $id
     * @return type
     */
    public function find(int $id)
    {
        return $this->bookRepo->find($id);
    }

    /**
     * create a book
     * 
     * @param array $data
     * @return type
     */
    public function create(array $data)
    {
        return $this->bookRepo->create($data);
    }

    /**
     * update a book
     * 
     * @param int $id
     * @param array $data
     * @return type
     */
    public function update(int $id, array $data)
    {
        return $this->bookRepo->update($id, $data);
    }

    /**
     * delete a book
     * 
     * @param int $id
     * @return type
     */
    public function delete(int $id)
    {
        return $this->bookRepo->delete($id);
    }

}
