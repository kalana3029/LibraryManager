<?php

namespace App\Services;

use App\Repositories\Category\CategoryRepositoryInterface;;

class CategoryService
{

    /**
     *
     * @var CategoryRepositoryInterface 
     */
    protected $categoryRepo;

    /**
     * setup
     * 
     * @param CategoryRepositoryInterface $categoryRepo
     */
    public function __construct(CategoryRepositoryInterface $categoryRepo)
    {
        $this->categoryRepo = $categoryRepo;
    }

    /**
     * get all categories
     * 
     * @return type
     */
    public function getAll()
    {
        return $this->categoryRepo->getAll();
    }

}
