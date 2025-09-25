import { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Radio } from 'lucide-react';

export default function RadioPlayer({ isPlaying, setIsPlaying }) {
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  const station = {
    name: 'Radio Libertad',
    url: 'https://stream.zeno.fm/p5tdruzh408uv',
    status: 'Live',
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch((err) => {
        console.error('Error reproduciendo audio:', err);
        setIsPlaying(false);
      });
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = isMuted ? 0 : volume / 100;
  }, [volume, isMuted]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.pause();
      audio.src = '';
      audio.load();
      audio.src = station.url;
      audio.load();
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseInt(e.target.value));
    if (isMuted && parseInt(e.target.value) > 0) {
      setIsMuted(false);
    }
  };

  return (
    <div className='fixed bottom-0 left-0 right-0 bg-gray-900 text-white shadow-lg z-50'>
      <audio ref={audioRef} src={station.url} preload='none' />

      <div className='flex items-center justify-between p-3 max-w-6xl mx-auto'>
        {/* Logo y Título */}
        <div className='flex items-center'>
          <Radio className='w-6 h-6 mr-3 text-tertiary' />
          <div>
            <h3 className='font-bold text-lg'>{station.name}</h3>
            <p className='text-xs text-tertiary'>{station.status}</p>
          </div>
        </div>

        <div className='flex items-center space-x-4'>
          <button
            onClick={togglePlay}
            className={`bg-tertiary hover:bg-amber-950 rounded-full p-3 focus:outline-none transition-colors cursor-pointer ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <Pause className='w-5 h-5' />
            ) : (
              <Play className='w-5 h-5' />
            )}
          </button>

          <div className='flex items-center'>
            <button
              onClick={toggleMute}
              className='mr-2 focus:outline-none cursor-pointer'
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
            >
              {isMuted ? (
                <VolumeX className='w-5 h-5 text-gray-400' />
              ) : (
                <Volume2 className='w-5 h-5' />
              )}
            </button>
            <input
              type='range'
              min='0'
              max='100'
              value={volume}
              onChange={handleVolumeChange}
              className='w-24 accent-tertiary cursor-pointer'
              aria-label='Control de volumen'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
