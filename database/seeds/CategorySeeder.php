<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')
                ->updateOrInsert(
                        ['id' => 1], 
                        [
                            'name' => 'Biographies & Memoirs'
                        ]
        );
        
        DB::table('categories')
                ->updateOrInsert(
                        ['id' => 2], 
                        [
                            'name' => 'Education & Reference'
                        ]
        );
        
        DB::table('categories')
                ->updateOrInsert(
                        ['id' => 3], 
                        [
                            'name' => 'History'
                        ]
        );
        
        DB::table('categories')
                ->updateOrInsert(
                        ['id' => 4], 
                        [
                            'name' => 'Literature & Fiction'
                        ]
        );
        
         DB::table('categories')
                ->updateOrInsert(
                        ['id' => 5], 
                        [
                            'name' => 'Science & Math'
                        ]
        );
    }
}
