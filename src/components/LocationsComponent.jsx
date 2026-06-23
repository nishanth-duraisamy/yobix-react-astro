import { locations } from '../data/locations';
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

function LocationsComponent() {
  return (
    <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-primary font-display'>
            Global Presence
          </h1>
          <p className='mt-4 max-w-2xl mx-auto text-base text-text-muted sm:text-lg'>
            Our physical hubs powering the future of business intelligence, data analytics, and real-time decision making.
          </p>
        </div>

        <div className='flex justify-center'>
          <div className='w-full max-w-3xl'>
            {locations.map((location) => (
              <div
                key={location.name}
                className='flex flex-col bg-secondary/50 border border-white/5 rounded-2xl overflow-hidden shadow-2xl hover:border-primary/20 transition-all duration-300'
              >
                {/* Map embed */}
                <div className='h-[350px] w-full'>
                  <iframe
                    src={location.mapSrc}
                    width='100%'
                    height='100%'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='opacity-80 hover:opacity-100 transition-opacity duration-300'
                  ></iframe>
                </div>

                {/* Location details */}
                <div className='p-8 flex flex-col justify-between'>
                  <div>
                    <div className='flex items-center space-x-2 text-accent mb-3'>
                      <MapPinIcon className='h-5 w-5' />
                      <span className='text-sm font-semibold tracking-wider uppercase'>Corporate Head Office</span>
                    </div>
                    <h2 className='text-2xl font-bold font-display text-text-main mb-4'>{location.name}</h2>
                    <p className='text-text-muted leading-relaxed mb-6'>
                      {location.address}
                    </p>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5'>
                    <a
                      href="https://maps.google.com/?q=22b,+Kongu+nagar,+kalveerampalayam,+coimbatore-641046"
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-flex justify-center items-center px-5 py-3 border border-white/10 text-sm font-medium rounded-xl text-text-main hover:bg-white/5 transition-all duration-200'
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationsComponent;