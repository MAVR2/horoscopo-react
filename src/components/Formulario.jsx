import React, { useState } from "react";

export default function Formulario({ onCalcular }) {
    const [nombre, setNombre] = useState("");
    const [fecha, setFecha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !fecha) return;
        onCalcular({ nombre: nombre.trim(), fecha });
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Nombre</label>
            <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Carlos"
                required
            />

            <label>Fecha de nacimiento</label>
            <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
            />

            <button type="submit">Calcular</button>
        </form>
    );
}
