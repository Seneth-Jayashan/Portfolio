import React, { useRef } from 'react';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

export default function Contacts() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  const contactDetails = [
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      value: 'contact@sjaywebsolutions.lk',
      link: 'mailto:contact@sjaywebsolutions.lk',
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: 'Phone',
      value: '+94 70 3999 709',
      link: 'tel:+94703999709',
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Location',
      value: 'Colombo, Western Province, Sri Lanka',
      link: null,
    },
    {
      icon: <FaGlobe size={20} />,
      title: 'Website',
      value: 'www.sjaywebsolutions.lk',
      link: 'https://www.sjaywebsolutions.lk',
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: 'https://facebook.com/s.jay20/',
    },
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/company/seneth-jayashan/',
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/94703999709',
    },
  ];

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="max-w-5xl scroll-parallax" data-speed="0.14" data-depth="1.1">
        <p className="section-kicker" data-intro>
          Contact
        </p>
        <h2 className="section-title mt-2 mb-3" data-intro>
          Let us build your next digital product.
        </h2>
        <p className="section-copy text-lg mb-8" data-intro>
          If you are planning a new website, redesign, or full-stack product, reach out and I will help shape the best technical path.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {contactDetails.map((item, index) => (
          <article key={index} className="glass rounded-3xl p-6 reveal-item scroll-parallax" data-speed="0.22" data-depth="0.8">
            <div className="text-teal-300 mb-3 text-xl">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
            {item.link ? (
              <a href={item.link} className="text-slate-300 hover:text-teal-300 transition" target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            ) : (
              <p className="text-slate-300">{item.value}</p>
            )}
          </article>
        ))}
      </div>

      <div className="glass rounded-3xl p-6 mt-5 reveal-item scroll-parallax" data-speed="0.18" data-depth="0.95">
        <h3 className="text-xl font-semibold text-teal-300 mb-3">Social Links</h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-slate-600/35 hover:bg-teal-400/30 transition grid place-items-center"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
