<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\School;
use App\Models\News;
use App\Models\Gallery;
use App\Models\Facility;
use App\Models\Extracurricular;
use App\Models\PpdbRegistration;
use App\Models\Feedback;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin SMKN 1 Majalengka',
            'email' => 'admin@smkn1majalengka.sch.id',
            'password' => Hash::make('password'),
        ]);

        // Create school profile
        School::factory()->create();

        // Create news with admin as author
        News::factory(20)->create([
            'user_id' => $admin->id,
        ]);

        // Create published news
        News::factory(15)->published()->create([
            'user_id' => $admin->id,
        ]);

        // Create announcements
        News::factory(5)->announcement()->published()->create([
            'user_id' => $admin->id,
        ]);

        // Create achievement news
        News::factory(8)->achievement()->published()->create([
            'user_id' => $admin->id,
        ]);

        // Create gallery items
        Gallery::factory(30)->create();
        Gallery::factory(8)->featured()->create();

        // Create facilities
        Facility::factory(12)->create();

        // Create extracurriculars
        Extracurricular::factory(15)->create();

        // Create PPDB registrations
        PpdbRegistration::factory(50)->create();
        PpdbRegistration::factory(20)->pending()->create();
        PpdbRegistration::factory(15)->approved()->create();
        PpdbRegistration::factory(5)->rejected()->create();

        // Create feedback
        Feedback::factory(30)->create();
        Feedback::factory(10)->unread()->create();
        Feedback::factory(8)->replied()->create([
            'replied_by' => $admin->id,
        ]);
    }
}
