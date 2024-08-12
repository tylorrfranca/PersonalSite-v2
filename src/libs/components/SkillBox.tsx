
'use client'
import React, { useState, useEffect, useRef  } from "react";
import { Box } from "panda";
import Image from "next/image";
import Lottie from 'react-lottie-player';

interface SkillBoxProps{
    width:number
    height:number
    animationData:object
    title:string
}

export function SkillBox({width, height, animationData, title}:SkillBoxProps){
    const [flag, setFlag] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null); // Reference to the Box element

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setFlag(true); // Play animation when the Box is visible
                        observer.unobserve(entry.target); // Stop observing once the animation is triggered
                    }
                });
            },
            {
                threshold: .7, // Adjust threshold as needed
            }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current); // Start observing the Box element
        }

        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current); // Clean up observer on unmount
            }
        };
    }, []);


    return(
            <Box         
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            fontSize={'1.8rem'}
            fontWeight={'bold'}
            transition="all 0.3s ease-in-out"
            _hover={{
                transform: 'scale(1.2)', // Scale the entire component on hover
            }}>
                <Box
                ref={boxRef} // Attach the ref to the Box component
                width={{
                    base:'150px',
                    sm:'180px',
                    md:'180px',
                    lg:'200px',
                    xl:'200px'
                }}
                height={{
                    base:'150px',
                    sm:'180px',
                    md:'180px',
                    lg:'200px',
                    xl:'200px'
                }}
                bgColor={'#000000'}
                borderRadius={'50%'}
                marginX={40}
                marginY={10}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                
                <Lottie
                    loop={false}  // Set to true if you want the animation to loop
                    animationData={animationData}  // Your Lottie JSON data
                    play={flag}   // Controls whether the animation plays
                    style={{ width: width, height: height }}
                />
                </Box>
                {title}
            </Box>


    );
}