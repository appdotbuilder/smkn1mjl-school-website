<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\PpdbRegistration;
use App\Models\Feedback;
use App\Models\Gallery;
use App\Models\Facility;
use App\Models\Extracurricular;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the admin dashboard.
     */
    public function index()
    {
        $stats = [
            'total_news' => News::count(),
            'published_news' => News::published()->count(),
            'total_ppdb' => PpdbRegistration::count(),
            'pending_ppdb' => PpdbRegistration::pending()->count(),
            'approved_ppdb' => PpdbRegistration::approved()->count(),
            'total_feedback' => Feedback::count(),
            'unread_feedback' => Feedback::unread()->count(),
            'total_gallery' => Gallery::count(),
            'total_facilities' => Facility::count(),
            'total_extracurriculars' => Extracurricular::count(),
        ];

        $recentNews = News::with('user')
            ->latest()
            ->take(5)
            ->get();

        $recentPpdb = PpdbRegistration::latest()
            ->take(5)
            ->get();

        $recentFeedback = Feedback::latest()
            ->take(5)
            ->get();

        return Inertia::render('admin/dashboard', [
            'stats' => $stats,
            'recentNews' => $recentNews,
            'recentPpdb' => $recentPpdb,
            'recentFeedback' => $recentFeedback,
        ]);
    }
}