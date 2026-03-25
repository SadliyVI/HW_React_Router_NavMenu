import { NavLink } from 'react-router-dom';

interface MenuItem {
    to: string;
    label: string;
    end?: boolean;
}

const menuItems: MenuItem[] = [
    { to: '/', label: 'Главная', end: true },
    { to: '/drift', label: 'Дрифт-такси' },
    { to: '/timeattack', label: 'Time Attack' },
    { to: '/forza', label: 'Forza Karting' },
];

export default function Menu() {
    return (
        <nav className="menu">
            {menuItems.map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                        `menu__item${isActive ? ' menu__item-active' : ''}`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
}