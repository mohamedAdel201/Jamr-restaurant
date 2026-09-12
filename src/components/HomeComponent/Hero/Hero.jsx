// first thing the client see it
import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[var(--color-bg)]">
            <div className="absolute inset-0 md:hidden">
                <img
                    src={`${import.meta.env.BASE_URL}chiken.webp`}
                    alt=""
                    className="h-full w-full object-cover"
                    fetchPriority="high" />

                <div className="absolute inset-0 bg-black/60"></div>
            </div>
            <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-6 sm:px-6 lg:px-8">

                <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

                    {/* Content */}
                    <div className="text-center lg:text-start relative z-10">

                        <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] sm:text-base">
                            Modern Egyptian Grill
                        </span>

                        <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                            Authentic Egyptian
                            <span className="block text-[var(--color-primary)]">
                                Taste, Modern Soul
                            </span>
                        </h1>

                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg lg:mx-0">
                            Discover the rich flavors of Egyptian cuisine,
                            freshly grilled and served with a modern touch.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

                            <a
                                href="#menu"
                                className="rounded-full bg-[var(--color-primary)] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
                            >
                                Explore Menu
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-[var(--color-accent)] px-7 py-3.5 text-sm font-semibold text-[var(--color-accent)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)]"
                            >
                                Reserve a Table
                            </a>

                        </div>

                    </div>


                    {/* Image */}
                    <div className=" relative mx-auto hidden w-full max-w-xl lg:max-w-none md:block">

                        <div className="absolute -inset-4 rounded-full bg-[var(--color-primary)]/10 blur-3xl"></div>

                        <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)]">
                            <img
                                src={`${import.meta.env.BASE_URL}chiken.webp`} 
                                alt="Egyptian grilled dish"
                                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[550px]"
                                fetchPriority="high" />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;

