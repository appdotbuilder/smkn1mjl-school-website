<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Extracurricular
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $image
 * @property string|null $coach
 * @property string|null $schedule
 * @property string $category
 * @property bool $is_active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular query()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular active()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular ofCategory($category)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCoach($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereUpdatedAt($value)
 * @method static \Database\Factories\ExtracurricularFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Extracurricular extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'image',
        'coach',
        'schedule',
        'category',
        'is_active',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active extracurriculars.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope a query to only include extracurriculars of a specific category.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @param  string  $category
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeOfCategory($query, $category)
    {
        return $query->where('category', $category);
    }
}