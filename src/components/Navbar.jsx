import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar({ currentPath }) {
    const normalizedCurrentPath = currentPath.endsWith('/') && currentPath.length > 1
        ? currentPath.slice(0, -1)
        : currentPath;

    const navigation = [
        { name: 'Home', href: '/', current: normalizedCurrentPath === '/' },
        { name: 'Features & Services', href: '/services', current: normalizedCurrentPath === '/services' },
        { name: 'Case Studies', href: '/portfolio', current: normalizedCurrentPath === '/portfolio' },
        { name: 'Locations', href: '/locations', current: normalizedCurrentPath === '/locations' },
        { name: 'Contact', href: '/contact', current: normalizedCurrentPath === '/contact' },
        { name: 'About Us', href: '/about', current: normalizedCurrentPath === '/about' },
    ];

    const [isLight, setIsLight] = useState(false);

    // Run on mount to read initial theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('yobix-theme');
        setIsLight(savedTheme === 'theme-light');
    }, []);

    const toggleTheme = () => {
        const nextLightState = !isLight;
        setIsLight(nextLightState);
        
        const themeVal = nextLightState ? 'theme-light' : 'theme-dark';
        localStorage.setItem('yobix-theme', themeVal);
        
        document.documentElement.className = '';
        if (nextLightState) {
            document.documentElement.classList.add('theme-light');
        }
    };

    return (
        <Disclosure
            as='nav'
            className='sticky top-0 z-50 border-b border-white/5 backdrop-blur-md bg-background/80 shadow-2xl transition-colors duration-300'
        >
            {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                        <div className='flex h-16 items-center justify-between'>
                            <div className='flex shrink-0 items-center'>
                                <a href='/' className='flex items-center space-x-3'>
                                    <img
                                        alt='Yobix Logo'
                                        src='/logo.webp'
                                        className='h-9 w-auto rounded-lg'
                                    />
                                    <span className='text-2xl font-bold font-display text-text-main tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                                        Yobix
                                    </span>
                                </a>
                            </div>
                            
                            <div className='hidden md:flex sm:space-x-8 flex-grow justify-center'>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                            item.current
                                                ? 'border-primary text-primary font-semibold'
                                                : 'border-transparent text-text-muted hover:border-primary-light hover:text-text-main',
                                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium transition-all duration-200',
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>

                            <div className='hidden sm:flex items-center space-x-4'>
                                <button
                                    onClick={toggleTheme}
                                    className='p-2.5 rounded-xl border border-white/10 hover:border-primary/20 bg-secondary/50 text-text-muted hover:text-text-main transition-all duration-200 cursor-pointer flex items-center justify-center focus:outline-none'
                                    title={isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                                    aria-label="Toggle Dark/Light Mode"
                                >
                                    {isLight ? (
                                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.4 12.4l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.78 6.22l-1.58 1.58M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    )}
                                </button>


                            </div>

                            <div className='-mr-2 flex items-center md:hidden'>
                                <DisclosureButton className='relative inline-flex items-center justify-center rounded-lg p-2 text-text-muted hover:text-text-main hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary'>
                                    <span className='absolute -inset-0.5' />
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? (
                                        <XMarkIcon
                                          className='block h-6 w-6'
                                          aria-hidden='true'
                                        />
                                    ) : (
                                        <Bars3Icon
                                          className='block h-6 w-6'
                                          aria-hidden='true'
                                        />
                                    )}
                                </DisclosureButton>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className='md:hidden border-b border-white/5 bg-background'>
                        <div className='space-y-1 px-2 pb-3 pt-2'>
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as='a'
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? 'bg-secondary text-primary font-semibold'
                                            : 'text-text-muted hover:bg-secondary/50 hover:text-text-main',
                                        'block rounded-lg px-3 py-2 text-base font-medium text-center transition-all duration-200',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                            
                            <div className='pt-4 px-3 flex flex-col space-y-3'>
                                <button
                                    onClick={toggleTheme}
                                    className='w-full py-2.5 rounded-lg border border-white/10 bg-secondary text-sm font-semibold text-text-main text-center transition-all flex items-center justify-center space-x-2'
                                >
                                    {isLight ? (
                                        <>
                                            <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.4 12.4l1.58 1.58M3 12h2.25m13.5 0H21M4.22 19.78l1.58-1.58M17.78 6.22l-1.58 1.58M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                                            </svg>
                                            <span>Switch to Dark Mode</span>
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                            </svg>
                                            <span>Switch to Light Mode</span>
                                        </>
                                    )}
                                </button>
                                

                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}