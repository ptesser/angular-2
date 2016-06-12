<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Expenses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses', function(Blueprint $table){

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('id_travel')->unsigned();
            $table->string('name', 40);
            $table->longtext('description');
            $table->float('amount');
            $table->timestamps();

            $table->unique('id');

            $table->foreign('id_travel')
                    ->references('id')
                    ->on('travels')
                    ->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('expenses');
    }
}
