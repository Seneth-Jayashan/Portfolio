import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function ComingSoon() {
  return (
    <ProjectDetail
      title="VolunteerIX"
      description="A volunteer management platform currently under final development. The release will include role management, event scheduling, and organization-level controls."
      image="/comingSoon.png"
      highlights={[
        'Multi-organization volunteer operations',
        'Coordinator and role-based workflows',
        'Attendance and engagement reporting',
        'Planned for upcoming launch',
      ]}
      tags={['React', 'Node.js', 'MongoDB', 'Platform Development']}
    />
  );
}
