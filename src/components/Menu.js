import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
const menuItems = [
    { to: '/', label: 'Главная', end: true },
    { to: '/drift', label: 'Дрифт-такси' },
    { to: '/timeattack', label: 'Time Attack' },
    { to: '/forza', label: 'Forza Karting' },
];
export default function Menu() {
    return (_jsx("nav", { className: "menu", children: menuItems.map((item) => (_jsx(NavLink, { to: item.to, end: item.end, className: ({ isActive }) => `menu__item${isActive ? ' menu__item-active' : ''}`, children: item.label }, item.to))) }));
}
