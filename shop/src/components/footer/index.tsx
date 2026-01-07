import '../../styles/footer/footer.scss';

export const Footer = () => {
    const sections = [
        {
            title: "SHOP",
            links: ["PERFUME", "MAKEUP", "HOME FRAGRANCE", "HAND & BODY CARE", "BYPRODUCT™"],
        },
        {
            title: "FOLLOW US",
            links: ["INSTAGRAM", "FACEBOOK", "YOUTUBE", "PINTEREST", "LINKEDIN"],
        },
        {
            title: "CUSTOMER CARE",
            links: ["TRACK MY ORDER", "MY ACCOUNT", "SHIPPING", "RETURNS", "CONTACT"],
        },
    ];

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container__brand">
                    <h1 className="footer__container__brand__title">BYRIEDO</h1>

                    <p className="footer__container__brand__credit">© 2025 BYRIEDO</p>
                </div>

                <div className="footer__container__navigation">
                    {sections.map((section, index) => (
                        <div key={index} className="footer__container__navigation__column">
                            <h3 className="footer__container__navigation__column__title">{section.title}</h3>

                            <ul className="footer__container__navigation__column__list">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex} className="footer__container__navigation__column__list__item">
                                        <a href={`#${link}`} className="footer__container__navigation__column__list__item__link">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}