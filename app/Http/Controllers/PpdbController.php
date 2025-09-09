<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePpdbRegistrationRequest;
use App\Models\PpdbRegistration;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PpdbController extends Controller
{
    /**
     * Display the PPDB form.
     */
    public function index()
    {
        return Inertia::render('ppdb/index');
    }

    /**
     * Store a newly created PPDB registration.
     */
    public function store(StorePpdbRegistrationRequest $request)
    {
        $registrationNumber = 'PPDB' . date('Y') . str_pad((string)(PpdbRegistration::count() + 1), 4, '0', STR_PAD_LEFT);

        $registration = PpdbRegistration::create(array_merge(
            $request->validated(),
            ['registration_number' => $registrationNumber]
        ));

        return Inertia::render('ppdb/success', [
            'registration' => $registration,
        ])->with('success', 'Pendaftaran PPDB berhasil! Nomor registrasi Anda: ' . $registrationNumber);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id = null)
    {
        if ($request->has('registration_number') && $request->has('email')) {
            $request->validate([
                'registration_number' => 'required|string',
                'email' => 'required|email',
            ]);

            $registration = PpdbRegistration::where('registration_number', $request->registration_number)
                ->where('email', $request->email)
                ->first();

            if (!$registration) {
                return back()->with('error', 'Data pendaftaran tidak ditemukan.');
            }

            return Inertia::render('ppdb/status', [
                'registration' => $registration,
            ]);
        }
        
        // Default show behavior if needed
        return redirect()->route('ppdb.index');
    }
}