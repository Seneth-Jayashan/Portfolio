import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function VolunteerIX() {
  return (
    <ProjectDetail
      title="VolunteerIX"
      description="A volunteer operations platform for NGOs and communities, handling people, events, role permissions, and engagement tracking in one place."
      image="/projects/volunteerix.jpg"
      highlights={[
        'Volunteer profile and role management',
        'Attendance logs and time tracking',
        'Event planning and registration reminders',
        'Multi-organization support',
      ]}
      tags={['React', 'Tailwind CSS', 'Anime.js', 'Node.js', 'MongoDB']}
      ctaLabel="View Live Platform"
      ctaHref="https://volunteerix.onexsystems.com"
    />
  );
}
