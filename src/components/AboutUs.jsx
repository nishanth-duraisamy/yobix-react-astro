function AboutUsComponent() {
  const values = [
    {
      title: 'Actionable Insights',
      description: 'We believe data is only as good as the decisions it enables. We focus on delivering clear, immediate insights.'
    },
    {
      title: 'Real-time Processing',
      description: 'In the modern business environment, hours of delay can cost millions. Yobix processes information as it happens.'
    },
    {
      title: 'Uncompromised Security',
      description: 'Enterprise-grade encryption and strict access controls ensure your business intelligence remains entirely yours.'
    },
    {
      title: 'Seamless Integration',
      description: 'Connect to database clusters, cloud warehouses, and API streams in minutes without custom engineering.'
    }
  ];

  return (
    <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary font-display'>
            Our Mission
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-lg text-text-muted'>
            Empowering modern enterprises with sub-second analytical visibility. We translate complex data streams into intuitive business decisions.
          </p>
        </div>

        {/* Brand Showcase Block */}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12 mb-20 bg-secondary/35 border border-white/5 rounded-3xl p-8 lg:p-12 shadow-2xl'>
          <div className='lg:w-1/2 space-y-6'>
            <h2 className='text-3xl font-bold font-display text-text-main'>
              The Story Behind Yobix
            </h2>
            <p className='text-text-muted leading-relaxed'>
              Founded in Coimbatore, Yobix arose from a simple realization: modern enterprises are swimming in data but starving for insights. Traditional BI architectures require hours to sync, leaving decision-makers looking in the rearview mirror.
            </p>
            <p className='text-text-muted leading-relaxed'>
              Yobix built a state-of-the-art columnar analytics engine capable of aggregating petabyte-scale datasets on the fly. Today, we power dashboarding, automated alerts, and predictive modeling for high-growth startups and legacy corporations alike.
            </p>
          </div>
          <div className='lg:w-5/12 flex justify-center'>
            <div className='relative group'>
              <div className='absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 blur group-hover:opacity-50 transition duration-500'></div>
              <div className='relative bg-secondary border border-white/5 p-8 rounded-2xl flex flex-col items-center text-center max-w-sm'>
                <img
                  className='h-24 w-auto rounded-xl mb-6 shadow-md'
                  src='/logo.webp'
                  alt='Yobix Platform Logo'
                />
                <h3 className='text-xl font-bold text-text-main mb-2 font-display'>Yobix BI Suite</h3>
                <p className='text-sm text-text-muted'>
                  Architected for sub-second database querying and predictive modeling.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className='space-y-12'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold font-display text-text-main'>Our Core Values</h2>
            <p className='text-text-muted mt-2'>The principles guiding our engineers and product designers.</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {values.map((val) => (
              <div
                key={val.title}
                className='bg-secondary/40 border border-white/5 p-8 rounded-2xl hover:border-primary/10 transition-all duration-300'
              >
                <h3 className='text-xl font-semibold text-primary font-display mb-3'>{val.title}</h3>
                <p className='text-text-muted leading-relaxed'>{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsComponent;