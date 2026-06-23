const HeroSection = () => {
    return (
        <div className='relative bg-background overflow-hidden min-h-[80vh] flex items-center justify-center py-16 sm:py-24'>
            {/* Background glowing elements */}
            <div className='absolute inset-0 z-0 opacity-25'>
                <div className='absolute top-[-20%] left-[-10%] w-[55%] h-[65%] rounded-full bg-primary/10 blur-[150px]'></div>
                <div className='absolute bottom-[-20%] right-[-10%] w-[55%] h-[65%] rounded-full bg-accent/10 blur-[150px]'></div>
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in space-y-8'>
                <div className='inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary uppercase mb-2'>
                    <span>Yobix Business Intelligence Matrix</span>
                </div>

                <h1 className='text-5xl sm:text-7xl font-extrabold tracking-tight font-display text-text-main leading-tight'>
                    Find Out What&apos;s Holding Your Business Back
                </h1>
                
                <p className='max-w-3xl mx-auto text-lg sm:text-xl text-text-muted leading-relaxed'>
                    Every business problem falls into one of three categories: 
                    <span className='text-text-main font-semibold'> 📈 Revenue Growth</span>, 
                    <span className='text-text-main font-semibold'> 💰 Cost & Profit Control</span>, or 
                    <span className='text-text-main font-semibold'> ⚡ Productivity Improvement</span>. 
                    Answer a few questions and discover your biggest business bottleneck in less than 3 minutes.
                </p>

                <div className='pt-6'>
                    <a
                        href='/appointments'
                        className='w-full sm:w-auto inline-flex justify-center items-center px-10 py-4.5 border border-transparent text-base font-bold rounded-xl text-white bg-primary hover:bg-primary-light transition-all duration-200 shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-[1.02]'
                    >
                        Start Business Health Check
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;