
'use client'
import { Box } from "panda";
import Lottie from 'react-lottie-player';
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
                    width={{
                        base:'200px',
                        sm:'500px',
                        md:'600px',
                        lg:'900px',
                        xl:'1000px'
                    }}
                    height={{
                        base:'130px',
                        sm:'150px',
                        md:'150px',
                        lg:'200px',
                        xl:'200px' 
                    }}
                    borderRadius={50}
                    color={'black'}
                    bgColor={bgColor}
                    fontWeight={'bold'}
                    transition="all 0.3s ease-in-out"
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={{
                        base:'center',
                        sm:'space-around'
                    }}
                    fontSize={{
                        base:'0.7rem',
                        sm:'1.2rem',
                        md:'1.5rem',
                        lg:'2.5rem',
                        xl:'2.5rem'
                    }}
                    flexDirection={{
                        base:'column-reverse',
                        sm:'row-reverse'
                    }}
                    _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                    }}>
                    {description}
                    
                    <Box
                    width={{
                        base:'60px',
                        sm:'100px',
                        md:'100px',
                        lg:'150px',
                        xl:'200px'
                    }}
                    height={{
                        base:'60px',
                        sm:'100px',
                        md:'100px',
                        lg:'150px',
                        xl:'200px'
                    }}
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