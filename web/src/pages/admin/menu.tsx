import { NavbarItem } from "../../components/environment/navbar/types";

export const mainMenu: NavbarItem[] = [
    { path: '/admin', title: 'Dashboard' },
    { path: '/admin/lancamentos/', title: 'Lançamentos' },
    { path: '/admin/lancamentos/adicionar', title: 'Novo lançamento' }
]