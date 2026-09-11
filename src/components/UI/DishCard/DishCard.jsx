function DishCard({ image, name, description, price }) {
    return (
        <article className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]">

            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Price */}
                <span className="absolute bottom-4 right-4 rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-sm font-bold text-white">
                    ${price}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--color-text)]">
                    {name}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    {description}
                </p>
            </div>
            

        </article>
    );
}

export default DishCard;