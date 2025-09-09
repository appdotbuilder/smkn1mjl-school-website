import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface Stats {
    total_news: number;
    published_news: number;
    total_ppdb: number;
    pending_ppdb: number;
    approved_ppdb: number;
    total_feedback: number;
    unread_feedback: number;
    total_gallery: number;
    total_facilities: number;
    total_extracurriculars: number;
}

interface RecentNews {
    id: number;
    title: string;
    type: string;
    status: string;
    created_at: string;
    user: {
        name: string;
    };
}

interface RecentPpdb {
    id: number;
    registration_number: string;
    full_name: string;
    major_choice: string;
    status: string;
    created_at: string;
}

interface RecentFeedback {
    id: number;
    name: string;
    subject: string;
    type: string;
    status: string;
    created_at: string;
}

interface Props {
    stats: Stats;
    recentNews: RecentNews[];
    recentPpdb: RecentPpdb[];
    recentFeedback: RecentFeedback[];
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recentNews, recentPpdb, recentFeedback }: Props) {
    const statusColors = {
        published: 'bg-green-500/20 text-green-400 border-green-500/30',
        draft: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
        pending: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        approved: 'bg-green-500/20 text-green-400 border-green-500/30',
        rejected: 'bg-red-500/20 text-red-400 border-red-500/30',
        unread: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
        read: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        replied: 'bg-green-500/20 text-green-400 border-green-500/30',
    };

    const typeIcons = {
        news: '📰',
        announcement: '📢',
        achievement: '🏆',
        suggestion: '💡',
        complaint: '⚠️',
        question: '❓',
        appreciation: '👏',
    };

    return (
        <AppShell>
            <div className="space-y-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-yellow-400">🏫 Dashboard Admin</h1>
                        <p className="text-gray-400 mt-2">Selamat datang di panel administrasi SMK Negeri 1 Majalengka</p>
                    </div>
                    <div className="text-right text-sm text-gray-400">
                        <div>📅 {new Date().toLocaleDateString('id-ID', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</div>
                        <div>🕐 {new Date().toLocaleTimeString('id-ID')}</div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 rounded-xl p-6 border border-blue-500/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-blue-400 text-sm font-medium">Total Berita</p>
                                <p className="text-3xl font-bold text-white">{stats.total_news}</p>
                                <p className="text-blue-300 text-sm">
                                    {stats.published_news} dipublikasi
                                </p>
                            </div>
                            <div className="text-4xl">📰</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 rounded-xl p-6 border border-green-500/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-green-400 text-sm font-medium">Pendaftar PPDB</p>
                                <p className="text-3xl font-bold text-white">{stats.total_ppdb}</p>
                                <p className="text-green-300 text-sm">
                                    {stats.pending_ppdb} menunggu
                                </p>
                            </div>
                            <div className="text-4xl">🎓</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-xl p-6 border border-purple-500/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-purple-400 text-sm font-medium">Feedback</p>
                                <p className="text-3xl font-bold text-white">{stats.total_feedback}</p>
                                <p className="text-purple-300 text-sm">
                                    {stats.unread_feedback} belum dibaca
                                </p>
                            </div>
                            <div className="text-4xl">💬</div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 rounded-xl p-6 border border-yellow-500/30">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-yellow-400 text-sm font-medium">Total Konten</p>
                                <p className="text-3xl font-bold text-white">
                                    {stats.total_gallery + stats.total_facilities + stats.total_extracurriculars}
                                </p>
                                <p className="text-yellow-300 text-sm">
                                    Galeri, Fasilitas & Ekskul
                                </p>
                            </div>
                            <div className="text-4xl">📊</div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                    <h2 className="text-xl font-bold text-yellow-400 mb-6">⚡ Aksi Cepat</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link href="/admin/news/create">
                            <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center space-x-2">
                                <span>📝</span>
                                <span>Buat Berita</span>
                            </Button>
                        </Link>
                        <Link href="/admin/ppdb">
                            <Button className="w-full bg-green-600 hover:bg-green-500 text-white flex items-center justify-center space-x-2">
                                <span>🎓</span>
                                <span>Kelola PPDB</span>
                            </Button>
                        </Link>
                        <Link href="/admin/feedback">
                            <Button className="w-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center space-x-2">
                                <span>💬</span>
                                <span>Lihat Feedback</span>
                            </Button>
                        </Link>
                        <Link href="/admin/news">
                            <Button className="w-full bg-yellow-600 hover:bg-yellow-500 text-black flex items-center justify-center space-x-2">
                                <span>📰</span>
                                <span>Kelola Berita</span>
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Recent News */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">📰 Berita Terbaru</h3>
                            <Link href="/admin/news" className="text-blue-400 hover:text-blue-300 text-sm">
                                Lihat semua →
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {recentNews.slice(0, 5).map((news) => (
                                <div key={news.id} className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg">
                                    <div className="text-xl">{typeIcons[news.type as keyof typeof typeIcons] || '📰'}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-medium truncate">
                                            {news.title}
                                        </p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className={`px-2 py-1 rounded text-xs border ${statusColors[news.status as keyof typeof statusColors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                                                {news.status === 'published' ? 'Published' : 'Draft'}
                                            </span>
                                            <span className="text-gray-400 text-xs">
                                                {new Date(news.created_at).toLocaleDateString('id-ID')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent PPDB */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">🎓 PPDB Terbaru</h3>
                            <Link href="/admin/ppdb" className="text-green-400 hover:text-green-300 text-sm">
                                Lihat semua →
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {recentPpdb.slice(0, 5).map((ppdb) => (
                                <div key={ppdb.id} className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg">
                                    <div className="text-xl">👨‍🎓</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-medium truncate">
                                            {ppdb.full_name}
                                        </p>
                                        <p className="text-gray-400 text-xs truncate">
                                            {ppdb.major_choice}
                                        </p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className={`px-2 py-1 rounded text-xs border ${statusColors[ppdb.status as keyof typeof statusColors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                                                {ppdb.status}
                                            </span>
                                            <span className="text-gray-400 text-xs">
                                                {ppdb.registration_number}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent Feedback */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">💬 Feedback Terbaru</h3>
                            <Link href="/admin/feedback" className="text-purple-400 hover:text-purple-300 text-sm">
                                Lihat semua →
                            </Link>
                        </div>
                        <div className="space-y-3">
                            {recentFeedback.slice(0, 5).map((feedback) => (
                                <div key={feedback.id} className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg">
                                    <div className="text-xl">{typeIcons[feedback.type as keyof typeof typeIcons] || '💬'}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-medium truncate">
                                            {feedback.subject}
                                        </p>
                                        <p className="text-gray-400 text-xs truncate">
                                            dari {feedback.name}
                                        </p>
                                        <div className="flex items-center space-x-2 mt-1">
                                            <span className={`px-2 py-1 rounded text-xs border ${statusColors[feedback.status as keyof typeof statusColors] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                                                {feedback.status}
                                            </span>
                                            <span className="text-gray-400 text-xs">
                                                {new Date(feedback.created_at).toLocaleDateString('id-ID')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}