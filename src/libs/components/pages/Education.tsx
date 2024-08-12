'use client'
import { BuildingBlock } from "../BuidlingBlock";
import { Black } from "../backgrounds/Black";
import { Box } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";
import { Fade } from "react-awesome-reveal";



//creates a simple building block that I want all my components to be inside
export function Education(){
    return (
        <Box>
    
            <Black>
                    <BuildingBlock title= "Education"
                    height={{                    
                        base:'600px',
                        sm:'600px',
                        md:'700px',
                        lg:'600px',
                        xl: '800px'}}
                    alignItems="center">
                    <Box border={'5px solid #F8E343'}
                    width={{                    
                        base:'250px',
                        sm:'500px',
                        md:'600px',
                        lg:'900px',
                        xl: '1000px'}}
                    height={{                    
                        base:'500px',
                        sm:'450px',
                        md:'500px',
                        lg:'400px',
                        xl: '400px'}}
                    borderRadius={50}
                    color={'#F8E343'}
                    paddingLeft={{
                        base:20,
                        sm:40,
                        md:40,
                        lg:40,
                        xl: 40
                    }}
                    paddingTop={20}
                    transition="all 0.3s ease-in-out"
                    _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                    }}>
                            <Box
                            fontSize={{
                                base:'1.3rem',
                                sm:'1.8rem',
                                md:'3rem',
                                lg:'3rem',
                                xl:'3rem'
                            }}
                            fontFamily={'teko'}>
                                California State University, Long Beach
                            </Box>
                            <Box
                            fontSize={{
                                base:'1.1rem',
                                sm:'1.5rem',
                                md:'1.5rem',
                                lg:'1.5rem',
                                xl:'1.5rem'
                            }}
                            fontFamily={"jockeyOne"}>
                                August 2020 - Present
                            </Box>
                            <Box
                            fontSize={{
                                base:'1rem',
                                sm:'1.5rem',
                                md:'1.8rem',
                                lg:'1.8rem',
                                xl:'1.8rem'
                            }}
                            fontFamily={"jockeyOne"}
                            display={'flex'}
                            justifyContent={'space-between'}
                            paddingRight={{               
                                    base:10,
                                    sm:40,
                                    md:80,
                                    lg:120,
                                    xl: 200}}
                            >
                                Expected Graduation Date: December 2025



                            <Box 
                            width={{        
                            base:'200px',
                            sm: '200px',
                            md: '180px',
                            lg: '120px',
                            xl: '120px',}}
                            height="auto"
                            position="relative">
                                <Image src='/csulb.png'
                                alt='tylor franca'
                                layout="responsive"
                                width={120}
                                height={120}  // Adjust this based on the aspect ratio of the image
                                objectFit="cover">
                                </Image>
                            </Box>


                            </Box>
                            <Box
                            paddingRight={40}>
                            <Box
                            fontSize={{
                                base:'1.1rem',
                                sm:'1.8rem',
                                md:'1.8rem',
                                lg:'1.8rem',
                                xl:'1.8rem'
                            }}
                            fontFamily={"jockeyOne"}
                            >
                            Relevent Coursework:
                            <Box
                                fontSize={{
                                base:'1.1rem',
                                sm:'1.2rem',
                                md:'1.2rem',
                                lg:'1.2rem',
                                xl:'1.2rem'
                            }}
                            fontFamily={"jockeyOne"}
                            >
                            Data Structures,  Embedded Systems Programming, FPGA Design, Full Stack Web Development, Object Oriented Programming, Algorithms
                            </Box>
                    
                            </Box>
                            </Box>
                    </Box>
                    </BuildingBlock>
            
            </Black>
        </Box>
    );
}