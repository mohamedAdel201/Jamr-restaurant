// short show of the main menue
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import { useState } from "react";
import DishCard from "../../UI/DishCard/DishCard";

function Menu() {
    const [activeCategory,setActiveCategory]=useState("All");
    const dishes=[
        {
            id: 1,
            image: `${import.meta.env.BASE_URL}dishes/chkens.webp`,
            name: "Grilled Chicken",
            category:"Chicken",
            description: "Juicy Egyptian-style grilled chicken with aromatic spices.",
            price: "18",
        },
        {
            id: 2,
            image: `${import.meta.env.BASE_URL}dishes/kofta.webp`,
            name: "Egyptian Kofta",
            category:"Grills",
            description: "Tender grilled kofta seasoned with our signature spices.",
            price: "15",
        },
        {
            id: 3,
            image: `${import.meta.env.BASE_URL}dishes/Griled/griiledChicken.webp`,
            name: "Chicken",
            category:"Grills",
            description: "Juicy grilled chicken marinated with aromatic Egyptian spices",
            price: "25",
        },
        {
            id: 4,
            image: `${import.meta.env.BASE_URL}dishes/Griled/meat.webp`,
            name: "Meat",
            category:"Grills",
            description: "Tender grilled meat seasoned with rich Egyptian spices",
            price: "30",
        },
        {
            id: 5,
            image: `${import.meta.env.BASE_URL}dishes/hawawshy.webp`,
            name: "Egyptian",
            category:"Egyptian",
            description: "Crispy Egyptian flatbread filled with seasoned minced meat.",
            price: "12",
        },
        {
            id: 6,
            image: `${import.meta.env.BASE_URL}dishes/Griled/griiledChicken.webp`,
            name: "Chiken",
            category:"Chicken",
            description: "Juicy grilled chicken marinated with aromatic Egyptian spices",
            price: "15",
        },
        {
            id: 7,
            image: `${import.meta.env.BASE_URL}dishes/soup/soup.webp`,
            name: "Soups",
            category:"Soups",
            description: "Warm Egyptian lentil soup with aromatic spices",
            price: "5",
        },
        {
            id: 8,
            image: `${import.meta.env.BASE_URL}dishes/soup/mlokya.webp`,
            name: "Molokhia",
            category:"Soups",
            description: "Classic Egyptian molokhia with garlic and herbs",
            price: "5",
        },
        {
            id: 9,
            image: `${import.meta.env.BASE_URL}dishes/sides/rice.webp`,
            name: "Rice",
            category:"Sides",
            description: "Fluffy Egyptian rice seasoned with aromatic spices",
            price: "5",
        },
        {
            id: 10,
            image: `${import.meta.env.BASE_URL}dishes/sides/tahena.webp`,
            name: "Tahini",
            category:"Sides",
            description: "Creamy tahini sauce with a rich, nutty flavor",
            price: "2",
        },
        
    ]
    const filteredDishes  = dishes.filter((dish)=>{
        return activeCategory ==="All"  || dish.category === activeCategory;
    })
    const CategoryButtons = [
        {
            id:0,
            name :"All"
        },
        {
            id:1,
            name :"Grills"
        },
        {
            id:2,
            name :"Chicken"
        },
        {
            id:3,
            name :"Egyptian"
        },
        {
            id:4,
            name :"Sides"
        
        },
        {
            id:5,
            name :"Soups"
        }]
        
    return (
        <section
            id="menu"
            className="bg-[var(--color-bg)] px-4 py-20 sm:px-6 lg:px-8" >
            <ScrollReveal>
                <div className="mx-auto max-w-7xl">

                    {/* Section Heading */}
                    <div className="mx-auto mb-12 max-w-2xl text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                            Our Menu
                        </span>

                        <h2 className="mt-3 text-3xl font-extrabold text-[var(--color-text)] sm:text-4xl">
                            Explore Our Menu
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                            Discover our selection of authentic Egyptian dishes,
                            grilled fresh and prepared with care.
                        </p>

                    </div>


                    {/* Categories */}
                    <div className="mb-10 flex flex-wrap justify-center gap-3">
                        {
                            CategoryButtons.map((item)=>{
                                return(
                                    <button
                                    key={item.id}
                                        onClick={()=>{setActiveCategory(item.name)}} 
                                        type="button"
                                        className={( activeCategory === item.name  )?"rounded-full cursor-pointer bg-[var(--color-primary)] px-5 py-2 text-sm font-semibold text-[var(--color-text)]"
                                        :"rounded-full cursor-pointer border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"}>
                                        {item.name}
                                    </button>
                                )
                            })
                        }


                    </div>


                    {/* Dishes */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            filteredDishes.map((dish)=>{
                                return(
                                    <DishCard
                                    key={dish.id}
                                        image={dish.image}
                                        name={dish.name}
                                        description={dish.description}
                                        price={dish.price} />
                                )
                            })
                        }


                    </div>

                </div>
            </ScrollReveal>
        </section>
    );
}

export default Menu;

