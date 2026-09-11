// the famouse dishes in the restaurant
import { Link } from "react-router-dom";
import DishCard from "../../ui/DishCard/DishCard";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

function SignatureDishes() {
    const dishes = [
        {
            id: 1,
            image: "/dishes/chkens.webp",
            name: "Grilled Chicken",
            description: "Juicy Egyptian-style grilled chicken with aromatic spices.",
            price: "18",
        },
        {
            id: 2,
            image: "/dishes/kofta.webp",
            name: "Egyptian Kofta",
            description: "Tender grilled kofta seasoned with our signature spices.",
            price: "15",
        },
        {
            id: 3,
            image: "/dishes/hawawshy.webp",
            name: "Hawawshi",
            description: "Crispy Egyptian flatbread filled with seasoned minced meat.",
            price: "12",
        },
    ];

    return (
        <section className="bg-[var(--color-bg-secondary)] px-4 py-20 sm:px-6 lg:px-8">
           

            <ScrollReveal>
                <div className="mx-auto max-w-7xl">
                
                    {/* Section Heading */}
                    <div className="mx-auto mb-12 max-w-2xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                            Our Favorites
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
                            Signature Dishes
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                            A selection of our most loved Egyptian dishes,
                            prepared fresh and served with a modern touch.
                        </p>

                    </div>

                    {/* Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {dishes.map((dish) => (
                            <DishCard
                                key={dish.id}
                                image={dish.image}
                                name={dish.name}
                                description={dish.description}
                                price={dish.price}
                            />
                        ))}

                    </div>
                    {/* View Full Menu */} 
                    <div className="mt-10 text-center"> 
                        <a href="#menu" 
                            className="w-full md:w-fit inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-7 py-3 text-sm font-semibold text-[var(--color-text)] transition hover:bg-[var(--color-primary-hover)]" >
                                View Full Menu </a> 
                                
                    </div>

                </div>
           </ScrollReveal>

        </section>
    );
}
export default SignatureDishes;