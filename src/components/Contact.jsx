import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className='bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8 animate-fade-in'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-display font-extrabold text-primary'>Contact Us</h2>
          <p className='text-lg text-text-muted mt-2'>We're here to help. Reach out to us anytime.</p>
        </div>
        <div className='flex justify-center'>
          {/* Contact Info */}
          <div className='w-full max-w-xl bg-secondary/45 border border-white/5 rounded-2xl p-8 space-y-6 shadow-xl'>
            <h3 className='text-xl font-bold font-display text-primary'>Contact Information</h3>
            <div className='flex items-center space-x-4 text-text-muted hover:text-text-main transition-colors duration-200'>
              <div className='p-2.5 bg-primary/10 rounded-lg text-primary'>
                <PhoneIcon className='h-6 w-6' />
              </div>
              <a id='phone' href='tel:+918344647780' className='text-base font-semibold'>
                +91 83446 47780
              </a>
            </div>
            <div className='flex items-center space-x-4 text-text-muted hover:text-text-main transition-colors duration-200'>
              <div className='p-2.5 bg-primary/10 rounded-lg text-primary'>
                <EnvelopeIcon className='h-6 w-6' />
              </div>
              <a id='email' href='mailto:info@yobix.in' target='_blank' rel='noopener noreferrer' className='text-base font-semibold'>
                info@yobix.in
              </a>
            </div>
            <div className='flex items-center space-x-4 text-text-muted hover:text-text-main transition-colors duration-200'>
              <div className='p-2.5 bg-primary/10 rounded-lg text-primary flex items-center justify-center'>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/>
                </svg>
              </div>
              <a id='instagram' href='https://www.instagram.com/yobix.in/' target='_blank' rel='noopener noreferrer' className='text-base font-semibold'>
                yobix.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;