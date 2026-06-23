import React from 'react';
import { TrendingUp, DollarSign, Zap, Check } from 'lucide-react';

const SOLUTIONS = [
  {
    title: 'Revenue Solutions',
    description: 'Stop losing leads and maximize sales conversion with tailored marketing analytics and growth dashboards.',
    features: [
      'Marketing Analytics',
      'Sales Funnel Optimization',
      'Google Business Growth',
      'Brand Positioning',
    ],
    icon: TrendingUp,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    title: 'Cost & Profit Solutions',
    description: 'Keep expenses in check, reduce operational waste, and optimize margins with live financial telemetry.',
    features: [
      'Cost Analysis & Audit',
      'Profit Optimization',
      'Financial Dashboards',
      'Waste Reduction systems',
    ],
    icon: DollarSign,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    title: 'Productivity Solutions',
    description: 'Build robust systems, align your leadership team, and automate repetitive tasks to boost efficiency.',
    features: [
      'SOP Development',
      'KPI Measurement Systems',
      'Team Performance Tracking',
      'Process Automation',
    ],
    icon: Zap,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  }
];

const ServicesSection = () => {
  return (
    <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16 space-y-4'>
          <span className='text-xs text-primary font-bold tracking-widest uppercase font-mono'>
            Yobix Growth Framework
          </span>
          <h2 className='text-4xl font-display font-extrabold text-text-main'>What Happens Next?</h2>
          <p className='text-lg text-text-muted max-w-2xl mx-auto'>
            After diagnosis, Yobix implements specialized frameworks to isolate and resolve your business bottlenecks.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {SOLUTIONS.map((sol) => (
            <div
              key={sol.title}
              className='bg-secondary/40 border border-white/5 rounded-3xl p-8 flex flex-col justify-between h-full transform transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl'
            >
              <div>
                <div className={`w-14 h-14 ${sol.bg} ${sol.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <sol.icon className='w-7 h-7' />
                </div>
                <h3 className='text-2xl font-display font-bold text-text-main mb-3'>
                  {sol.title}
                </h3>
                <p className='text-sm text-text-muted leading-relaxed mb-6'>
                  {sol.description}
                </p>
              </div>

              <ul className='space-y-3.5 border-t border-white/5 pt-6 mt-6'>
                {sol.features.map((feature) => (
                  <li key={feature} className='flex items-center text-sm'>
                    <Check className='w-4.5 h-4.5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Dynamic Framework Explanation */}
        <div className='mt-24 bg-secondary/20 border border-white/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto'>
          <h3 className='text-2xl font-display font-bold text-primary mb-4 text-center'>
            Why this website is different
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 text-sm'>
            <div className='p-6 bg-red-500/5 rounded-2xl border border-red-500/10 space-y-2'>
              <span className='font-bold text-red-400 block font-display'>Most Consulting Platforms Say:</span>
              <p className='text-text-muted leading-relaxed'>
                &ldquo;We provide marketing, finance, strategy, and business consulting.&rdquo;
              </p>
            </div>
            <div className='p-6 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 space-y-2'>
              <span className='font-bold text-emerald-400 block font-display'>Yobix Says:</span>
              <p className='text-text-muted leading-relaxed'>
                &ldquo;Tell us your problem. We&apos;ll diagnose the numbers and show you exactly where the issue is coming from.&rdquo;
              </p>
            </div>
          </div>
          <p className='text-xs text-text-muted text-center mt-8 italic'>
            This approach turns business optimization into a measurable, data-driven science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;