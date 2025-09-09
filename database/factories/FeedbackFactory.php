<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Feedback>
 */
class FeedbackFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $types = [
            'suggestion' => [
                'Saran Perbaikan Fasilitas Sekolah',
                'Usulan Kegiatan Ekstrakurikuler Baru',
                'Saran Peningkatan Kualitas Pembelajaran',
            ],
            'complaint' => [
                'Keluhan Fasilitas Toilet Yang Kotor',
                'Keluhan Pelayanan Kantin Sekolah',
                'Keluhan Kebersihan Ruang Kelas',
            ],
            'question' => [
                'Pertanyaan Tentang Syarat Masuk SMK',
                'Informasi Biaya Sekolah',
                'Pertanyaan Program Keahlian',
            ],
            'appreciation' => [
                'Apresiasi Kinerja Guru Yang Baik',
                'Terima Kasih Atas Pelayanan Administrasi',
                'Pujian Untuk Fasilitas Sekolah',
            ],
        ];

        $type = fake()->randomElement(['suggestion', 'complaint', 'question', 'appreciation']);
        $subject = fake()->randomElement($types[$type]);

        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'subject' => $subject,
            'message' => fake()->paragraphs(3, true),
            'type' => $type,
            'status' => fake()->randomElement(['unread', 'read', 'replied']),
            'admin_reply' => fake()->boolean(30) ? fake()->paragraph() : null,
            'replied_at' => fake()->boolean(30) ? fake()->dateTimeBetween('-1 week', 'now') : null,
            'replied_by' => fake()->boolean(30) ? User::factory() : null,
        ];
    }

    /**
     * Indicate that the feedback is unread.
     */
    public function unread(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'unread',
            'admin_reply' => null,
            'replied_at' => null,
            'replied_by' => null,
        ]);
    }

    /**
     * Indicate that the feedback has been replied.
     */
    public function replied(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'replied',
            'admin_reply' => fake()->paragraph(),
            'replied_at' => fake()->dateTimeBetween('-1 week', 'now'),
            'replied_by' => User::factory(),
        ]);
    }
}