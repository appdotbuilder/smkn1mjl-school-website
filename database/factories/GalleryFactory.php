<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Gallery>
 */
class GalleryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => fake()->sentence(4),
            'description' => fake()->paragraph(),
            'image' => fake()->imageUrl(800, 600, 'school'),
            'type' => fake()->randomElement(['photo', 'video']),
            'category' => fake()->randomElement(['kegiatan', 'pembelajaran', 'ekstrakurikuler', 'prestasi', 'fasilitas']),
            'sort_order' => fake()->numberBetween(0, 100),
            'is_featured' => fake()->boolean(30),
        ];
    }

    /**
     * Indicate that the gallery item is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
            'sort_order' => fake()->numberBetween(1, 10),
        ]);
    }

    /**
     * Indicate that the gallery item is a video.
     */
    public function video(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'video',
        ]);
    }
}