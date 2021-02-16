<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Events\TKCreated;
use App\Events\TKRemoved;
use App\TK;
use App\User;
    class TKController extends Controller
    {
        //
        public function fetchAll(){
            $TKs = TK::all();
            //return response()->json($TKs);
            return $TKs;
        }

        public function store(Request $request){
            $TK = TK::create($request->all());
            broadcast(new TKCreated($TK));
            return response()->json("added");
        }

        public function delete($id){
            $TK = TK::find($id);
            broadcast(new TKRemoved($TK));
            TK::destroy($id);
            return response()->json("deleted");
        }
        public function getUser()
        {
            return auth()->user();
        }
    }
