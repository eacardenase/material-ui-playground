import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

export const links = [
    {
        id: 1,
        url: "/",
        text: "Inicio",
        icon: <HomeIcon />,
    },
    {
        id: 2,
        url: "/profile",
        text: "Mis Datos",
        icon: <AccountBoxIcon />,
    },
    {
        id: 3,
        url: "/new-user",
        text: "Crear Usuario",
        icon: <AddBoxIcon />,
    },
    {
        id: 4,
        url: "/new-consultant",
        text: "Crear Consultante",
        icon: <AddBoxIcon />,
    },
    {
        id: 5,
        url: "/users",
        text: "Ver Usuarios",
        icon: <ImportContactsIcon />,
    },
    {
        id: 6,
        url: "/consultants",
        text: "Ver Consultantes",
        icon: <ImportContactsIcon />,
    },
    {
        id: 7,
        url: "/logout",
        text: "Cerrar Sesión",
        icon: <LogoutIcon />,
    },
];
