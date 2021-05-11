<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('users')
                ->updateOrInsert(
                        ['id' => 1], 
                        [
                            'name' => 'Admin',
                            'email' => 'admin@library.com',
                            'password' => bcrypt('admin@123'),
                        ]
        );
    }
}
