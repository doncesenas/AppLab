import React, { useState, useEffect } from 'react';

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Simulamos que cargamos productos
        const productosMock = [
            { id: 1, nombre: 'Producto A', precio: 100 },
            { id: 2, nombre: 'Producto B', precio: 150 },
        ];
        setProductos(productosMock);
    }, []);

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Productos</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">
                Agregar producto
            </button>
            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Nombre</th>
                        <th className="border p-2">Precio</th>
                        <th className="border p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((p) => (
                        <tr key={p.id}>
                            <td className="border p-2">{p.id}</td>
                            <td className="border p-2">{p.nombre}</td>
                            <td className="border p-2">${p.precio}</td>
                            <td className="border p-2">
                                <button className="text-blue-600 mr-2">Editar</button>
                                <button className="text-red-600">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Productos;
