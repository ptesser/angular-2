<?php

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'username'  => 'ptesser',
            'email'     => 'p.tesser921@gmail.com',
            'password'  => '969044ea4df948fb0392308cfff9cdce',
            'role'      => '1' // Admin
        ]);
    }
}
