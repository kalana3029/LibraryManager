<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Exception;
use App\Services\CategoryService;
use App\Http\Resources\CategoryResource;

class CategoryController extends Controller
{

    protected $categoryService;

    /**
     * setup
     * 
     * @param CategoryService $categoryService
     */
    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $books = CategoryResource::collection($this->categoryService->getAll());
        } catch (Exception $ex) {
            Log::error("Unable to list down categories, Error : " . $ex->getMessage() . "," . $ex->getTraceAsString());
            return response()->error('Unable to list down categories');
        }

        return response()->success(null, [
                    'categories' => $books,
        ]);
    }

}
