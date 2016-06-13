<?php

use App\Models\Country;
use Illuminate\Database\Seeder;

class CountriesTableSeeder extends Seeder
{
    public function run()
    {
        Country::create([
            'name' => 'Italia'
        ]);

        Country::create([
            'name' => 'Irlanda'
        ]);

        Country::create([
            'name' => 'Germania'
        ]);

        Country::create([
            'name' => 'Messico'
        ]);
    }
}
