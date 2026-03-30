import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function ChrysleTours() {
  return (
    <ProjectDetail
      title="Chrysle Tours"
      description="A WordPress travel website designed to present destinations, packages, and inquiry flows with a polished mobile-first experience."
      image="/chrysleTours.png"
      highlights={[
        'WordPress CMS implementation',
        'Custom Elementor-driven layouts',
        'Mobile-friendly and SEO-tuned pages',
        'Gallery and contact flow integrations',
      ]}
      tags={['WordPress', 'Elementor', 'Custom CSS', 'Yoast SEO']}
      ctaLabel="Visit Website"
      ctaHref="https://chrysletours.com"
    />
  );
}
