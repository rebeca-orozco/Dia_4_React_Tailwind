import { useState } from 'react';

function Formulario() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    fecha: '',
    mensaje: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert('Formulario enviado correctamente');
    setForm({
      nombre: '',
      correo: '',
      fecha: '',
      mensaje: '',
    });
  };

  return (
    <div className="w-[420px] max-w-md bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-[#4A9DAE] mb-4">
          Formulario para contacto
        </h2>
        <div>
          <label className="block text-gray-700 text-sm font-medium">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77CBDA] focus:border-transparent"
            placeholder="Ingrese su nombre completo"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77CBDA] focus:border-transparent"
            placeholder="Ingrese su correo electrónico"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium">Fecha de nacimiento</label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77CBDA] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-medium">Mensaje</label>
          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={3}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77CBDA] focus:border-transparent"
            placeholder="Escriba su mensaje"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#77CBDA] text-white font-medium py-2 rounded-lg hover:bg-[#4A9DAE] transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Formulario;
