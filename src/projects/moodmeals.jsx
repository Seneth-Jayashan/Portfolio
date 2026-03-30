import React from 'react';
import ProjectDetail from '../components/ProjectDetail';

export default function MoodMeals() {
  return (
    <ProjectDetail
      title="Mood Meals"
      description="A native Android app that combines mood tracking and meal recommendations to support healthier daily choices."
      image="/moodmeals.png"
      highlights={[
        'Mood-based recommendation engine',
        'Simple mood tracking flow',
        'Clean and readable XML interface',
        'Optimized Android experience',
      ]}
      tags={['Kotlin', 'XML Layouts', 'Android SDK', 'Firebase']}
      ctaLabel="Source Code"
      ctaHref="https://github.com/Seneth-Jayashan/Mood-Meals"
    />
  );
}
