<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class task extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'comment',
        'status',
        'planned_stop_date',
        'actual_stop_date'
    ];

    // relationship with t=user
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
