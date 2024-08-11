
'use client'
import { Box } from "panda";
import Lottie from 'react-lottie-player/dist/LottiePlayerLight';
import Link from "next/link";

interface MyLinksProps{
    width:number
    height:number
    animationData:object
    description:string
    bgColor :string
    href:string
    border?:string
}

export function MyLinks({width, height, animationData, description, bgColor ,href, border}:MyLinksProps){



    return(
            <Box               
            display={'flex'}
            flexDirection={'row'}>
                
                <Link href={href} target="blank">
                    <Box
                    border={border}
                    width='1000px'
                    height='200px'
                    borderRadius={50}
                    color={'black'}
                    bgColor={bgColor}
                    paddingLeft={40}
                    paddingTop={20}
                    fontWeight={'bold'}
                    transition="all 0.3s ease-in-out"
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    fontSize={'2.5rem'}
                    _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                    }}>
                    {description}
                    
                    <Box
                    width="200px"
                    height="200px"
                    borderRadius={'50%'}
                    marginX={30}
                    marginY={10}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}>
                    
                    <Lottie
                        loop={true}  // Set to true if you want the animation to loop
                        animationData={animationData}  // Your Lottie JSON data
                        play={true}   // Controls whether the animation plays
                        style={{ width: width, height: height }}
                    />
                    </Box>
                    </Box>
                </Link>
            </Box>


    );
}