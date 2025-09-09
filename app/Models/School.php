<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\School
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $vision
 * @property string $mission
 * @property string $history
 * @property string $address
 * @property string $phone
 * @property string $email
 * @property string|null $website
 * @property string|null $logo
 * @property string|null $banner
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|School newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|School newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|School query()
 * @method static \Illuminate\Database\Eloquent\Builder|School whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereBanner($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereHistory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereLogo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereMission($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereVision($value)
 * @method static \Illuminate\Database\Eloquent\Builder|School whereWebsite($value)
 * @method static \Database\Factories\SchoolFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class School extends Model
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
        'vision',
        'mission',
        'history',
        'address',
        'phone',
        'email',
        'website',
        'logo',
        'banner',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];
}