import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function Onex() {
  return (
    <ProjectDetail
      title="OneX Universe"
      description="An all-in-one multi-tenant ecosystem for operations, blending HR, invoicing, events, e-commerce, and admin control into one platform."
      image="/projects/onex-universe.png"
      highlights={[
        'Integrated suite of 10 business systems',
        'Support for custom domains and subdomains',
        'Centralized operational workflows',
        'Scalable architecture for multi-organization use',
      ]}
      tags={['MERN Stack', 'Vite', 'Tailwind CSS', 'Electron.js', 'CI/CD']}
      ctaLabel="Visit Platform"
      ctaHref="https://onex.sjaywebsolutions.lk"
    />
  );
}
