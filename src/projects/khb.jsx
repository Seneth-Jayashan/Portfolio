import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function KHB() {
  return (
    <ProjectDetail
      title="KHB Associates"
      description="A MERN application built for a textile machines business, including catalog workflows and customer-ready ordering flows."
      image="/khb.png"
      highlights={[
        'Full-stack MERN architecture',
        'Dynamic product catalog and search',
        'Authentication and order management',
        'Responsive UI with Tailwind CSS',
      ]}
      tags={['MongoDB', 'Express', 'React', 'Node.js', 'Tailwind CSS']}
      ctaLabel="Source Code"
      ctaHref="https://github.com/Seneth-Jayashan/KHB-Web-Application"
    />
  );
}
