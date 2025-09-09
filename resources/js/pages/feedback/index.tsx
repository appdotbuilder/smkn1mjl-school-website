import React from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface FeedbackFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    type: string;
    [key: string]: string;
}

export default function FeedbackIndex() {
    const { data, setData, post, processing, errors, reset } = useForm<FeedbackFormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'suggestion',
    });

    const feedbackTypes = [
        { value: 'suggestion', label: 'Saran', icon: '💡', color: 'text-blue-400' },
        { value: 'complaint', label: 'Keluhan', icon: '⚠️', color: 'text-red-400' },
        { value: 'question', label: 'Pertanyaan', icon: '❓', color: 'text-green-400' },
        { value: 'appreciation', label: 'Apresiasi', icon: '👏', color: 'text-yellow-400' },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/saran', {
            onSuccess: () => {
                reset();
            }
        });
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
                                <p className="text-xs text-gray-400">Kotak Saran & Masukan</p>
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
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">💬 Kotak Saran & Masukan</h1>
                    <p className="text-gray-300 text-lg mb-8">
                        Suara Anda sangat berharga bagi kami. Sampaikan saran, keluhan, pertanyaan, atau apresiasi Anda untuk kemajuan sekolah.
                    </p>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-500/30 max-w-4xl mx-auto">
                        <h3 className="text-yellow-400 font-semibold text-lg mb-3">🎯 Komitmen Kami</h3>
                        <p className="text-gray-300">
                            Setiap masukan akan kami baca dan tindaklanjuti untuk terus meningkatkan kualitas pendidikan dan pelayanan di SMK Negeri 1 Majalengka.
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
                        <h2 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center">
                            ✍️ Formulir Saran & Masukan
                        </h2>

                        {/* Feedback Type Selection */}
                        <div className="mb-8">
                            <label className="block text-white font-medium mb-4">Jenis Pesan *</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {feedbackTypes.map((type) => (
                                    <div key={type.value} className="relative">
                                        <input
                                            type="radio"
                                            id={type.value}
                                            name="type"
                                            value={type.value}
                                            checked={data.type === type.value}
                                            onChange={(e) => setData('type', e.target.value)}
                                            className="sr-only"
                                        />
                                        <label
                                            htmlFor={type.value}
                                            className={`
                                                block p-4 rounded-lg border-2 transition-all cursor-pointer text-center
                                                ${data.type === type.value
                                                    ? 'border-yellow-500 bg-yellow-500/10'
                                                    : 'border-gray-600 hover:border-gray-500'
                                                }
                                            `}
                                        >
                                            <div className="text-2xl mb-2">{type.icon}</div>
                                            <div className={`font-medium ${data.type === type.value ? 'text-yellow-400' : 'text-white'}`}>
                                                {type.label}
                                            </div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                            {errors.type && (
                                <p className="text-red-400 text-sm mt-2">{errors.type}</p>
                            )}
                        </div>

                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-white font-medium mb-2">Nama Lengkap *</label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                    placeholder="Masukkan nama lengkap Anda"
                                />
                                {errors.name && (
                                    <p className="text-red-400 text-sm mt-1">{errors.name}</p>
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
                        </div>

                        {/* Subject */}
                        <div className="mb-6">
                            <label className="block text-white font-medium mb-2">Subjek Pesan *</label>
                            <input
                                type="text"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors"
                                placeholder="Ringkasan singkat tentang pesan Anda"
                            />
                            {errors.subject && (
                                <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                            )}
                        </div>

                        {/* Message */}
                        <div className="mb-8">
                            <label className="block text-white font-medium mb-2">Pesan *</label>
                            <textarea
                                value={data.message}
                                onChange={(e) => setData('message', e.target.value)}
                                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-500 focus:outline-none transition-colors resize-vertical"
                                rows={6}
                                placeholder="Sampaikan pesan Anda dengan detail. Semakin jelas pesan Anda, semakin baik kami dapat menanggapinya."
                            />
                            {errors.message && (
                                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                            )}
                            <p className="text-gray-400 text-sm mt-2">
                                Minimal 10 karakter. Saat ini: {data.message.length} karakter
                            </p>
                        </div>

                        {/* Submit Button */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="text-sm text-gray-400">
                                <p>🔒 Informasi Anda akan dijaga kerahasiaannya</p>
                                <p>📧 Tim kami akan merespons dalam 1-3 hari kerja</p>
                            </div>
                            
                            <div className="flex space-x-4">
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
                                    {processing ? '⏳ Mengirim...' : '🚀 Kirim Pesan'}
                                </Button>
                            </div>
                        </div>
                    </form>

                    {/* Additional Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30 text-center">
                            <div className="text-3xl mb-4">💡</div>
                            <h3 className="text-blue-400 font-semibold mb-2">Saran</h3>
                            <p className="text-gray-300 text-sm">
                                Bantu kami berkembang dengan memberikan saran konstruktif untuk kemajuan sekolah.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 rounded-xl p-6 border border-red-500/30 text-center">
                            <div className="text-3xl mb-4">⚠️</div>
                            <h3 className="text-red-400 font-semibold mb-2">Keluhan</h3>
                            <p className="text-gray-300 text-sm">
                                Sampaikan keluhan Anda agar kami dapat segera menindaklanjuti dan memperbaikinya.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl p-6 border border-green-500/30 text-center">
                            <div className="text-3xl mb-4">❓</div>
                            <h3 className="text-green-400 font-semibold mb-2">Pertanyaan</h3>
                            <p className="text-gray-300 text-sm">
                                Ada yang ingin ditanyakan? Tim kami siap membantu menjawab pertanyaan Anda.
                            </p>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                        <h3 className="text-yellow-400 font-semibold text-lg mb-4 flex items-center">
                            📞 Kontak Alternatif
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">📧</span>
                                <div>
                                    <div className="text-white font-medium">Email</div>
                                    <div className="text-gray-400">info@smkn1majalengka.sch.id</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <div className="text-white font-medium">Telepon</div>
                                    <div className="text-gray-400">(0233) 281234</div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">💬</span>
                                <div>
                                    <div className="text-white font-medium">WhatsApp</div>
                                    <div className="text-gray-400">+62 812-3456-7890</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}