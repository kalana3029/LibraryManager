<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Illuminate\Support\Str;

class BookTest extends TestCase
{

    /**
     * Get books test
     *
     * @return void
     */
    public function testGetBooks()
    {
        $response = $this->get('/ajax/admin/books/');

        $response->assertStatus(200)->assertJson([
            'status' => true,
        ]);
    }

    /**
     * store book test
     * 
     * @return void
     */
    public function testStoreBook()
    {
        $category = new \App\Category();
        $category->name = Str::random(10);
        $category->save();
        $response = $this->json('POST', '/ajax/admin/books/', [
            'book' => [
                'isbn' => rand(111111, 9999999),
                'category_id' => $category->id,
                'title' => 'test-title ' . Str::random(20),
                'author' => 'test-author' . time() . rand(),
                'price' => rand(100, 1000),
                'availbility' => (bool) random_int(0, 1)
            ]
                ]
        );

        $response
                ->assertStatus(200)
                ->assertJson([
                    'status' => true,
        ]);
    }

    /**
     * show a book
     * 
     * @return void
     */
    public function testShowBook()
    {
        $book = \App\Book::all()->last();
        $response = $this->get('/ajax/admin/books/' . $book->id);

        $response->assertStatus(200)->assertJson([
            'status' => true,
        ]);
    }

    /**
     * update a book
     * 
     * @return void
     */
    public function testUpdateBook()
    {
        $category = new \App\Category();
        $category->name = Str::random(10);
        $category->save();

        $book = \App\Book::all()->last();

        $response = $this->json('PATCH', '/ajax/admin/books/' . $book->id, [
            'book' => [
                'isbn' => rand(111111, 9999999),
                'category_id' => $category->id,
                'title' => 'test-title ' . Str::random(20),
                'author' => 'test-author' . time() . rand(),
                'price' => rand(100, 1000),
                'availbility' => (bool) random_int(0, 1)
            ]
                ]
        );

        $response
                ->assertStatus(200)
                ->assertJson([
                    'status' => true,
        ]);
    }

    /**
     * delete a book
     * 
     * @return void
     */
    public function testDestroyBook()
    {
        $book = \App\Book::all()->last();
        $response = $this->delete('/ajax/admin/books/' . $book->id);

        $response->assertStatus(200)->assertJson([
            'status' => true,
        ]);
    }
}
