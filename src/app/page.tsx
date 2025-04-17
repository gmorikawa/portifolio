import Image from "next/image";

export default function Home() {
    return (
        <main id="content">
            <section id="profile-card" className="card">
                <header className="mb-6">
                    <h2 className="card-title">About me</h2>
                </header>

                <main>
                    <p className="mb-4">
                        Hello, my name is Gabriel Morikawa! Nice to meet you!
                    </p>

                    <p className="mb-4">
                        I am a software engineer very passionate about coding and technology. Professionaly, I have mainly experience in full-stack web development, but I also have experience in game and mobile development. During my journey I'd used many programming languages, databases, frameworks, tools, all just out of curiosity.
                    </p>

                    <p className="mb-4">
                        My passion about coding started when I first participated on a competitive programming contest organized locally by my university. It was so fun to compete trying to find a correct and optimized algorithm that would pass all tests cases.
                    </p>

                    <p className="mb-4">
                        I am always looking for new challenges, so if you have any interesting project in mind, feel free to reach out!
                    </p>
                </main>
            </section>
        </main >
    );
}
