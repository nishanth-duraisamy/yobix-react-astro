import { CheckIcon } from '@heroicons/react/24/solid';

const worries = [
  'Will we lose years of historical report data during the switch?',
  'How long will our analytics team be offline during migration?',
  'Will we need to rewrite all our custom SQL and Dataform models?',
];

const solutions = [
  'Zero-downtime dual-write pipelines that keep both systems operational during sync.',
  'Auto-compiler tools that convert legacy queries to optimized columnar queries.',
  'Direct metadata crawlers that import old schema setups and map them in one click.',
  'Experienced database engineers who guide your team through each step.',
];

const CoverUpExperience = () => {
  return (
    <div className='bg-secondary/20 border border-white/5 rounded-3xl text-text-main py-12 px-6 sm:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl sm:text-4xl font-display text-primary mb-3'>
            Legacy Platform Migration
          </h1>
          <p className='max-w-3xl mx-auto text-base text-text-muted'>
            Migrating from slow, expensive, legacy BI tools shouldn't stall your company's decisions. We handle the heavy lifting, maintaining continuity and reliability.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Common Migration Concerns
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
                Migration Handled Safely
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
          <div className='bg-background/80 border border-white/5 p-8 rounded-2xl flex flex-col justify-between'>
            <div className='space-y-4'>
              <h3 className='text-lg font-bold font-display text-text-main'>Migration Roadmap</h3>
              <div className='relative pl-6 border-l-2 border-primary/20 space-y-6 text-sm'>
                <div className='relative'>
                  <div className='absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background'></div>
                  <h4 className='font-semibold text-text-main'>Step 1: Schema Ingestion</h4>
                  <p className='text-text-muted mt-1'>We trace your old schema files and map them to columnar databases.</p>
                </div>
                <div className='relative'>
                  <div className='absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-background'></div>
                  <h4 className='font-semibold text-text-main'>Step 2: Dual Write & Test</h4>
                  <p className='text-text-muted mt-1'>Data streams into both platforms, ensuring results are 100% accurate.</p>
                </div>
                <div className='relative'>
                  <div className='absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-emerald-400 border-4 border-background'></div>
                  <h4 className='font-semibold text-text-main'>Step 3: Switchover</h4>
                  <p className='text-text-muted mt-1'>Decommission old database hardware and scale Yobix live.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverUpExperience;