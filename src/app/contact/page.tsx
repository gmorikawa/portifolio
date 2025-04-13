import Image from "next/image";

export default function Contact() {
    return (
        <main id="content">
            <section id="business-card" className="card">
                <header>
                    <h2 className="card-title">Gabriel Morikawa</h2>
                    <h3 className="card-subtitle">Software Developer</h3>
                </header>

                <footer>
                    <ul className="list list-icon-text">
                        <li className="list-item">
                            <Image src="https://s.magecdn.com/social/mb-mail.svg" width={13} height={13} alt="mail icon" />
                            <p>gabriel.morikawa@live.com</p>
                        </li>

                        <li className="list-item">
                            <Image src="https://s.magecdn.com/social/tc-linkedin.svg" width={13} height={13} alt="linkedin icon" />
                            <p>linkedin.com/in/gmorikawa</p>
                        </li>

                        <li className="list-item">
                            <Image unoptimized src="https://cdn.simpleicons.org/github/181717" width={13} height={13} alt="github icon" />
                            <p>github.com/gmorikawa</p>
                        </li>
                    </ul>
                </footer>
            </section>
        </main>
    );
}

