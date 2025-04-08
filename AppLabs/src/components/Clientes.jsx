import React, { useState } from 'react';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState({ nombre: '', telefono: '', email: '' });

  const handleInputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleAddCliente = () => {
    if (cliente.nombre && cliente.telefono && cliente.email) {
      setClientes([...clientes, cliente]);
      setCliente({ nombre: '', telefono: '', email: '' }); // Reset input fields
    }
  };

  const handleDeleteCliente = (index) => {
    setClientes(clientes.filter((_, i) => i !== index));
  };

  const handleEditCliente = (index) => {
    setCliente(clientes[index]);
    handleDeleteCliente(index); // Remove the old one
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Módulo de Clientes</h1>
      
      {/* Formulario para agregar o editar cliente */}
      <div className="mb-4">
        <input
          type="text"
          name="nombre"
          value={cliente.nombre}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
          placeholder="Nombre"
        />
        <input
          type="text"
          name="telefono"
          value={cliente.telefono}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
          placeholder="Teléfono"
        />
        <input
          type="email"
          name="email"
          value={cliente.email}
          onChange={handleInputChange}
          className="border p-2 rounded mr-2"
          placeholder="Correo Electrónico"
        />
        <button
          onClick={handleAddCliente}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {cliente.nombre ? 'Actualizar Cliente' : 'Agregar Cliente'}
        </button>
      </div>

      {/* Lista de Clientes */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Lista de Clientes</h2>
        <ul className="space-y-2">
          {clientes.map((cliente, index) => (
            <li key={index} className="flex justify-between items-center border p-2 rounded">
              <span>{cliente.nombre} - {cliente.telefono} - {cliente.email}</span>
              <div>
                <button
                  onClick={() => handleEditCliente(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteCliente(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Clientes;
