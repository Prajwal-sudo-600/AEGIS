"use client";

import React from 'react';
import NetworkTab from '@/components/tabs/NetworkTab';
import { useAppContext } from '@/components/AppProvider';

export default function NetworkPage() {
    const { isDark, users, toggleFollow } = useAppContext();
    return <NetworkTab isDark={isDark} users={users} toggleFollow={toggleFollow} />;
}
