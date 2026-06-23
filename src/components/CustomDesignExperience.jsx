import { CheckIcon } from '@heroicons/react/24/solid';

const CustomDesignExperience = () => {
  return (
    <div className='bg-secondary/20 border border-white/5 rounded-3xl text-text-main py-12 px-6 sm:px-12'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-10'>
          <h1 className='text-3xl sm:text-4xl font-display text-primary mb-3'>
            Enterprise Data Modeling & Warehouse Architecture
          </h1>
          <p className='max-w-3xl mx-auto text-base text-text-muted'>
            Optimize your corporate datalake, schemas, and analytical transformations. Our consulting architects help you model data pipelines for maximum throughput and minimum compute costs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column */}
          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                The Data Modeling Process
              </h2>
              <ul className='space-y-3'>
                {[
                  'In-depth review of existing db structure, partitioning, and slow-running queries.',
                  'Collaborative schema design with diagrams, entity relationships, and dbt models.',
                  'Validation audits for security roles, columns encryption, and row-level segregation.',
                  'Implementation assistance to build, run, and scale pipelines using Yobix engines.',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-5 w-5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className='text-lg font-display text-primary border-l-4 border-primary pl-4'>
              Transform raw transactional records into high-performance analytical aggregates.
            </p>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Key Architectural Benefits
              </h2>
              <ul className='space-y-3'>
                {[
                  'Clean schemas that reduce JOIN complexities and processing duration.',
                  'Future-proof modeling that scales cleanly from Gigabytes to Petabytes.',
                  'Reduced compute expenses in Snowflake, BigQuery, or Databricks.',
                  'Self-healing, modular ETL runs that alert you instantly upon node failures.',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-5 w-5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Info display/flowchart) */}
          <div className='bg-background/80 border border-white/5 p-8 rounded-2xl flex flex-col justify-between space-y-6'>
            <h3 className='text-lg font-bold font-display text-text-main'>Database Connections</h3>
            <div className='grid grid-cols-2 gap-3 text-sm'>
              <div className='p-4 bg-secondary/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center'>
                <span className='font-bold text-text-main'>PostgreSQL</span>
                <span className='text-xs text-accent mt-1'>OLTP DB</span>
              </div>
              <div className='p-4 bg-secondary/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center'>
                <span className='font-bold text-text-main'>Snowflake</span>
                <span className='text-xs text-accent mt-1'>Cloud DWH</span>
              </div>
              <div className='p-4 bg-secondary/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center'>
                <span className='font-bold text-text-main'>BigQuery</span>
                <span className='text-xs text-accent mt-1'>Serverless DWH</span>
              </div>
              <div className='p-4 bg-secondary/50 rounded-xl border border-white/5 flex flex-col items-center justify-center text-center'>
                <span className='font-bold text-text-main'>Apache Kafka</span>
                <span className='text-xs text-accent mt-1'>Streaming</span>
              </div>
            </div>
            <p className='text-xs text-text-muted text-center'>
              Connected natively via SSL, IAM roles, or OAuth integration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDesignExperience;