import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Drift from './pages/Drift';
import TimeAttack from './pages/TimeAttack';
import Forza from './pages/Forza';
import NotFound from './pages/NotFound';
export default function App() {
    return (_jsxs("div", { className: "app", children: [_jsx("header", { className: "app__header", children: _jsx(Menu, {}) }), _jsx("main", { className: "app__content", children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/drift", element: _jsx(Drift, {}) }), _jsx(Route, { path: "/timeattack", element: _jsx(TimeAttack, {}) }), _jsx(Route, { path: "/forza", element: _jsx(Forza, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) })] }));
}
