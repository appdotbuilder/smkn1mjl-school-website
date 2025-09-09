import React from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface PpdbFormData {
    full_name: string;
    email: string;
    phone: string;
    birth_date: string;
    birth_place: string;
    gender: string;
    address: string;
    school_origin: string;
    parent_name: string;
    parent_phone: string;
    parent_job: string;
    major_choice: string;
    report_grade: string;
    [key: string]: string;
}

export default function PpdbIndex() {
    const { data, setData, post, processing, errors } = useForm<PpdbFormData>({
        full_name: '',
        email: '',
        phone: '',
        birth_date: '',
        birth_place: '',
        gender: '',
        address: '',
        school_origin: '',
        parent_name: '',
        parent_phone: '',
        parent_job: '',
        major_choice: '',
        report_grade: '',
    });

    const majors = [
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/ppdb');
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="bg-black/95 backdrop-blur-sm border-b border-yellow-500/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-xl">🏫</span>
                            </div>
                            <div>
                                <h1 className="text-yellow-400 font-bold text-lg">SMKN 1 Majalengka</h1>
                                <p className="text-xs text-gray-400">Pendaftaran Siswa Baru</p>
                            </div>
                        </Link>
                        
                        <Link href="/">
                            <Button variant="outline" className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black">
                                ← Kembali
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">📝 Pendaftaran Peserta Didik Baru (PPDB)</h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Bergabunglah dengan SMK Negeri 1 Majalengka dan wujudkan masa depan cemerlang Anda!
                    </p>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-500/30 max-w-4xl mx-auto">
                        <h3 className="text-yellow-400 font-semibold text-lg mb-3">🗓️ Jadwal PPDB 2024</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="bg-black/30 rounded-lg p-4">
                                <div className="text-yellow-400 font-medium">Pendaftaran Online</div>
                                <div className="text-gray-300">1 - 31 Mei 2024</div>
                            </div>
                            <div className="bg-black/30 rounded-lg p-4">
                                <div className="text-yellow-400 font-medium">Verifikasi Berkas</div>
                                <div className="text-gray-300">1 - 7 Juni 2024</div>
                            </div>
                            <div className="bg-black/30 rounded-lg p-4">
                                <div className="text-yellow-400 font-medium">Pengumuman</div>
                                <div className="text-gray-300">15 Juni 2024</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center">
                            👤 Data Pribadi Calon Siswa
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-white font-medium mb-2">Nama Lengkap *</label>
                                <input
                                    type="text"
                                    value={data.full_name}
                                    onChange={(e) => setData('full_name', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Masukkan nama lengkap"
                                />
                                {errors.full_name && (
                                    <p className="text-red-400 text-sm mt-1">{errors.full_name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="contoh@email.com"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Nomor Telepon *</label>
                                <input
                                    type="tel"
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="08XXXXXXXXXX"
                                />
                                {errors.phone && (
                                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Tanggal Lahir *</label>
                                <input
                                    type="date"
                                    value={data.birth_date}
                                    onChange={(e) => setData('birth_date', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                />
                                {errors.birth_date && (
                                    <p className="text-red-400 text-sm mt-1">{errors.birth_date}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Tempat Lahir *</label>
                                <input
                                    type="text"
                                    value={data.birth_place}
                                    onChange={(e) => setData('birth_place', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Kota tempat lahir"
                                />
                                {errors.birth_place && (
                                    <p className="text-red-400 text-sm mt-1">{errors.birth_place}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Jenis Kelamin *</label>
                                <select
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Pilih jenis kelamin</option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                                {errors.gender && (
                                    <p className="text-red-400 text-sm mt-1">{errors.gender}</p>
                                )}
                            </div>
                        </div>

                        <div className="mb-8">
                            <label className="block text-white font-medium mb-2">Alamat Lengkap *</label>
                            <textarea
                                value={data.address}
                                onChange={(e) => setData('address', e.target.value)}
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                rows={3}
                                placeholder="Masukkan alamat lengkap"
                            />
                            {errors.address && (
                                <p className="text-red-400 text-sm mt-1">{errors.address}</p>
                            )}
                        </div>

                        <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                            🎓 Data Akademik
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-white font-medium mb-2">Asal Sekolah *</label>
                                <input
                                    type="text"
                                    value={data.school_origin}
                                    onChange={(e) => setData('school_origin', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Nama sekolah asal"
                                />
                                {errors.school_origin && (
                                    <p className="text-red-400 text-sm mt-1">{errors.school_origin}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Pilihan Jurusan *</label>
                                <select
                                    value={data.major_choice}
                                    onChange={(e) => setData('major_choice', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                >
                                    <option value="">Pilih jurusan</option>
                                    {majors.map((major) => (
                                        <option key={major} value={major}>{major}</option>
                                    ))}
                                </select>
                                {errors.major_choice && (
                                    <p className="text-red-400 text-sm mt-1">{errors.major_choice}</p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-white font-medium mb-2">Rata-rata Nilai Rapor (Opsional)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    min="0"
                                    max="10"
                                    value={data.report_grade}
                                    onChange={(e) => setData('report_grade', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors md:w-64"
                                    placeholder="Contoh: 8.5"
                                />
                                {errors.report_grade && (
                                    <p className="text-red-400 text-sm mt-1">{errors.report_grade}</p>
                                )}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-yellow-400 mb-6 flex items-center">
                            👨‍👩‍👧‍👦 Data Orang Tua/Wali
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-white font-medium mb-2">Nama Orang Tua/Wali *</label>
                                <input
                                    type="text"
                                    value={data.parent_name}
                                    onChange={(e) => setData('parent_name', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Nama lengkap orang tua/wali"
                                />
                                {errors.parent_name && (
                                    <p className="text-red-400 text-sm mt-1">{errors.parent_name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-white font-medium mb-2">Nomor Telepon Orang Tua *</label>
                                <input
                                    type="tel"
                                    value={data.parent_phone}
                                    onChange={(e) => setData('parent_phone', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="08XXXXXXXXXX"
                                />
                                {errors.parent_phone && (
                                    <p className="text-red-400 text-sm mt-1">{errors.parent_phone}</p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="block text-white font-medium mb-2">Pekerjaan Orang Tua *</label>
                                <input
                                    type="text"
                                    value={data.parent_job}
                                    onChange={(e) => setData('parent_job', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Pekerjaan orang tua/wali"
                                />
                                {errors.parent_job && (
                                    <p className="text-red-400 text-sm mt-1">{errors.parent_job}</p>
                                )}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end space-x-4">
                            <Link href="/">
                                <Button type="button" variant="outline" className="border-gray-600 text-gray-400 hover:border-gray-500">
                                    Batal
                                </Button>
                            </Link>
                            <Button 
                                type="submit" 
                                disabled={processing}
                                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8"
                            >
                                {processing ? '⏳ Memproses...' : '🚀 Daftar Sekarang'}
                            </Button>
                        </div>
                    </form>

                    {/* Check Status */}
                    <div className="mt-12 bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                        <h3 className="text-blue-400 font-semibold text-lg mb-4 flex items-center">
                            🔍 Cek Status Pendaftaran
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Sudah mendaftar? Cek status pendaftaran Anda dengan nomor registrasi dan email.
                        </p>
                        <form method="POST" action="/ppdb/check" className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                name="registration_number"
                                placeholder="Nomor Registrasi"
                                className="px-4 py-2 bg-black border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="px-4 py-2 bg-black border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                                required
                            />
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white px-6">
                                Cek Status
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}