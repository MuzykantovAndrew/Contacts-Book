<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Contact;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $model1 = new Contact();
        $model1->user_id = 1;
        $model1->name = 'Иванов Иван';
        $model1->address = 'Киев';
        $model1->phone = '222-22-22';
        $model1->email = 'ivanov@gmail.com';
        $model1->status = 'норм-контакт';
        $model1->save();

        $model2 = new Contact();
        $model2->user_id = 1;
        $model2->name = 'Петров Петр';
        $model2->address = 'Одесса';
        $model2->phone = '333-33-33';
        $model2->email = 'petrov@gmail.com';
        $model2->status= 'норм-контакт';
        $model2->save();
        
        $model3 = new Contact();
        $model3->user_id = 1;
        $model3->name = 'Сидоров Сидр';
        $model3->address = 'Львов';
        $model3->phone = '444-44-44';
        $model3->email = 'sidorov@gmail.com';
        $model3->status= 'норм-контакт';
        $model3->save();
    }
}
