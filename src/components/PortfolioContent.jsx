import React from 'react';

const CASE_STUDIES = [
  {
    title: 'FinTech Analytics Engine',
    category: 'Real-time Streaming',
    metric: '142ms Query Speed',
    details: 'Processing 12,000 transactions per second with live fraud detection panels.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'SaaS App Embedded Canvas',
    category: 'Embedded SDK',
    metric: '1.2M Dashboard Users',
    details: 'Full white-labeled multi-tenant integration with row-level security tokens.',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    title: 'Retail Fleet Telemetry',
    category: 'IoT Datastreaming',
    metric: '92% CPU Savings',
    details: 'Tracking 4,500 delivery routes simultaneously with automated delivery alerts.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Telecom Data Lake Migration',
    category: 'Legacy Migration',
    metric: '14.2 TB Transferred',
    details: 'Seamless zero-downtime cutover from legacy Hadoop architectures to Yobix.',
    color: 'from-rose-500/20 to-orange-500/20',
  },
  {
    title: 'Healthcare Patient Portal',
    category: 'Compliance Audit',
    metric: '100% HIPAA Standard',
    details: 'Strict column-level encryption and immutable query trails for patient records.',
    color: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    title: 'Media Streaming Insights',
    category: 'Aggregations',
    metric: '120M Rows / Sec',
    details: 'Aggregating active viewer ratings and telemetry stream spikes on the fly.',
    color: 'from-sky-500/20 to-blue-500/20',
  },
];

const PortfolioContent = () => {
  return (
    <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-display font-extrabold text-primary'>Case Studies & Success Stories</h2>
          <p className='text-lg text-text-muted mt-3 max-w-2xl mx-auto'>
            Explore how enterprises run real-time dashboards and optimize queries with Yobix.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {CASE_STUDIES.map((item, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl bg-secondary/40 border border-white/5 p-6 flex flex-col justify-between h-full transform transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl'
            >
              {/* Highlight background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>

              <div className='relative z-10 space-y-4'>
                <div className='flex items-center justify-between'>
                  <span className='text-accent text-xs font-bold tracking-widest uppercase'>
                    {item.category}
                  </span>
                  <span className='text-emerald-400 font-mono text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20'>
                    {item.metric}
                  </span>
                </div>
                <h3 className='text-2xl font-display font-bold text-text-main group-hover:text-primary transition-colors duration-200'>
                  {item.title}
                </h3>
                <p className='text-sm text-text-muted leading-relaxed'>
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-20 text-center bg-secondary/30 border border-white/5 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto'>
          <h2 className='text-3xl font-display font-bold text-text-main mb-4'>
            Ready to Accelerate Your Queries?
          </h2>
          <p className='text-text-muted mb-8 max-w-xl mx-auto'>
            Experience sub-second dashboard rendering and automated analytics alerts on your own datasets today.
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4'>
            <a
              href='/appointments'
              className='bg-primary text-white hover:bg-primary-light font-semibold py-3 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-primary/20'
            >
              Start Growth Check
            </a>
            <a
              href='/contact'
              className='border border-white/10 text-text-main hover:bg-white/5 font-semibold py-3 px-8 rounded-xl transition duration-300'
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
