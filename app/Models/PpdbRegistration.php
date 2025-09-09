<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PpdbRegistration
 *
 * @property int $id
 * @property string $registration_number
 * @property string $full_name
 * @property string $email
 * @property string $phone
 * @property \Illuminate\Support\Carbon $birth_date
 * @property string $birth_place
 * @property string $gender
 * @property string $address
 * @property string $school_origin
 * @property string $parent_name
 * @property string $parent_phone
 * @property string $parent_job
 * @property string $major_choice
 * @property float|null $report_grade
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration pending()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration approved()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration rejected()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereBirthDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereBirthPlace($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereMajorChoice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentJob($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereRegistrationNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereReportGrade($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereSchoolOrigin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereUpdatedAt($value)
 * @method static \Database\Factories\PpdbRegistrationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PpdbRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'registration_number',
        'full_name',
        'email',
        'phone',
        'birth_date',
        'birth_place',
        'gender',
        'address',
        'school_origin',
        'parent_name',
        'parent_phone',
        'parent_job',
        'major_choice',
        'report_grade',
        'status',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
        'report_grade' => 'decimal:1',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include pending registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }

    /**
     * Scope a query to only include approved registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeApproved($query)
    {
        return $query->where('status', 'approved');
    }

    /**
     * Scope a query to only include rejected registrations.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeRejected($query)
    {
        return $query->where('status', 'rejected');
    }
}