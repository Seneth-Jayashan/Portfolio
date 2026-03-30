import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function PocketPilot() {
  return (
    <ProjectDetail
      title="Pocket Pilot"
      description="A Kotlin Android app for travelers and professionals to manage tasks, trips, reminders, and budgets in one mobile experience."
      image="/pocketPilot.png"
      highlights={[
        'Trip itinerary and checklist planning',
        'Offline-first notes with Shared Preferences',
        'Category-based expense tracking',
        'Firebase-powered cloud syncing',
      ]}
      tags={['Kotlin', 'XML Layouts', 'Shared Preferences', 'Firebase']}
      ctaLabel="Source Code"
      ctaHref="https://github.com/Seneth-Jayashan/Pocket-Pilot"
    />
  );
}
