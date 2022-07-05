<?php

namespace App\Http\Controllers;

use App\Models\task;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class TaskController extends Controller
{
    // create task
    public function store(Request $request)
    {
        try {

            $attr = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'comment' => 'nullable',
                'status' => ['required', Rule::in(['todo', 'done'])],
                'planned_stop_date' => 'integer|nullable',
                'actual_stop_date' => 'integer|nullable',
            ]);

            $attr['user_id'] = auth()->id();

            task::create([
                'title' => $attr['title'],
                'user_id' => $attr['user_id'],
                'description' => $attr['description'],
                'comment' => $attr['comment'],
                'status' => $attr['status'],
                'planned_stop_date' => $attr['planned_stop_date'],
                'actual_stop_date' => $attr['actual_stop_date'],
            ]);

            return response()->json([
                'message' => "task created successfully"
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // edit task
    public function update(Request $request, task $task)
    {
        try {

            $attr = $request->validate([
                'title' => 'required',
                'description' => 'required',
                'comment' => 'nullable',
                'status' => ['required', Rule::in(['todo', 'done'])],
                'planned_stop_date' => 'integer|nullable',
                'actual_stop_date' => 'integer|nullable',
            ]);



            $task->title = $attr['title'];
            $task->description =  $attr['description'];
            $task->comment =  $attr['comment'];
            $task->status =  $attr['status'];
            $task->planned_stop_date =  $attr['planned_stop_date'];
            $task->actual_stop_date =  $attr['actual_stop_date'];

            $task->save();

            return response()->json([
                'message' => "task edited successfully"
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // delete task
    public function destroy(task $task)
    {
        try {
            $task->delete();
            return response()->json([
                'message' => "task deleted successfully"
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    // fetch and show single task
    public function show(task $task)
    {
        try {
            return response()->json([
                'message' => "task found",
                'result' => $task
            ], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
