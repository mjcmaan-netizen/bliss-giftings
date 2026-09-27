"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 250,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    value: 20,
    suffix: "+",
    label: "Corporate Clients",
  },
  {
    value: 80,
    suffix: "+",
    label: "Live Stall Experiences",
  },
];

function Counter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const duration = 1600;
    const stepTime = 20;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      current += increment;

      if (current >= value) {
        current = value;
        clearInterval(timer);
      }

      setCount(Math.floor(current));
    }, stepTime);

    return () => clearInterval(timer);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-[#18352f]/10 bg-[#fbf8f2] px-6 py-16 md:px-10 md:py-20 lg:px-14"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-12 text-center md:mb-14">
          <p className="text-[9px] uppercase tracking-[0.4em] text-[#a8874b]">
            A Little of What We&apos;ve Created
          </p>
        </div>

        <div className="grid grid-cols-1 divide-y divide-[#18352f]/10 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-8 text-center md:py-4"
            >
              <div className="font-serif text-5xl leading-none tracking-tight text-[#18352f] md:text-6xl lg:text-7xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  start={started}
                />
              </div>

              <div className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#596b65] md:text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
