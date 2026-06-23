import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className='bg-secondary border-t border-white/5'>
            <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
                {/* Horizontal row of contact details */}
                <div className='flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5'>
                    <div className='flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm'>
                        <div className='flex items-center space-x-2 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <PhoneIcon className='h-5 w-5 text-accent' />
                            <a id='phone' href='tel:+918344647780'>
                                +91 83446 47780
                            </a>
                        </div>
                        <div className='flex items-center space-x-2 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <EnvelopeIcon className='h-5 w-5 text-accent' />
                            <a id='email' href='mailto:info@yobix.in' target='_blank' rel='noopener noreferrer'>
                                info@yobix.in
                            </a>
                        </div>
                        <div className='flex items-center space-x-2 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <svg className='h-5 w-5 text-accent' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/>
                            </svg>
                            <a id='instagram' href='https://www.instagram.com/yobix.in/' target='_blank' rel='noopener noreferrer'>
                                yobix.in
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Address & Copyright */}
                <div className='pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex items-start space-x-3 text-text-muted hover:text-text-main transition-colors duration-200 max-w-xl'>
                        <MapPinIcon className='h-5 w-5 text-accent mt-0.5 flex-shrink-0' />
                        <a 
                            id='address-link'
                            href='https://maps.google.com/?q=22b,+Kongu+nagar,+kalveerampalayam,+coimbatore-641046' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            className='text-sm leading-relaxed'
                        >
                            22b, Kongu nagar, kalveerampalayam, coimbatore - 641046
                        </a>
                    </div>
                    <div className='text-left md:text-right text-text-muted text-sm space-y-1'>
                        <p className='font-semibold text-text-main font-display'>Yobix (OPC) Private Limited</p>
                        <p className='flex flex-wrap md:justify-end gap-x-3 gap-y-1 items-center'>
                            <span>&copy; {new Date().getFullYear()} Yobix. All Rights Reserved.</span>
                            <span className='hidden sm:inline opacity-30'>|</span>
                            <a id='privacy-policy-link' href='/privacy-policy' className='hover:text-text-main transition-colors duration-150 underline decoration-white/10'>
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;