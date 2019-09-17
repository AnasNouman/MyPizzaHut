<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class myorders extends Model
{
     protected $fillable = ['id', 'name','email','phone','order','quantity','price','address'];

}
