const ArtistCard = ({ artist }) => {
  // Initials for avatar fallback
  const initials = artist.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className='group bg-secondary/50 border border-white/5 rounded-2xl shadow-xl p-6 text-center hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] flex flex-col justify-between h-full'>
      <div>
        <div className='w-20 h-20 rounded-full mx-auto bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-text-main font-bold font-display text-xl mb-4 group-hover:scale-105 transition-transform duration-300'>
          {initials}
        </div>
        <h3 className='text-xl font-bold font-display text-text-main group-hover:text-primary transition-colors duration-200'>
          {artist.name}
        </h3>
        <p className='text-accent text-sm font-semibold mt-1 tracking-wider uppercase'>
          {artist.role}
        </p>
        <p className='text-text-muted text-sm mt-3 leading-relaxed'>
          {artist.bio}
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;