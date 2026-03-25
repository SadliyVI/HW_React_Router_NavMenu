interface PageLayoutProps {
    title: string;
    text: string;
}

export default function PageLayout({ title, text }: PageLayoutProps) {
    return (
        <section className="page">
            <h1 className="page__title">{title}</h1>
            <p className="page__text">{text}</p>
        </section>
    );
}