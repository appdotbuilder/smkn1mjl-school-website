<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePpdbRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:ppdb_registrations,email',
            'phone' => 'required|string|max:20',
            'birth_date' => 'required|date',
            'birth_place' => 'required|string|max:255',
            'gender' => 'required|in:male,female',
            'address' => 'required|string',
            'school_origin' => 'required|string|max:255',
            'parent_name' => 'required|string|max:255',
            'parent_phone' => 'required|string|max:20',
            'parent_job' => 'required|string|max:255',
            'major_choice' => 'required|string|max:255',
            'report_grade' => 'nullable|numeric|min:0|max:10',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'full_name.required' => 'Nama lengkap wajib diisi.',
            'email.required' => 'Alamat email wajib diisi.',
            'email.email' => 'Format email tidak valid.',
            'email.unique' => 'Email ini sudah terdaftar.',
            'phone.required' => 'Nomor telepon wajib diisi.',
            'birth_date.required' => 'Tanggal lahir wajib diisi.',
            'birth_date.date' => 'Format tanggal lahir tidak valid.',
            'birth_place.required' => 'Tempat lahir wajib diisi.',
            'gender.required' => 'Jenis kelamin wajib dipilih.',
            'gender.in' => 'Jenis kelamin tidak valid.',
            'address.required' => 'Alamat wajib diisi.',
            'school_origin.required' => 'Asal sekolah wajib diisi.',
            'parent_name.required' => 'Nama orang tua wajib diisi.',
            'parent_phone.required' => 'Nomor telepon orang tua wajib diisi.',
            'parent_job.required' => 'Pekerjaan orang tua wajib diisi.',
            'major_choice.required' => 'Pilihan jurusan wajib dipilih.',
            'report_grade.numeric' => 'Nilai rapor harus berupa angka.',
            'report_grade.min' => 'Nilai rapor minimal 0.',
            'report_grade.max' => 'Nilai rapor maksimal 10.',
        ];
    }
}