import ArtistCard from './ArtistCard';

const teamMembers = [
  {
    name: 'Siddharth Nair',
    role: 'Founder & CEO',
    bio: 'Former principal data architect with a decade of experience designing enterprise data warehouses.',
  },
  {
    name: 'Priya Sundar',
    role: 'Chief Technology Officer',
    bio: 'Distributed systems engineer specializing in low-latency analytics engines and column-store databases.',
  },
  {
    name: 'Amit Patel',
    role: 'Head of Product',
    bio: 'Passionate about simplifying analytics interfaces to make business intelligence accessible to everyone.',
  },
  {
    name: 'Meera Krishnan',
    role: 'Lead UI/UX Designer',
    bio: 'Crafting responsive data visualization experiences that feel natural, fluid, and visually stunning.',
  },
];

const MeetTheArtists = () => {
  return (
    <div className='py-16 bg-background text-text-main'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-extrabold tracking-tight sm:text-5xl font-display text-text-main'>
            Meet Our Leadership Team
          </h2>
          <p className='mt-3 max-w-2xl mx-auto text-base text-text-muted sm:text-lg'>
            The minds building the future of database analytics and real-time dashboarding.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {teamMembers.map((member) => (
            <ArtistCard key={member.name} artist={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheArtists;