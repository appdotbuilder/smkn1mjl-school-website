<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Facility>
 */
class FacilityFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $facilities = [
            'academic' => [
                ['Laboratorium Komputer', 'Ruang laboratorium komputer dengan 40 unit PC terbaru dan akses internet cepat', 'computer', 40],
                ['Perpustakaan', 'Perpustakaan modern dengan koleksi buku lengkap dan ruang baca yang nyaman', 'library', 100],
                ['Laboratorium Bahasa', 'Laboratorium bahasa dengan sistem audio-visual untuk pembelajaran bahasa asing', 'language', 32],
                ['Ruang Multimedia', 'Ruang multimedia dengan proyektor dan sistem audio berkualitas tinggi', 'projector', 50],
            ],
            'sports' => [
                ['Lapangan Basket', 'Lapangan basket outdoor dengan standar internasional', 'basketball', null],
                ['Lapangan Voli', 'Lapangan voli indoor dengan lantai kayu berkualitas', 'volleyball', null],
                ['Lapangan Futsal', 'Lapangan futsal dengan rumput sintetis dan pencahayaan yang baik', 'soccer', null],
                ['Gym', 'Ruang olahraga indoor dengan berbagai peralatan fitness', 'dumbbell', 30],
            ],
            'supporting' => [
                ['Kantin Sekolah', 'Kantin sekolah yang bersih dan menyediakan makanan sehat', 'utensils', 200],
                ['Masjid', 'Masjid sekolah dengan kapasitas 300 jamaah', 'mosque', 300],
                ['Parkir Siswa', 'Area parkir yang luas dan aman untuk kendaraan siswa', 'car', 500],
                ['UKS', 'Unit Kesehatan Sekolah dengan peralatan medis lengkap', 'heart', 20],
            ],
        ];

        $type = fake()->randomElement(['academic', 'sports', 'supporting']);
        $facilityData = fake()->randomElement($facilities[$type]);

        return [
            'name' => $facilityData[0],
            'description' => $facilityData[1],
            'image' => null,
            'icon' => $facilityData[2],
            'type' => $type,
            'capacity' => $facilityData[3],
            'is_active' => fake()->boolean(90),
        ];
    }

    /**
     * Indicate that the facility is academic type.
     */
    public function academic(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'academic',
        ]);
    }

    /**
     * Indicate that the facility is sports type.
     */
    public function sports(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'sports',
        ]);
    }

    /**
     * Indicate that the facility is supporting type.
     */
    public function supporting(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'supporting',
        ]);
    }
}