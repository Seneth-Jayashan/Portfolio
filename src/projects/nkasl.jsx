import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function NKASL() {
  return (
    <ProjectDetail
      title="NKASL Karate Dojo"
      description="A structured WordPress platform for a karate organization, highlighting classes, instructor profiles, ranks, and event activity."
      image="/nkasl.png"
      highlights={[
        'Class schedules and dojo locations',
        'Instructor and rank information',
        'Event gallery content management',
        'Responsive, SEO-friendly structure',
      ]}
      tags={['WordPress', 'PHP', 'Custom Theme', 'SEO']}
      ctaLabel="Visit Website"
      ctaHref="https://nkasl.com"
    />
  );
}
