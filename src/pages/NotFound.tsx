import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <section className="page">
            <h1 className="page__title">404 — Страница не найдена</h1>
            <p className="page__text">Такого маршрута не существует.</p>
            <Link className="home-link" to="/">
                На главную
            </Link>
        </section>
    );
}