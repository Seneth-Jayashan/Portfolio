import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function KalumWaduge() {
  return (
    <ProjectDetail
      title="Kalum Waduge"
      description="An education-focused WordPress platform for Sinhala-medium learning, integrating LMS and subscription commerce flows for large student audiences."
      image="/projects/kalumwaduge-cover.jpg"
      highlights={[
        'Courses powered by Tutor LMS',
        'Subscriptions via WooCommerce',
        'Interactive quizzes and progress tracking',
        'Responsive experience with Sinhala support',
      ]}
      tags={['WordPress', 'Tutor LMS', 'WooCommerce', 'Elementor']}
      ctaLabel="Visit Website"
      ctaHref="https://kalumwaduge.com"
    />
  );
}
