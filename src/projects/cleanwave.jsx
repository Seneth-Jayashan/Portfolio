import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function CleanWave() {
  return (
    <ProjectDetail
      title="CleanWave Laundry System"
      description="A Java MVC laundry management system that streamlines order handling, status tracking, and invoice workflows."
      image="/cleanWave.png"
      highlights={[
        'Real-time order status and invoice tracking',
        'Admin and customer dashboards',
        'MySQL-backed business logic',
        'Clean MVC-based backend structure',
      ]}
      tags={['Java Servlets', 'JSP', 'MySQL', 'HTML/CSS', 'MVC']}
      ctaLabel="Source Code"
      ctaHref="https://github.com/Seneth-Jayashan/CleanWave"
    />
  );
}
