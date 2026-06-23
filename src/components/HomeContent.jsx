import React, { useState } from 'react';

const problemsData = [
  {
    category: 'Revenue Problems',
    icon: '📈',
    items: [
      'Not enough high-quality leads',
      'Low sales conversion rates (<30%)',
      'Weak or generic local branding',
      'Poor customer retention & lifetime value',
    ],
    border: 'border-blue-500/10 hover:border-blue-500/30',
    text: 'text-blue-400',
  },
  {
    category: 'Cost Problems',
    icon: '💰',
    items: [
      'Uncontrolled overhead expenses',
      'Shrinking operational profit margins',
      'Resource wastage & inventory leaks',
      'Unpredictable monthly cash flow',
    ],
    border: 'border-emerald-500/10 hover:border-emerald-500/30',
    text: 'text-emerald-400',
  },
  {
    category: 'Productivity Problems',
    icon: '⚡',
    items: [
      'Team inefficiency & manual workarounds',
      'Operational delays & bottle-necks',
      'Lack of clear SOPs & metrics tracking',
      'Poor leadership alignment & delegation',
    ],
    border: 'border-purple-500/10 hover:border-purple-500/30',
    text: 'text-purple-400',
  },
];

const matrixData = [
  { area: 'Marketing', revenue: 45, cost: 10, productivity: 10 },
  { area: 'Sales', revenue: 40, cost: 10, productivity: 10 },
  { area: 'Brand Management', revenue: 35, cost: 5, productivity: 10 },
  { area: 'Finance & Accounting', revenue: 10, cost: 45, productivity: 15 },
  { area: 'Operations', revenue: 10, cost: 55, productivity: 25 },
  { area: 'HR & People', revenue: 10, cost: 10, productivity: 50 },
  { area: 'Product Development', revenue: 30, cost: 5, productivity: 40 },
  { area: 'Customer Experience', revenue: 40, cost: 10, productivity: 30 },
  { area: 'Strategy & Execution', revenue: 25, cost: 20, productivity: 35 },
];

