<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreNewsRequest extends FormRequest
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
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'excerpt' => 'required|string|max:500',
            'image' => 'nullable|string',
            'type' => 'required|in:news,announcement,achievement',
            'status' => 'required|in:draft,published',
            'published_at' => 'nullable|date',
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
            'title.required' => 'Judul berita wajib diisi.',
            'title.max' => 'Judul berita maksimal 255 karakter.',
            'content.required' => 'Konten berita wajib diisi.',
            'excerpt.required' => 'Ringkasan berita wajib diisi.',
            'excerpt.max' => 'Ringkasan berita maksimal 500 karakter.',
            'type.required' => 'Jenis berita wajib dipilih.',
            'type.in' => 'Jenis berita tidak valid.',
            'status.required' => 'Status berita wajib dipilih.',
            'status.in' => 'Status berita tidak valid.',
            'published_at.date' => 'Format tanggal publikasi tidak valid.',
        ];
    }
}