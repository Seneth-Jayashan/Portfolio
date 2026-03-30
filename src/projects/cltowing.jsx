import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function ClTowing() {
  return (
    <ProjectDetail
      title="CL Towing NYC"
      description="A local-business WordPress website for towing and emergency roadside assistance, designed for speed, conversion, and discoverability."
      image="/clTowing.png"
      highlights={[
        'Dedicated emergency service pages',
        'Google Maps integration for local SEO',
        'Responsive and performance-optimized layout',
        'Custom WordPress + Elementor build',
      ]}
      tags={['WordPress', 'Elementor', 'Custom CSS']}
      ctaLabel="Visit Website"
      ctaHref="https://cltowingnyc.com"
    />
  );
}
