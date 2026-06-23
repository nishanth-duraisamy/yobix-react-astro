import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer = () => {
    return (
        <footer className='bg-secondary border-t border-white/5'>
            <div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8'>
                    {/* Left Column - Contact Us */}
                    <div className='flex flex-col items-start space-y-4 w-full text-left'>
                        <h3 className='text-lg font-bold text-primary font-display tracking-wide uppercase'>Contact Us</h3>
                        <div className='flex items-center space-x-3 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <PhoneIcon className='h-5 w-5 text-accent' />
                            <a id='phone' href='tel:+918344647780' className='text-sm font-semibold'>
                                +91 83446 47780
                            </a>
                        </div>
                        <div className='flex items-center space-x-3 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <EnvelopeIcon className='h-5 w-5 text-accent' />
                            <a id='email' href='mailto:info@yobix.in' target='_blank' rel='noopener noreferrer' className='text-sm font-semibold'>
                                info@yobix.in
                            </a>
                        </div>
                        <div className='flex items-center space-x-3 text-text-muted hover:text-text-main transition-colors duration-200'>
                            <svg className='h-5 w-5 text-accent' fill='currentColor' viewBox='0 0 24 24'>
                                <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z'/>
                            </svg>
                            <a id='instagram' href='https://www.instagram.com/yobix.in/' target='_blank' rel='noopener noreferrer' className='text-sm font-semibold'>
                                yobix.in
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Address & Licenses */}
                    <div className='flex flex-col items-start md:items-end space-y-4 w-full text-left md:text-right'>
                        <h3 className='text-lg font-bold text-primary font-display tracking-wide uppercase'>Corporate Office</h3>
                        <p className='font-bold text-text-main font-display text-base'>
                            Yobix (OPC) Private Limited
                        </p>
                        <div className='flex text-text-muted hover:text-text-main transition-colors duration-200 justify-start md:justify-end'>
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
                        <div className='text-xs opacity-75 font-mono text-text-muted leading-relaxed'>
                            CIN: U62099TZ2026OPC037617 <br class="hidden sm:inline md:hidden" />
                            PAN: AACCY1537H <br class="hidden sm:inline md:hidden" />
                            TAN: CHEY04947F
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Copyright & Privacy Policy */}
                <div className='pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='text-left text-text-muted text-xs'>
                        &copy; {new Date().getFullYear()} Yobix. All Rights Reserved.
                    </div>
                    <div className='text-left md:text-right text-xs'>
                        <a id='privacy-policy-link' href='/privacy-policy' className='text-text-muted hover:text-text-main transition-colors duration-150 underline decoration-white/10'>
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;