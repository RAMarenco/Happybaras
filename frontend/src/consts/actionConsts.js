const ADMINACTIONS = [
    {
        name: "Usuarios", 
        link: "./users",
    },
    {
        name: "Residencias", 
        link: "./houses",
    },
    {
        name: "Reportes", 
        link: "./reports",
    },
];

const RESIDENTACTIONS = [
    {
        name: "Visitas", 
        link: "/",
    },
    {
        name: "Historial", 
        link: "/",
    },
    {
        name: "Miembros", 
        link: "./members",
    },
];

const ENCARGADOACTIONS = [
    { 
        name: "Visitas",
        link: "/" 
    },
    { 
        name: "Historial",
        link: "/" 
    },
    { 
        name: "Miembros", 
        link: "./members" 
    },
    { 
        name: "Solicitudes", 
        link: "./requests" 
    },
];

export { ADMINACTIONS, ENCARGADOACTIONS, RESIDENTACTIONS };
