import { CheckIcon } from '@heroicons/react/24/solid';

const FineLineExperience = () => {
  return (
    <div className='bg-secondary/20 border border-white/5 rounded-3xl text-text-main py-12 px-6 sm:px-12'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='text-3xl sm:text-4xl font-display text-primary mb-3'>
            Embedded Analytics & Dashboards
          </h1>
          <p className='max-w-3xl mx-auto text-base text-text-muted'>
            Deliver white-labeled, high-performance dashboards directly inside your own application. Empower your customers with interactive tools, powered by our backend API.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Common Embedding Worries
              </h2>
              <ul className='space-y-3'>
                {[
                  'Will customer data bleed across workspaces/organizations?',
                  'Will rendering dashboards slow down our parent application?',
                  'How painful is styling white-labeled elements to match our brand?',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <span className='h-2 w-2 rounded-full bg-red-500 mr-3 mt-2 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className='text-xl font-bold font-display text-text-main mb-3'>
                Clean, Secure, and Fully Brandable
              </h2>
              <ul className='space-y-3'>
                {[
                  'Strict tenant segregation with row-level security tokens.',
                  'Sub-second canvas renders using iframe-free React SDK widgets.',
                  'Fully customizable CSS custom properties and theme configuration.',
                  'Developer-first docs with working SDK wrappers in JS, Python, and iOS.',
                ].map((item) => (
                  <li key={item} className='flex items-start'>
                    <CheckIcon className='h-5 w-5 text-accent mr-3 flex-shrink-0' />
                    <span className='text-text-muted'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='bg-background/80 border border-white/5 p-8 rounded-2xl flex flex-col justify-between space-y-6'>
            <h3 className='text-lg font-bold font-display text-text-main'>Example SDK Snip</h3>
            <pre className='bg-secondary p-4 rounded-xl text-xs overflow-x-auto text-cyan-400 font-mono leading-relaxed border border-white/5'>
{`import { YobixDashboard } from '@yobix/react-sdk';

function App() {
  return (
    <YobixDashboard
      dashboardId="dash_usr_081a"
      token={securityToken}
      theme={{
        primary: "#3b82f6",
        background: "#030712"
      }}
    />
  );
}`}
            </pre>
            <p className='text-xs text-text-muted text-center'>
              Integrate interactive analytics in under 5 lines of code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FineLineExperience;