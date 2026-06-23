import { CheckIcon } from '@heroicons/react/24/solid';

const sections = [
  {
    title: 'Before the Product Tour',
    items: [
      'Identify key data sources (BigQuery, PostgreSQL, Snowflake, API streams).',
      'List primary bottleneck dashboards or slow-loading reports.',
      'Define success metrics (e.g., query load times, automated email alerts frequency).',
      'Invite team members who will actively use the dashboard builder.'
    ],
  },
  {
    title: 'During the live demo',
    items: [
      'Explain your database scale and querying frequency requirements.',
      'Request a walk-through of the custom columnar database connector.',
      'Check the automated alerting system and Slack/Teams integrations.',
      'Ask about access controls, row-level security, and team workspaces.'
    ],
  },
  {
    title: 'Trial setup basics',
    items: [
      'Create a sandbox Yobix account using your enterprise email.',
      'Connect a test dataset or query schema to verify query speeds.',
      'Build a simple test dashboard and invite 1-2 team reviewers.',
      'Schedule a feedback session with our support engineers.'
    ],
  },
];

const PreparationGuide = ({ bookedLocationDetails }) => {
  const contactPhoneNumber = '+91 83446 47780';

  return (
    <div className='bg-background text-text-main py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5'>
      <div className='max-w-7xl mx-auto space-y-12'>
        {/* Header Section */}
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl font-display text-primary mb-2'>
            Prepare for Your Demo Tour
          </h1>
          <p className='max-w-3xl mx-auto text-lg text-text-muted'>
            Getting the most out of your consultation starts with simple preparation. Follow this checklist to ensure we cover your exact technical setup.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Left Column - Preparation Steps */}
          <div className='space-y-8'>
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className='text-2xl font-display text-text-main mb-3'>
                  {section.title}
                </h2>
                <ul className='space-y-3'>
                  {section.items.map((item) => (
                    <li key={item} className='flex items-start'>
                      <CheckIcon className='h-6 w-6 text-accent mr-3 flex-shrink-0' />
                      <span className='text-text-muted'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column - Additional Info / Contact */}
          <div className='space-y-8'>
            <div className='border-l-4 border-primary pl-6 space-y-4'>
              <h2 className='text-2xl font-display text-text-main'>
                Need Assistance?
              </h2>
              <p className='text-lg text-text-muted leading-relaxed'>
                If you have questions about custom integrations or specific security standard audits (like SOC 2, HIPAA) prior to the call, reach out to our engineering team.
              </p>
              <p className='text-xl font-bold text-primary font-display'>
                Email Support: <a href='mailto:info@yobix.in' className='hover:underline'>info@yobix.in</a>
              </p>
              {bookedLocationDetails && bookedLocationDetails.address && (
                <p className='text-base text-text-muted mt-4'>
                  <span className='font-semibold text-primary font-display'>Selected Center:</span> {bookedLocationDetails.locationName || 'Hub Office'}
                  <br />
                  <span className='font-semibold text-primary font-display'>Address:</span> {bookedLocationDetails.address}
                </p>
              )}
            </div>

            <div className='bg-secondary/40 border border-white/5 p-6 rounded-2xl'>
                <h3 className='text-xl font-display text-text-main mb-2'>Quick Tip:</h3>
                <p className='text-text-muted leading-relaxed'>
                    A typical setup demo takes 25 minutes. Have your developer console or warehouse schema accessible if you want to test our live database connectors.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreparationGuide;