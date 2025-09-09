<?php

namespace App\Http\Controllers;

use App\Models\School;
use App\Models\News;
use App\Models\Gallery;
use App\Models\Facility;
use App\Models\Extracurricular;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $school = School::first();
        $latestNews = News::published()
            ->latest('published_at')
            ->take(6)
            ->get();
        
        $featuredGallery = Gallery::featured()
            ->orderBy('sort_order')
            ->take(8)
            ->get();

        $facilities = Facility::active()
            ->orderBy('type')
            ->take(8)
            ->get();

        return Inertia::render('welcome', [
            'school' => $school,
            'latestNews' => $latestNews,
            'featuredGallery' => $featuredGallery,
            'facilities' => $facilities,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($page = 'home')
    {
        $school = School::first();
        
        switch ($page) {
            case 'about':
                return Inertia::render('about', [
                    'school' => $school,
                ]);
                
            case 'academic':
                return Inertia::render('academic');
                
            case 'news':
                $news = News::published()
                    ->with('user')
                    ->latest('published_at')
                    ->paginate(12);

                return Inertia::render('news/index', [
                    'news' => $news,
                ]);
                
            case 'extracurriculars':
                $extracurriculars = Extracurricular::active()
                    ->orderBy('category')
                    ->orderBy('name')
                    ->get()
                    ->groupBy('category');

                return Inertia::render('extracurriculars', [
                    'extracurriculars' => $extracurriculars,
                ]);
                
            case 'gallery':
                $galleries = Gallery::orderBy('sort_order')
                    ->orderBy('created_at', 'desc')
                    ->paginate(20);

                $categories = Gallery::distinct()
                    ->pluck('category')
                    ->filter()
                    ->sort()
                    ->values();

                return Inertia::render('gallery', [
                    'galleries' => $galleries,
                    'categories' => $categories,
                ]);
                
            case 'facilities':
                $facilities = Facility::active()
                    ->orderBy('type')
                    ->orderBy('name')
                    ->get()
                    ->groupBy('type');

                return Inertia::render('facilities', [
                    'facilities' => $facilities,
                ]);
                
            case 'contact':
                return Inertia::render('contact', [
                    'school' => $school,
                ]);
                
            default:
                // Handle news article by slug
                if (is_string($page)) {
                    $article = News::where('slug', $page)
                        ->published()
                        ->with('user')
                        ->first();
                        
                    if ($article) {
                        $relatedNews = News::published()
                            ->where('id', '!=', $article->id)
                            ->where('type', $article->type)
                            ->latest('published_at')
                            ->take(4)
                            ->get();

                        return Inertia::render('news/show', [
                            'article' => $article,
                            'relatedNews' => $relatedNews,
                        ]);
                    }
                }
                
                return redirect()->route('home');
        }
    }
}