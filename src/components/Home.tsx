import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Home: React.FC = () => {
    const [showInfo, setShowInfo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowInfo(false);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    const infoItems = [
        {
            title: "Contact Information",
            content: "Phone: +56912345678, Address: Tennis Club, Main Street 123",
            imageUrl: "/images/contact-info.jpg"
        },
        {
            title: "Court Schedulers",
            content: "Use our app to schedule your court times!",
            imageUrl: "/images/court-scheduler.jpg"
        },
        {
            title: "Player Rankings",
            content: "Don't forget to update your ranking after each match.",
            imageUrl: "/images/player-rankings.jpg"
        }
    ];

    return (
        <div className="text-center">
            <h4 className="text-xl font-semibold my-5">Welcome to Tennis Club</h4>

            <Carousel
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false} // Hide the status indicator
                showIndicators={true} // Control the presence of navigation dots
                interval={5000} // Adjust the timing between slides
                className="relative w-full max-w-screen-lg mx-auto"
            >
                {infoItems.map((item, index) => (
                    <div
                        key={index}
                        className="relative h-[400px] md:h-[500px] lg:h-[600px] flex flex-col items-center justify-center"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.title}
                            style={{
                                objectFit: 'cover',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                zIndex: -1,
                            }}
                        />
                        <div
                            className="relative mt-56 md:mt-64 lg:mt-80 text-white bg-black bg-opacity-75 px-4 py-3 md:px-6 lg:px-8 rounded-md text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[50%]">
                            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold">{item.title}</h2>
                            <p className="text-sm md:text-lg lg:text-xl">{item.content}</p>
                        </div>

                    </div>
                ))}
            </Carousel>

            {showInfo && (
                <div className="mt-5 bg-yellow-300 text-black px-4 py-3 text-sm md:text-lg font-medium animate-bounce">
                    Important: Please follow all club rules and respect others!
                </div>
            )}
        </div>
    );
};

export default Home;
