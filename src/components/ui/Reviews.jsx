import * as React from "react"
import { RiDoubleQuotesL } from "react-icons/ri";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function Reviews() {

    const reviews = [
        "Amazing flavors! The food was fresh and absolutely delicious.",
        "The service was fantastic, and the ambiance was perfect.",
        "A must-visit for food lovers! Every dish was a hit.",
        "Incredible dining experience. I can't wait to come back!",
        "The desserts here are to die for. Highly recommend!"
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between">

            <div className="md:w-1/2 items-center py-3 px-8 border-l-[10px]">
                <p className="text-secondary">
                Discover what our community is saying by visiting our Reviews section! Whether you're looking for the best dishes, top-rated restaurants, or hidden culinary gems, our reviews offer insights and recommendations from fellow food lovers. Your next great meal could be just a click away—read our reviews and join the conversation to make your dining experience even more delightful!
                </p>
            </div>
            <Carousel
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm"
            >
            <CarouselContent>
            {reviews.map((review, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center w-auto h-auto md:p-6">
                                <div className="flex flex-col">
                                    <span className="text-red"><RiDoubleQuotesL /></span>
                                    <span className="text-center text-lg">{review}</span>
                                </div>
                                
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
        </div>
       
    )
}
