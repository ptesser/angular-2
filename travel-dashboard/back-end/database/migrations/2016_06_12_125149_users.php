<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('users', function(Blueprint $table){

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('username', 20);
            $table->string('password');
            $table->string('email', 40);
            $table->integer('role');

            // adds created_at and updated_at column
            $table->timestamps();

            $table->unique('id');
            $table->index('email', 'user_email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('users');
    }
}
