'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

import techflowLogo from '../../public/assets/images/client1.png';
import devcorpLogo from '../../public/assets/images/client2.png';
import financeaiLogo from '../../public/assets/images/client3.png';
import medtechLogo from '../../public/assets/images/client4.png';
import shopmaxLogo from '../../public/assets/images/client5.png';
import proconsultLogo from '../../public/assets/images/client6.png';

const partnerLogos = [
  { name: 'TechFlow', logo: techflowLogo },
  { name: 'DevCorp', logo: devcorpLogo },
  { name: 'FinanceAI', logo: financeaiLogo },
  { name: 'MedTech', logo: medtechLogo },
  { name: 'ShopMax', logo: shopmaxLogo },
  { name: 'ProConsult', logo: proconsultLogo },
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos];

export const PartnerLogoSlider = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let start = null;
    const speed = 0.5;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, []);

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
            Trusted by Leading Companies
          </h2>
          <p style={{ color: '#4b5563', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            Join thousands of businesses that rely on our solutions to drive their success
          </p>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Left Gradient */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '8rem',
              height: '100%',
              background: 'linear-gradient(to right, #f9fafb, transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
          {/* Right Gradient */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '8rem',
              height: '100%',
              background: 'linear-gradient(to left, #f9fafb, transparent)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />

          {/* Auto-scrolling logos */}
          <div
            ref={scrollRef}
            style={{
              display: 'flex',
              overflowX: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {duplicatedLogos.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                style={{
                  flex: '0 0 auto',
                  margin: '0 1.5rem',
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem',
                  padding: '1.5rem',
                  width: '12rem',
                  height: '6rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                }}
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
