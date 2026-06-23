import { CheckIcon } from '@heroicons/react/24/solid';

const worries = [
  'Is real-time data ingestion going to cause queries to slow down?',
  'Will query costs skyrocket as data size scales to terabytes?',
  'How difficult is it to setup automated real-time alerts?',
];

const solutions = [
  'Sub-second query execution times on live streaming data.',
  'Columnar compression that reduces storage and query footprints by up to 90%.',
  'Automated triggers connected directly to Slack, Teams, and email endpoints.',
  'No complex database indexing or partitioning needed out-of-the-box.',
];

const trustFactors = [
  'Powering analytics for over 500 enterprise production clusters.',
  'Guaranteed 99.99% uptime SLA for high-throughput streaming environments.',
];

const FirstTattooExperience = () => {
  return (
    <div className='bg-secondary/20 border border-white/5 rounded-3xl text-text-main py-12 px-6 sm:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl sm:text-4xl font-display text-primary mb-3'>
            Real-Time Analytics Platform
          </h1>
          <p className='max-w-3xl mx-auto text-base text-text-muted'>
            Query and visualize streaming event pipelines with sub-second latency. Keep your teams informed on operations as they happen, not hours later.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Common Streaming Obstacles
              </h2>
              <ul className='space-y-3'>
                {worries.map((item) => (
                  <li key={item} className='flex items-start'>
                    <span className='h-2 w-2 rounded-full bg-red-500 mr-3 mt-2 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                The Yobix Streamlining Solution
              </h2>
              <ul className='space-y-3'>
                {solutions.map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-5 w-5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className='space-y-8 flex flex-col justify-between'>
            <div className='bg-background/80 border border-white/5 p-6 rounded-2xl'>
              <h3 className='text-lg font-bold font-display text-text-main mb-3'>Architectural Pipeline</h3>
              <div className='space-y-3 text-sm'>
                <div className='flex items-center justify-between p-2.5 bg-secondary/50 rounded-lg border border-white/5'>
                  <span className='text-text-muted'>Data Sources (Kafka, PubSub, DBs)</span>
                  <span className='text-accent font-semibold'>Ingesting</span>
                </div>
                <div className='flex items-center justify-between p-2.5 bg-secondary/50 rounded-lg border border-white/5'>
                  <span className='text-text-muted'>Yobix Analytics Columnar Engine</span>
                  <span className='text-primary font-semibold'>Processing</span>
                </div>
                <div className='flex items-center justify-between p-2.5 bg-secondary/50 rounded-lg border border-white/5'>
                  <span className='text-text-muted'>Instant Custom Dashboards & Reports</span>
                  <span className='text-emerald-400 font-semibold'>Rendering</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Why enterprises choose Yobix
              </h2>
              <ul className='space-y-3'>
                {trustFactors.map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-5 w-5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstTattooExperience;