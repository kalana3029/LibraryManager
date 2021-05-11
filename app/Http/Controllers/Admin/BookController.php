<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Exception;
use App\Services\BookService;
use App\Http\Resources\BookResource;
use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{

    protected $bookService;

    public function __construct(BookService $bookService)
    {
        $this->bookService = $bookService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            
            $books = BookResource::collection($this->bookService->getAll($request->only(['term','category'])));
        } catch (Exception $ex) {
            Log::error("Unable to list down books, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to list down books');
        }

        return response()->success(null, [
                    'books' => $books,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param StoreBookRequest $request
     * @return type
     */
    public function store(StoreBookRequest $request)
    {
        try {
            $book = $this->bookService->create($request->book);

            $book = new BookResource($book);
        } catch (Exception $ex) {
            Log::error("Unable to create book, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to create book');
        }

        return response()->success(null, [
                    'book' => $book,
        ]);
    }

    /**
     * Get book by id
     * 
     * @param Book $book
     */
    public function show(Book $book)
    {
        try {
            $book = new BookResource($book);
        } catch (Exception $ex) {
            Log::error("Unable to get book, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to get book');
        }

        return response()->success(null, [
                    'book' => $book,
        ]);
    }

    /**
     * Update the specified resource in storage.
     * 
     * @param UpdateBookRequest $request
     * @param Book $book
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        try {
            $book = $this->bookService->update($book->id, $request->book);

            $book = new BookResource($book);
        } catch (Exception $ex) {
            Log::error("Unable to update book, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to update book');
        }

        return response()->success(null, [
                    'book' => $book,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     * 
     * @param Book $book
     */
    public function destroy(Book $book)
    {
        try {
            $this->bookService->delete($book->id);
        } catch (Exception $ex) {
            Log::error("Unable to delete book, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to delete book');
        }

        return response()->success(null, [
                    'book' => $book,
        ]);
    }

}
