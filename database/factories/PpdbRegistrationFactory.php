<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PpdbRegistration>
 */
class PpdbRegistrationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $majors = [
            'Teknik Komputer dan Jaringan',
            'Multimedia',
            'Akuntansi',
            'Administrasi Perkantoran',
            'Pemasaran',
            'Teknik Mesin',
            'Teknik Elektronika',
            'Tata Boga',
            'Tata Busana',
            'Teknik Otomotif'
        ];

        return [
            'registration_number' => 'PPDB' . date('Y') . fake()->unique()->numerify('####'),
            'full_name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'birth_date' => fake()->dateTimeBetween('-18 years', '-15 years'),
            'birth_place' => fake()->city(),
            'gender' => fake()->randomElement(['male', 'female']),
            'address' => fake()->address(),
            'school_origin' => fake()->randomElement([
                'SMP Negeri 1 Majalengka',
                'SMP Negeri 2 Majalengka',
                'SMP Islam Al-Azhar',
                'SMP Santa Maria',
                'SMP Bina Bangsa',
                'MTs Negeri 1 Majalengka',
                'MTs Al-Hikmah',
            ]),
            'parent_name' => fake()->name(),
            'parent_phone' => fake()->phoneNumber(),
            'parent_job' => fake()->randomElement([
                'Petani',
                'Pedagang',
                'PNS',
                'Guru',
                'Karyawan Swasta',
                'TNI/POLRI',
                'Dokter',
                'Pengusaha',
                'Buruh',
                'Ibu Rumah Tangga'
            ]),
            'major_choice' => fake()->randomElement($majors),
            'report_grade' => fake()->randomFloat(1, 7.0, 10.0),
            'status' => fake()->randomElement(['pending', 'approved', 'rejected']),
            'notes' => fake()->boolean(30) ? fake()->sentence() : null,
        ];
    }

    /**
     * Indicate that the registration is pending.
     */
    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'pending',
            'notes' => null,
        ]);
    }

    /**
     * Indicate that the registration is approved.
     */
    public function approved(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'approved',
            'notes' => 'Selamat! Pendaftaran Anda diterima.',
        ]);
    }

    /**
     * Indicate that the registration is rejected.
     */
    public function rejected(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'rejected',
            'notes' => 'Maaf, pendaftaran Anda belum dapat kami terima saat ini.',
        ]);
    }
}