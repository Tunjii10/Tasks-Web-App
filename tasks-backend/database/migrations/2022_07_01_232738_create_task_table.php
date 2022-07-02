<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task', function (Blueprint $table) {
            $table->id();
            $table->string('user_id');
            $table->timestamps();
            $table->string("title");
            $table->string("description");
            $table->string("comment")->nullable();
            $table->enum("status", ['todo', 'done'])->default('todo');
            $table->timestamp("planned_stop_date")->nullable();
            $table->timestamp("actual_stop_date")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task');
    }
}
