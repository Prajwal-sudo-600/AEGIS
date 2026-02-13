"use client";

import React from 'react';
import RoadmapsTab from '@/components/tabs/RoadmapsTab';
import { useAppContext } from '@/components/AppProvider';
import { INITIAL_ROADMAPS } from '@/data/mockData';

export default function RoadmapsPage() {
    const { isDark } = useAppContext();
    return <RoadmapsTab isDark={isDark} roadmaps={INITIAL_ROADMAPS} />;
}
