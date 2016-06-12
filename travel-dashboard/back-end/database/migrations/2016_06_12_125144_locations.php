<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Locations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

        Schema::create('locations', function(Blueprint $table){

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->integer('id_country')->unsigned();
            $table->string('city', 50);
            $table->longText('description');

            $table->timestamps();

            $table->unique('id');
            $table->index(['city', 'id_country'], 'location');

            $table->foreign('id_country')
                    ->references('id')
                    ->on('countries')
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
        Schema::drop('locations');
    }
}
