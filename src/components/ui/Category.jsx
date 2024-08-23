"use client"
import React, { useState, useEffect } from 'react';
import { dataCategory } from './DataCategory';
import AOS from 'aos'
import 'aos/dist/aos.css'


export default function Home() {
    // Filter out unique categories for the filter buttons

    useEffect(() => {
        AOS.init({ duration: 1000 })
    })
    const categories = [...new Set(dataCategory.map(item => item.category))];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    return (
        <main className=" py-8">
            <div className="flex flex-row md:space-x-20 justify-between flex-grow">

                {/* Category Filters */}
                <div className="md:w-1/4 flex gap-1 space-x-1 flex-col space-y-4 " data-aos="fade-right">
                    {categories.map((category) => {
                        const IconComponent = dataCategory.find(item => item.category === category)?.icon;
                        return (
                            <div key={category} className='space-y-4 md:rounded-full  rounded-full shadow-xl md:shadow-md py-2 px-3 bg-white justify-center flex'>

                                <button

                                    onClick={() => setSelectedCategory(category)}
                                    className="flex items-center md:justify-start bg-white text-center bg-white"
                                >
                                    <IconComponent className="text-2xl md:text-3xl text-red" />
                                    <span className="hidden md:inline-block ml-2 text-lg capitalize bg-white">{category}</span>
                                </button>
                            </div>

                        );
                    })}
                </div>

                {/* Selected Category Content */}
                <div className="md:w-3/4 w-full grid md:grid-cols-3 items-center space-x-4 " data-aos="fade-left">
                    {dataCategory
                        .filter(item => item.category === selectedCategory)
                        .map(item => (
                            <div key={item.id} className="mb-8 text-center bg-brown py-2 px-3 rounded-xl shadow-2xl shadow-brown/30 flex flex-col items-center md:w-auto md:h-auto">
                                <img src={item.image} alt={item.title} className="md:w-40 md:h-40 w-20 h-20  bg-brown object-center " />
                                <h2 className="text-2xl font-bold mt-4 bg-brown text-white">{item.title}</h2>
                                <p className=" mt-2 bg-brown text-white">| {item.price}</p>
                            </div>
                        ))}
                </div>

            </div>
        </main>
    );
}
