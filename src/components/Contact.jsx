export default function Contact() {
  return (
    <section id='contact' className='bg-black pb-24 px-4 text-white w-full'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-12 uppercase'>
          CONTÁCTANOS
          <div className='h-1 w-32 bg-gradient-to-r from-tertiary to-secondary mx-auto mt-4'></div>
        </h2>

        <div className='w-full'>
          <div className='bg-primary max-w-5xl mx-auto border-t-4 border-secondary rounded-lg shadow-lg py-10 px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-full p-4 bg-tertiary shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-tertiary mb-1'>
                      Cabina
                    </h3>
                    <a
                      href='https://api.whatsapp.com/send?phone=593993499990'
                      className='text-gray-300 hover:text-gray-500'
                      target='_blank'
                    >
                      099 349 9990
                    </a>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='rounded-full p-4 bg-tertiary shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-tertiary mb-1'>
                      Email
                    </h3>
                    <a
                      href='mailto:radiolibertad740@hotmail.com'
                      className='text-gray-300 hover:text-gray-500'
                    >
                      radiolibertad740@hotmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <div className='rounded-full p-4 bg-tertiary shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-tertiary mb-1'>
                      Dirección
                    </h3>
                    <p className='text-gray-300'>
                      Washington 203 y Atahualpa | Chone - Manabí
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-4'>
                  <div className='rounded-full p-4 bg-tertiary shadow-md'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-tertiary mb-1'>
                      Gerencia
                    </h3>
                    <p className='text-gray-300'>099 769 7184</p>
                    <p className='text-gray-300'>05 269 5411</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='max-w-4xl mx-auto mt-12 rounded-lg overflow-hidden border-t-4 border-secondary shadow-lg'>
            <div className='bg-primary p-4 text-center'>
              <h3 className='text-xl font-bold mb-2'>Nuestra ubicación</h3>
              <p className='text-gray-300'>
                Visítanos en Calle Washington, Chone, Ecuador
              </p>
            </div>
            <div className='w-full aspect-video'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.304896246114!2d-80.09472021541723!3d-0.6964425502484756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902b078e584edbef%3A0x33e6fcba16b47c14!2sRadio%20Coqueta!5e0!3m2!1ses!2sec!4v1745361207916!5m2!1ses!2sec'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Ubicación de Radio Libertad'
                className='w-full h-full'
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
