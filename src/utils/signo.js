export function calcularSigno(fecha) {
    if (!fecha) return null;
    const [y, m, d] = fecha.split("-").map(Number);
    
    if (!m || !d) return null;
    const month = m;
    const day = d;

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return { signo: "Aries", key: "aries", descripcion: "Valiente y directo." };
    if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return { signo: "Tauro", key: "tauro", descripcion: "Paciente y estable." };
    if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return { signo: "Géminis", key: "geminis", descripcion: "Curioso y comunicativo." };
    if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return { signo: "Cáncer", key: "cancer", descripcion: "Emotivo y protector." };
    if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return { signo: "Leo", key: "leo", descripcion: "Orgulloso y creativo." };
    if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return { signo: "Virgo", key: "virgo", descripcion: "Analítico y práctico." };
    if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return { signo: "Libra", key: "libra", descripcion: "Equilibrado y diplomático." };
    if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return { signo: "Escorpio", key: "escorpio", descripcion: "Intenso y decidido." };
    if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return { signo: "Sagitario", key: "sagitario", descripcion: "Optimista y aventurero." };
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return { signo: "Capricornio", key: "capricornio", descripcion: "Responsable y serio." };
    if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return { signo: "Acuario", key: "acuario", descripcion: "Original y independiente." };
    if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return { signo: "Piscis", key: "piscis", descripcion: "Soñador y empático." };

    return null;
}
