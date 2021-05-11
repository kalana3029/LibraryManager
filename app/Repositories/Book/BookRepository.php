<?php

namespace App\Repositories\Book;

use App\Book;
use App\Repositories\Book\BookRepositoryInterface;

/**
 * Description of BookRepository
 *
 */
class BookRepository implements BookRepositoryInterface
{

    protected $book;

    /**
     * 
     * @param Book $book
     */
    public function __construct(Book $book)
    {
        $this->book = $book;
    }

    /**
     * create a new book
     * 
     * @param array $data
     * @return Book
     */
    public function create(array $data): Book
    {
        return $this->book->create($data);
    }

    /**
     * delete a book
     * 
     * @param int $id
     * @return type
     */
    public function delete(int $id)
    {
        return $this->find($id)->delete();
    }

    /**
     * find a book by id
     * 
     * @param int $id
     * @return Book
     */
    public function find(int $id): Book
    {
        return $this->book->find($id);
    }

    /**
     * get all books
     * 
     * @return array
     */
    public function getAll(array $where = null)
    {
        $titleOrAuthor = $where['term'] ?? '';
        $category = $where['category'] ?? '';

        $query = $this->book->query();

        if ($titleOrAuthor) {
            $query->where('title', 'LIKE', "%$titleOrAuthor%");
            $query->orWhere('author', 'LIKE', "%$titleOrAuthor%");
        }

        if ($category) {
            $query->whereHas('category', function($query) use ($category){
                $query->where('id', '=', $category);
            });
        }
        
        return $query->get();
    }

    /**
     * update a book by id
     * 
     * @param int $id
     * @param array $data
     * @return Book
     */
    public function update(int $id, array $data): Book
    {
        $this->find($id)->update($data);

        return $this->find($id);
    }

}
