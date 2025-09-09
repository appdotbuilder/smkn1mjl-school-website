<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Extracurricular>
 */
class ExtracurricularFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $extracurriculars = [
            'sports' => [
                ['Sepak Bola', 'Ekstrakurikuler sepak bola untuk mengembangkan bakat dan minat siswa dalam olahraga', 'Bapak Agus Susanto', 'Senin & Rabu 15:30-17:00'],
                ['Basket', 'Tim basket sekolah yang rutin mengikuti kompetisi antar sekolah', 'Ibu Sari Dewi', 'Selasa & Kamis 15:30-17:00'],
                ['Voli', 'Ekstrakurikuler voli putri dan putra dengan prestasi yang membanggakan', 'Bapak Rudi Hartono', 'Rabu & Jumat 15:30-17:00'],
                ['Badminton', 'Klub badminton sekolah dengan fasilitas lapangan indoor yang lengkap', 'Ibu Maya Sari', 'Senin & Kamis 15:30-17:00'],
            ],
            'arts' => [
                ['Tari Tradisional', 'Sanggar tari yang melestarikan budaya daerah melalui tarian tradisional', 'Ibu Ratna Sari', 'Selasa & Kamis 14:00-16:00'],
                ['Paduan Suara', 'Paduan suara sekolah yang sering tampil dalam acara resmi', 'Bapak Bambang Priyanto', 'Rabu & Jumat 14:00-16:00'],
                ['Seni Lukis', 'Klub seni lukis untuk mengembangkan kreativitas siswa dalam bidang seni rupa', 'Ibu Fitri Handayani', 'Senin & Rabu 14:00-16:00'],
                ['Theater', 'Teater sekolah yang mengembangkan kemampuan akting dan public speaking', 'Bapak Andi Pratama', 'Kamis & Sabtu 14:00-16:00'],
            ],
            'academic' => [
                ['Olimpiade Matematika', 'Pembinaan siswa untuk mengikuti kompetisi matematika tingkat nasional', 'Ibu Dr. Siti Aminah', 'Selasa & Kamis 13:00-15:00'],
                ['Olimpiade Sains', 'Tim olimpiade sains yang membina siswa dalam bidang fisika, kimia, dan biologi', 'Bapak Drs. Ahmad Fauzi', 'Senin & Rabu 13:00-15:00'],
                ['Debat Bahasa Indonesia', 'Klub debat untuk meningkatkan kemampuan berbicara dan berargumentasi', 'Ibu Lestari M.Pd', 'Rabu & Jumat 13:00-15:00'],
                ['English Club', 'Klub bahasa Inggris untuk meningkatkan kemampuan komunikasi dalam bahasa Inggris', 'Mr. John Smith', 'Selasa & Kamis 13:00-15:00'],
            ],
            'technology' => [
                ['Robotika', 'Klub robotika yang mengembangkan kemampuan siswa dalam bidang teknologi dan programming', 'Bapak Ir. Dedi Kurniawan', 'Senin & Rabu 15:00-17:00'],
                ['Web Development', 'Klub pengembangan website dan aplikasi mobile', 'Ibu S.Kom Rina Agustina', 'Selasa & Kamis 15:00-17:00'],
                ['Multimedia', 'Klub multimedia yang fokus pada desain grafis dan video editing', 'Bapak Yanto S.Kom', 'Rabu & Jumat 15:00-17:00'],
            ],
            'social' => [
                ['PMR', 'Palang Merah Remaja untuk melatih keterampilan pertolongan pertama', 'Ibu dr. Lina Marlina', 'Jumat 14:00-16:00'],
                ['Pramuka', 'Gerakan Pramuka untuk membentuk karakter kepemimpinan dan kemandirian', 'Bapak Drs. Hendra Wijaya', 'Sabtu 08:00-12:00'],
                ['BDI', 'Badan Dakwah Islam untuk kegiatan keagamaan dan pengembangan spiritual', 'Ustadz Ahmad Solichin', 'Jumat 12:30-14:00'],
            ],
        ];

        $category = fake()->randomElement(['sports', 'arts', 'academic', 'technology', 'social']);
        $extracurricularData = fake()->randomElement($extracurriculars[$category]);

        return [
            'name' => $extracurricularData[0],
            'description' => $extracurricularData[1],
            'image' => null,
            'coach' => $extracurricularData[2],
            'schedule' => $extracurricularData[3],
            'category' => $category,
            'is_active' => fake()->boolean(95),
        ];
    }

    /**
     * Indicate that the extracurricular is sports category.
     */
    public function sports(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'sports',
        ]);
    }

    /**
     * Indicate that the extracurricular is arts category.
     */
    public function arts(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'arts',
        ]);
    }

    /**
     * Indicate that the extracurricular is academic category.
     */
    public function academic(): static
    {
        return $this->state(fn (array $attributes) => [
            'category' => 'academic',
        ]);
    }
}