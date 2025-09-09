import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    school?: {
        name: string;
        description: string;
        vision: string;
        mission: string;
        address: string;
        phone: string;
        email: string;
    };
    latestNews?: Array<{
        id: number;
        title: string;
        excerpt: string;
        type: string;
        published_at: string;
        slug: string;
    }>;
    featuredGallery?: Array<{
        id: number;
        title: string;
        image: string;
        category: string;
    }>;
    facilities?: Array<{
        id: number;
        name: string;
        description: string;
        icon: string;
        type: string;
    }>;
    [key: string]: unknown;
}

export default function Welcome({ school, latestNews = [], facilities = [] }: Props) {
    const facilityIcons: { [key: string]: string } = {
        computer: '💻',
        library: '📚',
        language: '🎯',
        projector: '🎥',
        basketball: '🏀',
        volleyball: '🏐',
        soccer: '⚽',
        dumbbell: '🏋️',
        utensils: '🍽️',
        mosque: '🕌',
        car: '🚗',
        heart: '❤️'
    };

    const newsTypeLabels: { [key: string]: { label: string; color: string; icon: string } } = {
        news: { label: 'Berita', color: 'bg-blue-500', icon: '📰' },
        announcement: { label: 'Pengumuman', color: 'bg-red-500', icon: '📢' },
        achievement: { label: 'Prestasi', color: 'bg-yellow-500', icon: '🏆' }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-yellow-500/20 z-50">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                <span className="text-black font-bold text-xl">🏫</span>
                            </div>
                            <div>
                                <h1 className="text-yellow-400 font-bold text-lg">SMKN 1 Majalengka</h1>
                                <p className="text-xs text-gray-400">Unggul, Berkarakter, Berdaya Saing</p>
                            </div>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-6">
                            <Link href="/tentang" className="text-white hover:text-yellow-400 transition-colors">Profil</Link>
                            <Link href="/akademik" className="text-white hover:text-yellow-400 transition-colors">Akademik</Link>
                            <Link href="/berita" className="text-white hover:text-yellow-400 transition-colors">Berita</Link>
                            <Link href="/ekstrakurikuler" className="text-white hover:text-yellow-400 transition-colors">Ekstrakurikuler</Link>
                            <Link href="/galeri" className="text-white hover:text-yellow-400 transition-colors">Galeri</Link>
                            <Link href="/fasilitas" className="text-white hover:text-yellow-400 transition-colors">Fasilitas</Link>
                            <Link href="/kontak" className="text-white hover:text-yellow-400 transition-colors">Kontak</Link>
                        </div>

                        <div className="flex items-center space-x-3">
                            <Link href="/ppdb">
                                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold transition-all transform hover:scale-105">
                                    📝 PPDB 2024
                                </Button>
                            </Link>
                            <Link href="/login">
                                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                                    🔐 Login
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-16 min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzI1MjUyNSIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRoMTBjMiAwIDQgMiA0IDR2MTBjMCAyLTIgNC00IDRINDBjLTIgMC00LTItNC00di0xMHpNNiAzNGMwLTIgMi00IDQtNGgxMGMyIDAgNCAyIDQgNHYxMGMwIDItMiA0LTQgNEgxMGMtMiAwLTQtMi00LTRWMzR6Ij48L3BhdGg+CjwvZz4KPC9nPgo8L3N2Zz4=')] opacity-10"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-4">
                                🎓 Sekolah Menengah Kejuruan Unggulan
                            </span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                            SMK Negeri 1 Majalengka
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                            {school?.description || "Menjadi SMK yang unggul, berkarakter, dan berdaya saing global dalam menyiapkan tenaga kerja profesional."}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/ppdb">
                                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold text-lg px-8 py-4 transform hover:scale-105 transition-all shadow-lg shadow-yellow-500/25">
                                    🚀 Daftar Sekarang
                                </Button>
                            </Link>
                            <Link href="/tentang">
                                <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black font-semibold px-8 py-4">
                                    📖 Pelajari Lebih Lanjut
                                </Button>
                            </Link>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                                <div className="text-3xl mb-2">🎯</div>
                                <div className="text-2xl font-bold text-yellow-400">10+</div>
                                <div className="text-sm text-gray-400">Program Keahlian</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                                <div className="text-3xl mb-2">👨‍🎓</div>
                                <div className="text-2xl font-bold text-yellow-400">2000+</div>
                                <div className="text-sm text-gray-400">Siswa Aktif</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                                <div className="text-3xl mb-2">👨‍🏫</div>
                                <div className="text-2xl font-bold text-yellow-400">100+</div>
                                <div className="text-sm text-gray-400">Tenaga Pendidik</div>
                            </div>
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                                <div className="text-3xl mb-2">🏆</div>
                                <div className="text-2xl font-bold text-yellow-400">50+</div>
                                <div className="text-sm text-gray-400">Prestasi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Latest News Section */}
            {latestNews.length > 0 && (
                <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-yellow-400 mb-4">📰 Berita & Pengumuman Terbaru</h2>
                            <p className="text-gray-400 text-lg">Informasi terkini seputar kegiatan dan prestasi sekolah</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {latestNews.slice(0, 6).map((news) => (
                                <div key={news.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-yellow-500/40 transition-all hover:transform hover:scale-105">
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${newsTypeLabels[news.type]?.color || 'bg-blue-500'}`}>
                                                <span>{newsTypeLabels[news.type]?.icon || '📰'}</span>
                                                {newsTypeLabels[news.type]?.label || 'Berita'}
                                            </span>
                                            <span className="text-gray-400 text-sm">
                                                {new Date(news.published_at).toLocaleDateString('id-ID')}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2 hover:text-yellow-400 transition-colors">
                                            {news.title}
                                        </h3>
                                        
                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                            {news.excerpt}
                                        </p>
                                        
                                        <Link href={`/berita/${news.slug}`} className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium">
                                            Baca Selengkapnya
                                            <span className="ml-2">→</span>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/berita">
                                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8">
                                    📚 Lihat Semua Berita
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Facilities Section */}
            {facilities.length > 0 && (
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-yellow-400 mb-4">🏫 Fasilitas Unggulan</h2>
                            <p className="text-gray-400 text-lg">Fasilitas modern dan lengkap untuk mendukung pembelajaran</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {facilities.slice(0, 8).map((facility) => (
                                <div key={facility.id} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/40 transition-all hover:transform hover:scale-105 text-center">
                                    <div className="text-4xl mb-4">
                                        {facilityIcons[facility.icon] || '🏢'}
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">{facility.name}</h3>
                                    <p className="text-gray-400 text-sm line-clamp-3">{facility.description}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link href="/fasilitas">
                                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-8">
                                    🔍 Lihat Semua Fasilitas
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-black">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-4">🎯 Siap Bergabung dengan Kami?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Bergabunglah dengan SMK Negeri 1 Majalengka dan wujudkan masa depan cemerlang Anda!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/ppdb">
                            <Button size="lg" className="bg-black text-yellow-400 hover:bg-gray-900 font-bold px-8 py-4">
                                📝 Daftar PPDB 2024
                            </Button>
                        </Link>
                        <Link href="/saran">
                            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-yellow-400 font-semibold px-8 py-4">
                                💬 Kirim Saran
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-yellow-500/20 py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                                    <span className="text-black font-bold text-2xl">🏫</span>
                                </div>
                                <div>
                                    <h3 className="text-yellow-400 font-bold text-lg">SMKN 1 Majalengka</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Sekolah Menengah Kejuruan yang unggul, berkarakter, dan berdaya saing global.
                            </p>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                            <ul className="space-y-2">
                                <li><Link href="/tentang" className="text-gray-400 hover:text-yellow-400">Profil Sekolah</Link></li>
                                <li><Link href="/akademik" className="text-gray-400 hover:text-yellow-400">Akademik</Link></li>
                                <li><Link href="/berita" className="text-gray-400 hover:text-yellow-400">Berita</Link></li>
                                <li><Link href="/galeri" className="text-gray-400 hover:text-yellow-400">Galeri</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-semibold mb-4">Layanan</h4>
                            <ul className="space-y-2">
                                <li><Link href="/ppdb" className="text-gray-400 hover:text-yellow-400">PPDB</Link></li>
                                <li><Link href="/ekstrakurikuler" className="text-gray-400 hover:text-yellow-400">Ekstrakurikuler</Link></li>
                                <li><Link href="/fasilitas" className="text-gray-400 hover:text-yellow-400">Fasilitas</Link></li>
                                <li><Link href="/saran" className="text-gray-400 hover:text-yellow-400">Kotak Saran</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="text-white font-semibold mb-4">Kontak</h4>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>📍 {school?.address || 'Jl. Raya Majalengka-Cirebon No. 123'}</li>
                                <li>📞 {school?.phone || '(0233) 281234'}</li>
                                <li>✉️ {school?.email || 'info@smkn1majalengka.sch.id'}</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="border-t border-gray-800 pt-8 text-center">
                        <p className="text-gray-400 text-sm">
                            © 2024 SMK Negeri 1 Majalengka. All rights reserved. Made with ❤️ for education.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}