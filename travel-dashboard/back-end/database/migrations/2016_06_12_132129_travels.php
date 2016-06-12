<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Travels extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('travels', function(Blueprint $table){

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('id_user')->unsigned();
            $table->string('name', 40);
            $table->longtext('description');
            $table->integer('id_accomodation')->unsigned();
            $table->date('start_date');
            $table->date('end_date');
            $table->timestamps();

            $table->unique('id');

            $table->foreign('id_user')
                    ->references('id')
                    ->on('users')
                    ->onDelete('cascade');

            $table->foreign('id_accomodation')
                    ->references('id')
                    ->on('accomodations')
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
        Schema::drop('travels');
    }
}
