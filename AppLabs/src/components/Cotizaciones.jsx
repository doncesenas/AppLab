// src/components/Cotizaciones.jsx
import { useState } from 'react';

export default function Cotizaciones() {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [form, setForm] = useState({
    cliente: '',
    servicio: '',
    monto: '',
    fecha: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const agregarCotizacion = (e) => {
    e.preventDefault();
    if (!form.cliente || !form.servicio || !form.monto) return;

    const nueva = { ...form, estado: 'Pendiente', id: Date.now() };
    setCotizaciones([nueva, ...cotizaciones]);
    setForm({ cliente: '', servicio: '', monto: '', fecha: '' });
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cotizaciones</h1>

      <form onSubmit={agregarCotizacion} className="grid gap-4 bg-white p-4 shadow rounded mb-6">
        <input
          type="text"
          name="cliente"
          placeholder="Nombre del cliente"
          value={form.cliente}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="servicio"
          placeholder="Descripción del servicio"
          value={form.servicio}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="monto"
          placeholder="Monto"
          value={form.monto}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Guardar Cotización
        </button>
      </form>

      <div className="space-y-4">
        {cotizaciones.map((cot) => (
          <div key={cot.id} className="border p-4 rounded shadow bg-gray-50">
            <h2 className="font-semibold">{cot.cliente}</h2>
            <p className="text-sm">{cot.servicio}</p>
            <p className="text-sm">Monto: ${cot.monto}</p>
            <p className="text-sm">Fecha: {cot.fecha || 'No asignada'}</p>
            <span className="inline-block px-3 py-1 mt-2 text-xs rounded-full bg-yellow-200 text-yellow-800">
              {cot.estado}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