const HomeContent = () => {
  const [hoveredDimension, setHoveredDimension] = useState(null);

  return (
    <div className='space-y-24 bg-background text-text-main pb-24'>
      {/* Section 2: The Business Triangle */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl font-display font-extrabold text-primary'>
            The Business Growth Triangle
          </h2>
          <p className='text-text-muted mt-3 max-w-xl mx-auto'>
            Every business struggle eventually links back to one of these three fundamental dimensions.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Visual Triangle diagram */}
          <div className='flex justify-center items-center py-10 px-8 sm:px-12 overflow-visible'>
            <div className='relative w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px]'>
              {/* Central Triangle SVG */}
              <svg viewBox='0 0 100 100' className='absolute inset-0 w-full h-full text-primary/30'>
                <polygon points='50,15 15,75 85,75' fill='none' stroke='currentColor' strokeWidth='1.5' />
                <path d='M50,15 L50,75' stroke='currentColor' strokeWidth='0.5' strokeDasharray='2,2' />
                <path d='M15,75 L85,75' stroke='currentColor' strokeWidth='0.5' strokeDasharray='2,2' />
              </svg>

              {/* Dimension Nodes */}
              {/* REVENUE Node */}
              <div 
                className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                  hoveredDimension === 'revenue' 
                    ? 'bg-blue-500/20 border-blue-400/50 shadow-lg shadow-blue-500/10 scale-105' 
                    : 'bg-secondary/80 border-white/5'
                }`}
                onMouseEnter={() => setHoveredDimension('revenue')}
                onMouseLeave={() => setHoveredDimension(null)}
              >
                <span className='font-display font-bold text-base sm:text-lg block text-blue-400'>📈 REVENUE</span>
              </div>

              {/* PRODUCTIVITY Node */}
              <div 
                className={`absolute bottom-6 left-0 -translate-x-1/4 translate-y-1/4 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                  hoveredDimension === 'productivity' 
                    ? 'bg-purple-500/20 border-purple-400/50 shadow-lg shadow-purple-500/10 scale-105' 
                    : 'bg-secondary/80 border-white/5'
                }`}
                onMouseEnter={() => setHoveredDimension('productivity')}
                onMouseLeave={() => setHoveredDimension(null)}
              >
                <span className='font-display font-bold text-base sm:text-lg block text-purple-400'>⚡ PRODUCTIVITY</span>
              </div>

              {/* COST CONTROL Node */}
              <div 
                className={`absolute bottom-6 right-0 translate-x-1/4 translate-y-1/4 px-5 py-3 rounded-2xl border transition-all duration-300 ${
                  hoveredDimension === 'cost' 
                    ? 'bg-emerald-500/20 border-emerald-400/50 shadow-lg shadow-emerald-500/10 scale-105' 
                    : 'bg-secondary/80 border-white/5'
                }`}
                onMouseEnter={() => setHoveredDimension('cost')}
                onMouseLeave={() => setHoveredDimension(null)}
              >
                <span className='font-display font-bold text-base sm:text-lg block text-emerald-400'>💰 COST CONTROL</span>
              </div>

              {/* Core tag in center */}
              <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
                <div className='bg-background/90 border border-white/10 px-4 py-2 rounded-xl text-center shadow-md'>
                  <span className='text-xs font-mono tracking-widest text-text-muted uppercase block'>Yobix Core</span>
                  <span className='text-sm font-bold font-display text-primary block'>Growth Engine</span>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Cards list */}
          <div className='space-y-6'>
            <h3 className='text-2xl font-bold font-display text-text-main mb-4'>
              Every business owner struggles with one or more of these:
            </h3>
            
            <div className='space-y-4'>
              {problemsData.map((prob) => (
                <div 
                  key={prob.category}
                  className={`bg-secondary/40 border p-5 rounded-2xl transition-all duration-300`}
                >
                  <div className='flex items-center space-x-3 mb-2'>
                    <span className='text-2xl'>{prob.icon}</span>
                    <h4 className='text-lg font-bold font-display text-text-main'>{prob.category}</h4>
                  </div>
                  <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2'>
                    {prob.items.map((item) => (
                      <li key={item} className='text-xs text-text-muted flex items-start'>
                        <span className={`inline-block mr-2 ${prob.text}`}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className='text-sm text-text-muted italic border-l-2 border-primary pl-4 pt-1 mt-4'>
              Yobix helps identify the root cause of these bottlenecks before recommending expensive tools or solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: YOBIX Business Intelligence Matrix */}
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-20'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl sm:text-5xl font-display font-extrabold text-primary'>
            YOBIX Business Intelligence Matrix
          </h2>
          <p className='text-text-muted mt-3 max-w-xl mx-auto'>
            The statistical impact model mapping corporate operational vectors onto fundamental metrics.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
          <div className='lg:col-span-2 overflow-x-auto border border-white/5 rounded-2xl bg-secondary/20 shadow-2xl'>
            <table className='w-full text-left border-collapse'>
              <thead>
                <tr className='border-b border-white/5 bg-secondary/50 text-xs font-semibold uppercase tracking-wider text-text-muted font-mono'>
                  <th className='p-4 pl-6'>Business Area</th>
                  <th className='p-4 text-center text-blue-400'>Revenue Impact (%)</th>
                  <th className='p-4 text-center text-emerald-400'>Cost Impact (%)</th>
                  <th className='p-4 text-center text-purple-400'>Productivity Impact (%)</th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-white/5'>
                {matrixData.map((row) => (
                  <tr key={row.area} className='hover:bg-white/5 transition-colors duration-150'>
                    <td className='p-4 pl-6 font-semibold text-text-main'>{row.area}</td>
                    <td className='p-4 text-center text-blue-400/90 font-mono'>{row.revenue}%</td>
                    <td className='p-4 text-center text-emerald-400/90 font-mono'>{row.cost}%</td>
                    <td className='p-4 text-center text-purple-400/90 font-mono'>{row.productivity}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='bg-secondary/45 border border-white/5 p-8 rounded-2xl space-y-6 shadow-xl'>
            <h3 className='text-2xl font-bold font-display text-primary'>
              The Foundation of Growth
            </h3>
            <p className='text-text-muted leading-relaxed text-sm'>
              This impact matrix serves as the algorithmic engine of the YOBIX Growth Framework. By quantifying how changes in business disciplines like <span className='text-text-main font-semibold'>Marketing</span> or <span className='text-text-main font-semibold'>Operations</span> translate to revenue and overhead changes, we bypass standard consulting guesswork.
            </p>
            <p className='text-text-muted leading-relaxed text-sm'>
              Our tool pinpoints where business performance is being lost and identifies which specific adjustment will yield the highest return on investment.
            </p>
            <div className='pt-4 border-t border-white/5 text-center'>
              <a
                href='/appointments'
                className='inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary-light transition-all duration-200'
              >
                Assess Your Matrix
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/5 pt-20 text-center space-y-6'>
        <h2 className='text-3xl sm:text-4xl font-display font-extrabold text-primary'>
          Stop Guessing. Start Measuring.
        </h2>
        <p className='text-text-muted text-base max-w-xl mx-auto leading-relaxed'>
          Get your Business Health Score and discover where your next growth opportunity is hidden.
        </p>
        <div className='pt-4'>
          <a
            href='/appointments'
            className='inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-primary-light transition-all duration-200 shadow-lg shadow-primary/10'
          >
            Take Free Assessment
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;