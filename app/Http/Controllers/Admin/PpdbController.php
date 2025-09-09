<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PpdbRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PpdbController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = PpdbRegistration::query();

        if ($request->filled('status')) {
            $query->where('status', $request->status);
        }

        if ($request->filled('search')) {
            $search = $request->search;
            $query->where(function ($q) use ($search) {
                $q->where('full_name', 'like', "%{$search}%")
                  ->orWhere('email', 'like', "%{$search}%")
                  ->orWhere('registration_number', 'like', "%{$search}%");
            });
        }

        $registrations = $query->latest()->paginate(15);

        return Inertia::render('admin/ppdb/index', [
            'registrations' => $registrations,
            'filters' => $request->only(['status', 'search']),
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(PpdbRegistration $ppdb)
    {
        return Inertia::render('admin/ppdb/show', [
            'registration' => $ppdb,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PpdbRegistration $ppdb)
    {
        $request->validate([
            'status' => 'required|in:pending,approved,rejected',
            'notes' => 'nullable|string',
        ]);

        $ppdb->update([
            'status' => $request->status,
            'notes' => $request->notes,
        ]);

        return back()->with('success', 'Status pendaftaran berhasil diperbarui.');
    }


}