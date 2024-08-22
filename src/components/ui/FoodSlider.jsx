"use client"
import { useEffect, useState } from "react"
import { divData } from "./Data"

export default function FoodSlider() {

    const [currentPage, setCurrentPage] = useState(0)
    const [slidesToShow, setSlidesToShow] = useState(3)

    const nextSlide = () => {
        if (currentPage < Math.ceil(divData.length / slidesToShow) - 1)
            setCurrentPage(prev => prev + 1)
    }

    const prevSlide = () => {
        if (currentPage > 0)
            setCurrentPage(prev => prev - 1)
    }

    const goToNextSlide = (index) => {
        setCurrentPage(index)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesToShow(1)
            } else {
                setSlidesToShow(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const start = currentPage * slidesToShow
    const end = start + slidesToShow
    const visibleSlides = divData.slice(start, end)

    return (
        <div className='relative flex md:justify-around justify-center  '>

            <div>
                <h1 className='text-primary hidden md:flex items-start md:text-4xl '>MENU THAT MAKES <br /> YOU FALL IN LOVE</h1>
            </div>
            {visibleSlides.map((item, index) => (
                <div key={index} className='animate-slideIn md:w-[220px] w-[250px] h-auto flex flex-col p-0 space-y-2  rounded-2xl shadow-2xl px-3 py-2'>
                    <div className='flex flex-row items-center'>
                        <img src={item.image} className='w-40 h-40 ' />
                        <span className='text-black text-2xl'>{item.price}</span>
                    </div>
                    <h1 className='text-primary text-2xl'>{item.title}</h1>
                    <p className='text-black'>{item.prepTime}</p>
                </div>
            ))}

            <div className="mt-[280px] absolute items-bottom">
                {Array.from({ length: Math.ceil(divData.length / slidesToShow) }).map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-2 h-2 mx-2 rounded-full ${currentPage === index ? 'bg-red' : 'bg-primary'} cursor-pointer`}
                        onClick={() => goToNextSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
