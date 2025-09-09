<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PpdbController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PpdbController as AdminPpdbController;
use App\Http\Controllers\Admin\FeedbackController as AdminFeedbackController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Public routes
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/tentang', function() { return app(HomeController::class)->show('about'); })->name('about');
Route::get('/akademik', function() { return app(HomeController::class)->show('academic'); })->name('academic');
Route::get('/berita', function() { return app(HomeController::class)->show('news'); })->name('news.index');
Route::get('/berita/{slug}', [HomeController::class, 'show'])->name('news.show');
Route::get('/ekstrakurikuler', function() { return app(HomeController::class)->show('extracurriculars'); })->name('extracurriculars');
Route::get('/galeri', function() { return app(HomeController::class)->show('gallery'); })->name('gallery');
Route::get('/fasilitas', function() { return app(HomeController::class)->show('facilities'); })->name('facilities');
Route::get('/kontak', function() { return app(HomeController::class)->show('contact'); })->name('contact');

// PPDB routes
Route::get('/ppdb', [PpdbController::class, 'index'])->name('ppdb.index');
Route::post('/ppdb', [PpdbController::class, 'store'])->name('ppdb.store');
Route::post('/ppdb/check', [PpdbController::class, 'show'])->name('ppdb.check');

// Feedback routes
Route::get('/saran', [FeedbackController::class, 'index'])->name('feedback.index');
Route::post('/saran', [FeedbackController::class, 'store'])->name('feedback.store');

// Dashboard (auth required)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return redirect()->route('admin.dashboard');
    })->name('dashboard');
});

// Admin routes
Route::middleware(['auth', 'verified'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    
    // News management
    Route::resource('news', NewsController::class);
    
    // PPDB management
    Route::get('ppdb', [AdminPpdbController::class, 'index'])->name('ppdb.index');
    Route::get('ppdb/{ppdb}', [AdminPpdbController::class, 'show'])->name('ppdb.show');
    Route::put('ppdb/{ppdb}', [AdminPpdbController::class, 'update'])->name('ppdb.update');

    
    // Feedback management
    Route::get('feedback', [AdminFeedbackController::class, 'index'])->name('feedback.index');
    Route::get('feedback/{feedback}', [AdminFeedbackController::class, 'show'])->name('feedback.show');
    Route::put('feedback/{feedback}', [AdminFeedbackController::class, 'update'])->name('feedback.update');
    Route::delete('feedback/{feedback}', [AdminFeedbackController::class, 'destroy'])->name('feedback.destroy');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';