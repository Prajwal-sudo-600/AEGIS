"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Trophy } from 'lucide-react';
import { useAppContext } from '@/components/AppProvider';
import { QUIZZES } from '@/data/mockData';

export default function QuizPage() {
    const { isDark } = useAppContext();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');

    const filteredQuizzes = QUIZZES.filter(q =>
        q.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pt-32 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 px-4">
                <h2 className="text-5xl font-black tracking-tight transition-colors italic uppercase">Quiz</h2>
                <div className={`flex items-center gap-4 px-5 py-3 border rounded-full w-full md:w-auto transition-all ${isDark ? 'bg-white/5 border-white/10 focus-within:border-indigo-500/50 shadow-lg' : 'bg-white border-black/10 shadow-sm'}`}>
                    <Search className="w-4 h-4 opacity-50" />
                    <input
                        type="text"
                        placeholder="Filter Quiz..."
                        className="bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-xs w-full md:w-56 font-bold uppercase tracking-widest"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredQuizzes.length === 0 ? (
                    <div className={`col-span-1 md:col-span-2 lg:col-span-3 p-10 text-center font-bold text-sm uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                        No quizzes found matching "{searchQuery}"
                    </div>
                ) : (
                    filteredQuizzes.map(q => (
                        <div key={q.id} className={`p-12 rounded-[4rem] border transition-all duration-500 group relative hover:scale-[1.02] cursor-pointer flex flex-col ${isDark ? 'bg-white/5 border-white/10 hover:border-amber-500/50 shadow-2xl' : 'bg-white/80 border-black/10 shadow-xl hover:shadow-2xl'}`}
                            onClick={() => router.push(`/quiz/${q.id}`)}
                        >
                            <div className="flex justify-between items-start mb-12">
                                <Trophy className="w-14 h-14 text-amber-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.4)]" />
                                <span className={`px-5 py-2 rounded-full text-[10px] font-black tracking-widest uppercase border ${isDark ? 'bg-amber-500/10 border-amber-500/20 text-amber-500 shadow-lg' : 'bg-amber-50 border-amber-500/20 text-amber-600 shadow-sm'
                                    }`}>{q.difficulty}</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-black mb-5 leading-tight transition-colors tracking-tight">{q.title}</h3>
                                <p className="text-sm opacity-60 mb-12 font-bold transition-opacity tracking-tight">
                                    {q.active ? `Live session concluding in ${q.time}` : `Guarded start: ${q.time}`}
                                </p>
                            </div>
                            <div className="flex gap-4 mt-auto">
                                <button
                                    className={`flex-1 py-4 px-6 rounded-[1.2rem] font-black uppercase tracking-[0.2em] text-[9px] transition-all active:scale-[0.98] ${q.active
                                        ? 'bg-amber-500 text-white hover:bg-amber-400 shadow-xl shadow-amber-500/30'
                                        : (isDark ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10' : 'bg-gray-50 border border-black/10 text-black hover:bg-gray-100 shadow-sm')
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (q.active) router.push(`/quiz/${q.id}`);
                                    }}
                                >
                                    {q.active ? 'Join' : 'Remind'}
                                </button>
                                <button
                                    className={`flex-1 py-4 px-6 rounded-[1.2rem] font-black uppercase tracking-[0.2em] text-[9px] border transition-all active:scale-[0.98] ${isDark ? 'bg-transparent border-white/20 text-white hover:bg-white/10' : 'bg-transparent border-black/20 text-black hover:bg-black/5'
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        router.push(`/quiz/${q.id}`);
                                    }}
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
