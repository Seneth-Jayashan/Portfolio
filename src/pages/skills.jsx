import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaWordpress } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'
import { useAnimeIntro, useAnimeStagger } from '../hooks/useAnimeMotion'

export default function Skills() {
  const scopeRef = useRef(null)

  useAnimeIntro(scopeRef, [])
  useAnimeStagger(scopeRef, '.reveal-item', [])

  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'WordPress', icon: <FaWordpress />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 70 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 70 },
  ]

  useEffect(() => {
    if (!scopeRef.current) return undefined

    const bars = scopeRef.current.querySelectorAll('.meter-fill')
    if (!bars.length) return undefined

    const progress = animate(bars, {
      scaleX: (target) => Number(target.getAttribute('data-level')) / 100,
      duration: 1200,
      delay: stagger(90),
      ease: 'outExpo',
    })

    return () => {
      progress.pause?.()
    }
  }, [])

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="mb-8 md:mb-10">
        <p className="section-kicker" data-intro>
          Skills
        </p>
        <h2 className="section-title mt-2" data-intro>
          Tools I use to build robust products.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {skills.map((skill, index) => (
          <article key={index} className="glass rounded-3xl p-5 reveal-item">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-teal-300 text-2xl">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
            <div className="h-3 rounded-full bg-slate-600/40 overflow-hidden">
              <div className="meter-fill h-full origin-left rounded-full bg-gradient-to-r from-teal-300 to-cyan-300" data-level={skill.level} style={{ transform: 'scaleX(0)' }} />
            </div>
            <p className="text-sm text-slate-300 mt-2">{skill.level}% proficiency</p>
          </article>
        ))}
      </div>
    </section>
  )
}
