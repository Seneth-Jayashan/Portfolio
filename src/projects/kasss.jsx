import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function KASSS() {
  return (
    <ProjectDetail
      title="KASSS Advertising Company"
      description="A vivid advertising-agency website showcasing campaigns, social proof, and service offerings with straightforward navigation."
      image="/kasss.png"
      highlights={[
        'Campaign and portfolio presentation',
        'Client testimonials and case studies',
        'Responsive, interactive interface',
        'Built with classic web stack architecture',
      ]}
      tags={['HTML', 'CSS', 'PHP', 'MySQL']}
      ctaLabel="Source Code"
      ctaHref="https://github.com/Seneth-Jayashan/KASSS-Advertising-Agency"
    />
  );
}
