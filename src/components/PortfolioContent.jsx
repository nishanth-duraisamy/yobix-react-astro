import React from 'react';
import coverup1 from '../assets/tattoo/coverup/1.webp';
import coverup2 from '../assets/tattoo/coverup/2.webp';
import coverup3 from '../assets/tattoo/coverup/3.webp';
import coverup4 from '../assets/tattoo/coverup/4.webp';
import coverup5 from '../assets/tattoo/coverup/5.webp';
import custom1 from '../assets/tattoo/custom/1.webp';
import custom2 from '../assets/tattoo/custom/2.webp';
import custom3 from '../assets/tattoo/custom/3.webp';
import fineline1 from '../assets/tattoo/fine-line/1.webp';
import fineline2 from '../assets/tattoo/fine-line/2.webp';
import firstFineLine from '../assets/tattoo/first/fine-line.webp';
import firstMinimalSymbol from '../assets/tattoo/first/minimal-symbol.webp';
import firstSmallText from '../assets/tattoo/first/small-text.webp';

const PORTFOLIO_ITEMS = [
  { src: custom1, category: 'Custom', title: 'Intricate Custom Piece' },
  { src: fineline1, category: 'Fine Line', title: 'Delicate Fine Line Art' },
  { src: coverup1, category: 'Cover-up', title: 'Seamless Cover-up' },
  { src: firstFineLine, category: 'First Tattoo', title: 'Minimalist First Piece' },
  { src: custom2, category: 'Custom', title: 'Unique Custom Design' },
  { src: fineline2, category: 'Fine Line', title: 'Detailed Fine Line' },
  { src: coverup2, category: 'Cover-up', title: 'Artistic Transformation' },
  { src: firstMinimalSymbol, category: 'First Tattoo', title: 'Simple Symbol' },
  { src: custom3, category: 'Custom', title: 'Bold Custom Work' },
  { src: coverup3, category: 'Cover-up', title: 'Professional Rework' },
  { src: firstSmallText, category: 'First Tattoo', title: 'Elegant Text' },
  { src: coverup4, category: 'Cover-up', title: 'Large Scale Cover-up' },
  { src: coverup5, category: 'Cover-up', title: 'Vibrant Restoration' },
];

const PortfolioContent = () => {
  return (
    <div className='bg-background text-text-main py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-body text-primary'>OUR PORTFOLIO</h2>
          <p className='text-lg text-text-muted mt-2'>
            A showcase of our finest work and artistic journey.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-lg bg-secondary border border-white/5 transform transition-all duration-300 hover:-translate-y-2 hover:border-primary shadow-lg'
            >
              <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden'>
                <img
                  src={item.src.src}
                  alt={item.title}
                  className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110'
                  loading="lazy"
                />
              </div>
              <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
                <span className='text-primary text-xs font-bold tracking-widest uppercase mb-1'>
                  {item.category}
                </span>
                <h3 className='text-xl font-body text-text-main'>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center bg-secondary border border-white/5 rounded-2xl p-8 md:p-12'>
          <h2 className='text-3xl font-body text-primary mb-4'>
            Ready to Start Your Story?
          </h2>
          <p className='text-lg text-text-muted mb-8 max-w-2xl mx-auto'>
            Whether it's your first tattoo or a complex custom piece, our artists are here to bring your vision to life with precision and passion.
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            <a
              href='/appointments'
              className='bg-primary text-background hover:bg-primary-light font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
            >
              Book an Appointment
            </a>
            <a
              href='/contact'
              className='border-2 border-primary text-primary hover:bg-primary hover:text-background font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out'
            >
              Consult an Artist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioContent;
