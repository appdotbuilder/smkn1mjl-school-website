<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = Feedback::with('repliedBy');

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('type')) {
            $query->where('type', $request->type);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('subject', 'like', "%{$search}%");
            });
        }

        $feedback = $query->latest()->paginate(15);

        return Inertia::render('admin/feedback/index', [
            'feedback' => $feedback,
            'filters' => $request->only(['status', 'type', 'search']),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Feedback $feedback)
    {
        $feedback->load('repliedBy');

        // Mark as read if it's unread
        if ($feedback->status === 'unread') {
            $feedback->update(['status' => 'read']);
        }

        return Inertia::render('admin/feedback/show', [
            'feedback' => $feedback,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Feedback $feedback)
    {
        $request->validate([
            'admin_reply' => 'required|string|min:10',
        ]);

        $feedback->update([
            'admin_reply' => $request->admin_reply,
            'status' => 'replied',
            'replied_at' => now(),
            'replied_by' => auth()->id(),
        ]);

        return back()->with('success', 'Balasan berhasil dikirim.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Feedback $feedback)
    {
        $feedback->delete();

        return redirect()->route('admin.feedback.index')
            ->with('success', 'Feedback berhasil dihapus.');
    }
}