<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFeedbackRequest;
use App\Models\Feedback;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FeedbackController extends Controller
{
    /**
     * Display the feedback form.
     */
    public function index()
    {
        return Inertia::render('feedback/index');
    }

    /**
     * Store a newly created feedback.
     */
    public function store(StoreFeedbackRequest $request)
    {
        Feedback::create($request->validated());

        return back()->with('success', 'Terima kasih atas saran dan masukan Anda. Kami akan segera menindaklanjutinya.');
    }
}