import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function Petshop() {
  return (
    <ProjectDetail
      title="P & P Pet Shop"
      description="A caring, approachable WordPress site for a Sri Lankan pet business featuring products, adoption information, and inquiry workflows."
      image="/pandppetshop.png"
      highlights={[
        'Pet product showcase and catalog',
        'Adoption and rescue information',
        'Inquiry form with Elementor',
        'Responsive design and social integrations',
      ]}
      tags={['WordPress', 'Elementor', 'HTML/CSS', 'Facebook Plugin']}
      ctaLabel="Visit Website"
      ctaHref="https://pandppetshop.lk"
    />
  );
}
