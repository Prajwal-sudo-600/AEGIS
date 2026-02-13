"use client";

import React from 'react';
import ProfileTab from '@/components/tabs/ProfileTab';
import { useAppContext } from '@/components/AppProvider';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const { isDark } = useAppContext();
    const router = useRouter();

    const handleLogout = () => {
        // Implement logout logic here
        router.push('/login');
    };

    return <ProfileTab isDark={isDark} onLogout={handleLogout} />;
}
