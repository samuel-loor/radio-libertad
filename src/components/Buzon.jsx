import { useState } from 'react';

export default function Buzon() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    mensaje: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        'http://radiolibertad740am.com/guardar_mensaje.php',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000);
        setFormData({ nombre: '', apellido: '', email: '', mensaje: '' });
      } else {
        alert('Error al enviar el mensaje ❌');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section class='bg-black py-16 px-4 text-white w-full'>
      <div class='max-w-6xl mx-auto'>
        <h2 class='text-3xl font-bold text-center mb-12 uppercase'>
          BUZÓN
          <div class='h-1 w-32 bg-gradient-to-r from-tertiary to-secondary mx-auto mt-4'></div>
        </h2>
        <div className=' max-w-5xl mx-auto bg-primary border-t-4 border-secondary rounded-lg p-4'>
          <form
            onSubmit={handleSubmit}
            className='max-w-5xl mx-auto bg-primary  p-6'
          >
            <div className='flex flex-col md:flex-row md:gap-10'>
              <div className='flex flex-col gap-4 md:w-1/2 items-center md:items-stretch'>
                <input
                  className='w-full max-w-sm border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-tertiary bg-black text-white placeholder-gray-400'
                  type='text'
                  name='nombre'
                  placeholder='Nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <input
                  className='w-full max-w-sm border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-tertiary bg-black text-white placeholder-gray-400'
                  type='text'
                  name='apellido'
                  placeholder='Apellido'
                  value={formData.apellido}
                  onChange={handleChange}
                />
                <input
                  className='w-full max-w-sm border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-tertiary bg-black text-white placeholder-gray-400'
                  type='email'
                  name='email'
                  placeholder='Correo electrónico'
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className='md:w-1/2 mt-6 md:mt-0 flex justify-center md:justify-start'>
                <textarea
                  className='w-full max-w-sm md:max-w-full min-h-40 border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:border-tertiary bg-black text-white placeholder-gray-400'
                  name='mensaje'
                  placeholder='Escribe Tu Mensaje'
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <div className='flex justify-center mt-10'>
              <button
                type='submit'
                className='py-3 px-8 rounded-lg bg-secondary hover:bg-emerald-900 border border-primary text-white font-semibold cursor-pointer'
              >
                Enviar
              </button>
            </div>

            {showModal && (
              <div className='mt-4 text-center text-green-400 font-medium'>
                ✅ Mensaje enviado con éxito
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
