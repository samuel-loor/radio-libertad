export default function Schedule() {
  const CardSchedule = ({ time, text, special }) => {
    return (
      <div className='relative mb-8 ml-4'>
        <div className='absolute -left-12 -top-4 z-10'>
          <span className='bg-black border-2 border-tertiary text-tertiary px-2 py-1 rounded-full text-xs md:text-sm font-bold whitespace-nowrap'>
            {time}
          </span>
        </div>
        <div className='pl-6 py-4 border-l-4 border-secondary bg-opacity-30 bg-primary rounded-r transform transition-transform duration-300 hover:translate-x-1 hover:bg-opacity-50'>
          <h3 className='text-lg font-semibold'>{text}</h3>
          {special && (
            <span className='inline-block bg-yellow-500 text-black px-2 py-0.5 text-xs rounded ml-2 font-bold'>
              {special}
            </span>
          )}
        </div>
        <div className='absolute left-0 top-1/2 h-0.5 w-6 bg-secondary'></div>
      </div>
    );
  };

  return (
    <section className='bg-black py-10 px-8'>
      <div className='max-w-5xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 uppercase'>
          Nuestra Programación
          <div className='h-1 w-32 bg-gradient-to-r from-tertiary to-secondary mx-auto mt-4'></div>
        </h2>

        <div className='relative pl-2 md:pl-12 ml-6 md:ml-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-secondary'>
          <CardSchedule
            time={'05H00 - 06H00'}
            text={'LIBERTAD CON MÚSICA POPULAR'}
          ></CardSchedule>
          <CardSchedule
            time={'06H00 - 08H00'}
            text={'NOTICIERO ACTUALIDAD I'}
          ></CardSchedule>
          <CardSchedule
            time={'08H00 - 12H00'}
            text={'LOS TROPICALES DEL MOMENTO'}
          ></CardSchedule>
          <CardSchedule
            time={'12H00 - 13H00'}
            text={'LA HORA VALLENATA'}
          ></CardSchedule>
          <CardSchedule
            time={'14H30 - 15H00'}
            text={'SEMBRANDO'}
            special={'Miércoles'}
          ></CardSchedule>
          <CardSchedule
            time={'15H00 - 16H00'}
            text={'ENTRE BALADA Y SALSA'}
          ></CardSchedule>
          <CardSchedule
            time={'16H00 - 16H30'}
            text={'MÉXICO LINDO'}
          ></CardSchedule>
          <CardSchedule
            time={'16H30 - 17H00'}
            text={'ATARDECER ECUATORIANO I'}
          ></CardSchedule>
          <CardSchedule
            time={'17H00 - 18H00'}
            text={'NOTICIERO ACTUALIDAD II'}
          ></CardSchedule>
          <CardSchedule
            time={'18H00 - 19H00'}
            text={'ATARDECER ECUATORIANO II'}
          ></CardSchedule>
          <CardSchedule
            time={'19H00 - 21H00'}
            text={'LOS TROPICALES DEL MOMENTO'}
          ></CardSchedule>
          <CardSchedule
            time={'19H00 - 21H00'}
            text={'ROCKOLA DEL VIERNES'}
            special={'Viernes'}
          ></CardSchedule>
        </div>
      </div>
    </section>
  );
}
