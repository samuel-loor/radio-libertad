export default function Hosts() {
  const CardHost = ({ name, image, programs = [] }) => {
    return (
      <div className='bg-primary rounded-lg overflow-hidden shadow-lg border-t-4 border-secondary'>
        <div className='px-6 py-8'>
          <div className='flex items-center mb-6'>
            <div className='w-20 h-20 rounded-full overflow-hidden mr-4 border-3 border-secondary'>
              <img
                src={image}
                alt={name}
                className='w-full h-full object-cover'
              />
            </div>
            <h3 className='text-xl font-bold'>{name}</h3>
          </div>

          <div className='space-y-4'>
            {programs.length > 0 ? (
              programs.map((program, idx) => (
                <div key={idx} className='border-l-2 border-tertiary pl-4'>
                  <h4 className='font-bold text-tertiary'>{program.name}</h4>
                  <p className='text-sm text-gray-300'>{program.schedule}</p>
                </div>
              ))
            ) : (
              <p className='text-gray-400 italic'>Sin programas asignados</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section class='bg-black  px-4 text-white'>
      <div class='max-w-[30rem] md:max-w-6xl mx-auto'>
        <h2 class='text-3xl font-bold text-center mb-12 uppercase'>
          LOCUTORES
          <div class='h-1 w-32 bg-gradient-to-r from-tertiary to-secondary mx-auto mt-4'></div>
        </h2>

        <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <CardHost
            name={'Bismarck Cevallos'}
            image={'/img-hosts/bismarck-cevallos.webp'}
            programs={[
              {
                name: 'Entre Balada y Salsa',
                schedule: 'Lunes a Viernes de 15h00 - 16h00',
              },
              {
                name: 'Rockola de Viernes',
                schedule: 'Todos los Viernes de 19h00 - 21h00',
              },
            ]}
          />
          <CardHost
            name='Victor Loor'
            image='/img-hosts/victor-loor.webp'
            programs={[
              {
                name: 'México Lindo',
                schedule: 'Lunes a Viernes 16h00 - 16h30',
              },
              {
                name: 'Atardecer Ecuatoriano I',
                schedule: 'Lunes a Viernes 16h30 - 17h00',
              },
              {
                name: 'Atardecer Ecuatoriano II',
                schedule: 'Lunes a Viernes 18h00 - 19h00',
              },
              { name: 'Fin de Semana', schedule: 'Sábados de 08h00 - 11h00' },
            ]}
          />

          <CardHost
            name='Edison Acosta'
            image='/img-hosts/edison-acosta.webp'
            programs={[
              {
                name: 'Noticiero Actualidad I',
                schedule: 'Lunes a Viernes 06h00 - 08h00',
              },
            ]}
          />

          <CardHost
            name='Jimy Rivas'
            image='/img-hosts/usuario.webp'
            programs={[
              {
                name: 'Los tropicales del momento',
                schedule: 'Lunes a Viernes 08h00 - 12h00',
              },
            ]}
          />

          <CardHost
            name='Jhonny Manzaba'
            image='/img-hosts/usuario.webp'
            programs={[
              {
                name: 'Fin de Semana',
                schedule: 'Sábados de 11h00 a 13h00 y de 15h00 a 17h00',
              },
            ]}
          />

          <CardHost
            name='Hugo Vélez'
            image='/img-hosts/usuario.webp'
            programs={[
              { name: 'Fin de Semana', schedule: 'Sábados de 07h00 - 08h00' },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
