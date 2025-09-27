import React, { useEffect, useState } from "react";

export default function Resultado({ data }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (data) setVisible(true);
        else setVisible(false);
    }, [data]);

    if (!data) return <div className="placeholder">Ingresa datos y presiona Calcular.</div>;
    if (data.error) return <div className="error">{data.error}</div>;

    const { nombre, signo, key, descripcion } = data;

    return (
        <div className={`resultado ${visible ? "fade-in" : ""}`}>
            <h2>Tu signo es: {signo}</h2>
            <div className="img-wrap">
                <img
                    src={`/signos/${key}.png`}
                    alt={signo}
                    onError={(e) => (e.target.style.display = "none")}
                />
            </div>
            <p><strong>{nombre}:</strong> {descripcion}</p>
        </div>
    );
}
