export default function ModalRendicion({ onClose }) {
  const documentos = [
    {
      title: 'Año ',
      año: 2023,
      url: '/document/rendicion-cuentas-libertad-2023.pdf',
    },
    {
      title: 'Año ',
      año: 2022,
      url: '/document/rendicion-cuentas-libertad-2023.pdf',
    },
    {
      title: 'Año ',
      año: 2021,
      url: '/document/rendicion-cuentas-libertad-2023.pdf',
    },
  ];

  return (
    <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
      <div className='bg-primary rounded-xl shadow-lg max-w-md w-full p-6 relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-3 text-xl font-bold cursor-pointer'
        >
          ✕
        </button>
        <h2 className='text-lg text-white font-semibold mb-4 text-center'>
          Rendición de Cuentas
        </h2>
        <ul className='space-y-3'>
          {documentos.map((doc) => (
            <li key={doc.año} className='flex justify-between items-center'>
              <span>{doc.año}</span>
              <div className='space-x-2 flex gap-4'>
                <a
                  href={doc.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 underline'
                >
                  Ver
                </a>
                <a href={doc.url} download className='text-green-600 underline'>
                  Descargar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
