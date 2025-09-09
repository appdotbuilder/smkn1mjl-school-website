<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\News>
 */
class NewsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence(6);
        
        return [
            'title' => $title,
            'slug' => Str::slug($title),
            'content' => fake()->paragraphs(5, true),
            'excerpt' => fake()->paragraph(3),
            'image' => null,
            'type' => fake()->randomElement(['news', 'announcement', 'achievement']),
            'status' => fake()->randomElement(['draft', 'published']),
            'published_at' => fake()->dateTimeBetween('-1 month', '+1 week'),
            'user_id' => User::factory(),
        ];
    }

    /**
     * Indicate that the news is published.
     */
    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'published',
            'published_at' => fake()->dateTimeBetween('-1 month', 'now'),
        ]);
    }

    /**
     * Indicate that the news is an announcement.
     */
    public function announcement(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'announcement',
            'title' => 'Pengumuman: ' . fake()->sentence(4),
        ]);
    }

    /**
     * Indicate that the news is about achievement.
     */
    public function achievement(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'achievement',
            'title' => 'Prestasi: ' . fake()->sentence(4),
        ]);
    }
}