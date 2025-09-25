export default function Hero({ isPlaying, setIsPlaying }) {
  const handlePlay = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };
  return (
    <section className='relative w-full h-[90vh]'>
      <img
        className='w-full h-full object-cover'
        src='/banner.webp'
        alt='Banner Radio Libertad'
        loading='eager'
        fetchpriority='high'
      />
      <div class='absolute inset-0 bg-black/80'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4'>
          Información confiable. Música que inspira.
        </h1>
        <p className='text-lg sm:text-xl mb-6'>
          Radio Libertad — en vivo las 24 horas.
        </p>
        <a
          onClick={handlePlay}
          className='bg-secondary px-6 py-3 rounded-xl text-lg font-medium hover:bg-emerald-950 transition cursor-pointer'
        >
          Escucha en Vivo
        </a>
      </div>
    </section>
  );
}
