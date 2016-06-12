<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Accomodations extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accomodations', function(Blueprint $table){

            $table->engine = 'InnoDB';

            $table->increments('id');
            $table->string('name', 40);
            $table->string('street', 60);
            $table->integer('id_location')->unsigned();
            $table->longtext('description');

            $table->timestamps();

            $table->unique('id');
            $table->index(['id_location', 'street'], 'accomodation');

            $table->foreign('id_location')
                    ->references('id')
                    ->on('locations')
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
        Schema::drop('accomodations');
    }
}
