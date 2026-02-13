"use client";

import React from 'react';
import FeedTab from '@/components/tabs/FeedTab';
import { useAppContext } from '@/components/AppProvider';
import { TEST_FEED } from '@/data/mockData';

export default function FeedPage() {
    const { isDark } = useAppContext();
    return <FeedTab isDark={isDark} posts={TEST_FEED} />;
}
