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
                    height='800px'
                    alignItems="center">
                    <Box border={'5px solid #F8E343'}
                    width='1000px'
                    height='400px'
                    borderRadius={50}
                    color={'#F8E343'}
                    paddingLeft={40}
                    paddingTop={20}
                    transition="all 0.3s ease-in-out"
                    _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                    }}>
                            <Box
                            fontSize="3rem"
                            fontFamily={'teko'}>
                                California State University, Long Beach
                            </Box>
                            <Box
                            fontSize="1.5rem"
                            fontFamily={"jockeyOne"}>
                                August 2020 - Present
                            </Box>
                            <Box
                            fontSize="1.5rem"
                            fontFamily={"jockeyOne"}
                            display={'flex'}
                            justifyContent={'space-between'}
                            paddingRight={150}
                    
                    
                            >
                                Expected Graduation Date: December 2025
                            <Image src='/csulb.png'
                            alt='tylor franca'
                            width={120}
                            height={120}>
                            </Image>
                            </Box>
                            <Box
                            paddingRight={40}>
                            <Box
                            fontSize="1.8rem"
                            fontFamily={"jockeyOne"}
                            >
                            Relevent Coursework:
                            <Box
                            fontSize="1.2rem"
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