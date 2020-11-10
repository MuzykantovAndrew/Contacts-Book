<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

use Illuminate\Support\Facades\Auth;


class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::all();
        return response()->json($contacts);
    }

    public function filter($sid)
    {
        if($sid == 0){
            $selectContacts = Contact::all();
        } else{
        $selectContacts = Contact::where('category_id', $sid)->get();
        }
        return response()->json($selectContacts);
    }

    public function create(Request $request)
    {
        
        $contact = Contact::create([
            'user_id'       => 1,   
            'name'          => $request->name,
            'category_id'   => $request->category_id,  
            'address'       => $request->address,    
            'phone'         => $request->phone,   
            'email'         => $request->email,  
            'date'          => date('Y-m-d'), 
            'status'        => $request->status    
        ]);
        return response()->json($contact);
    }

    public function edit($cid)
    {
        $contact = Contact::find($cid);
        return response()->json($contact);
    }

    public function update(Request $request, $cid)
    {
        $contact = Contact::find($cid)->update([
            'user_id'       => $request->user_id,   
            'name'          => $request->name,  
            'address'       => $request->address, 
            'category_id'   => $request->category_id,    
            'phone'         => $request->phone,   
            'email'         => $request->email,  
            'date'          => $request->date, 
            'status'        => $request->status    
        ]);
        return response()->json($contact);
    }

    public function delete($cid)
    {
        $contact = Contact::find($cid)->delete();
        return response()->json($contact);
    }
}
