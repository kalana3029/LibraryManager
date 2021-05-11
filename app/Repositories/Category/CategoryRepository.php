<?php

namespace App\Repositories\Category;

use App\Category;
use App\Repositories\Category\CategoryRepositoryInterface;

/**
 * Description of CategoryRepository
 *
 */
class CategoryRepository implements CategoryRepositoryInterface
{

    protected $category;

    /**
     * 
     * @param Category $category
     */
    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    /**
     * get all categories
     * 
     * @return array
     */
    public function getAll()
    {
        return $this->category->all();
    }

}
