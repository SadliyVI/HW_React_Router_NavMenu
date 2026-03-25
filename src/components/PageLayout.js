import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function PageLayout({ title, text }) {
    return (_jsxs("section", { className: "page", children: [_jsx("h1", { className: "page__title", children: title }), _jsx("p", { className: "page__text", children: text })] }));
}
