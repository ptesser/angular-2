<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function get()
    {
        return response()->json(['username' => 'ptesser', 'email' => 'p.tesser921@gmail.com']);
    }

    //
}
