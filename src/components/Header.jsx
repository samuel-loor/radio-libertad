import { useState, useEffect } from 'react';
import ModalRendicion from './ModalRendicion';
export default function Header() {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (open) setOpen(false);
    };

    const handleClickOutside = (event) => {
      const nav = document.querySelector('nav');
      const button = document.querySelector('button');
      if (
        nav &&
        button &&
        open &&
        !nav.contains(event.target) &&
        !button.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  return (
    <header className='bg-primary p-2 md:px-8 flex items-center justify-between relative'>
      <h1 className='text-xl font-bold text-white'>Radio Libertad</h1>

      <button
        onClick={() => setOpen(!open)}
        className='md:hidden flex items-center focus:outline-none text-white cursor-pointer'
        aria-label='Menú'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-8'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </button>

      <nav
        className={`${
          open ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row md:items-center gap-6 text-sm font-medium absolute md:static bg-primary w-full left-0 top-full md:w-auto md:bg-transparent p-5 md:p-0 transition-all duration-300 z-50 text-white`}
      >
        <ul className='flex flex-col md:flex-row gap-5'>
          <li>
            <a
              onClick={() => setShowModal(true)}
              className='text-sm sm:text-base md:text-lg block hover:text-gray-300 py-2 cursor-pointer'
            >
              Rendición de cuentas
            </a>
          </li>
          <li>
            <a
              className='text-sm sm:text-base md:text-lg block hover:text-gray-300 py-2'
              href='/document/codigo-etica-2024.pdf'
              target='__blank'
            >
              Código de Ética
            </a>
          </li>
          <li>
            <a
              className='text-sm sm:text-base md:text-lg block hover:text-gray-300 py-2'
              href='#contact'
            >
              Contáctanos
            </a>
          </li>
        </ul>
      </nav>

      {showModal && <ModalRendicion onClose={() => setShowModal(false)} />}
    </header>
  );
}
