<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\School>
 */
class SchoolFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => 'SMK Negeri 1 Majalengka',
            'description' => 'SMK Negeri 1 Majalengka adalah sekolah menengah kejuruan yang berkomitmen untuk menciptakan lulusan yang berkualitas, berkarakter, dan siap memasuki dunia kerja maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.',
            'vision' => 'Menjadi SMK yang unggul, berkarakter, dan berdaya saing global dalam menyiapkan tenaga kerja profesional.',
            'mission' => 'Menyelenggarakan pendidikan kejuruan yang berkualitas, mengembangkan kompetensi siswa sesuai dengan kebutuhan industri, membentuk karakter yang berakhlak mulia, dan mempersiapkan siswa untuk bersaing di era global.',
            'history' => 'SMK Negeri 1 Majalengka didirikan pada tahun 1965 sebagai bentuk komitmen pemerintah dalam mengembangkan pendidikan kejuruan di Kabupaten Majalengka. Sekolah ini telah meluluskan ribuan siswa yang kini tersebar di berbagai sektor industri dan melanjutkan pendidikan ke perguruan tinggi.',
            'address' => 'Jl. Raya Majalengka-Cirebon No. 123, Majalengka, Jawa Barat 45411',
            'phone' => '(0233) 281234',
            'email' => 'info@smkn1majalengka.sch.id',
            'website' => 'https://www.smkn1majalengka.sch.id',
            'logo' => null,
            'banner' => null,
        ];
    }
}