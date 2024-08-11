import { BuildingBlock } from "../BuidlingBlock";
import { Grey } from "../backgrounds/Grey";
import { Box } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";




//creates a simple building block that I want all my components to be inside
export function WorkExperince(){
    return (
        <Box>
    
            <Grey>
                <BuildingBlock title= "Work Experience"
                alignItems="start"
                height='1500px'
                flexDirection='column'
                >

                <Box border={'5px solid #1EA317'}
                width='1000px'
                height='400px'
                borderRadius={50}
                color={'#1EA317'}
                paddingLeft={40}
                paddingTop={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                        fontSize="3rem"
                        fontFamily={'teko'}>
                            HeadStarter Fellowship Program
                        </Box>


                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
                        paddingRight={80}
                        paddingBottom={50}
                        >
                            July 2024 - September 2024

                        <Image src='/headstarter.png'
                        alt='tylor franca'
                        width={300}
                        height={300}>
                        </Image>
                        </Box>

                        <Box
                        paddingRight={40}>
                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        >
                        I am thrilled to announce that I am now a Headstarter Software Engineering Fellow! 
                        Starting July 22nd, I will embark on an intense journey of building 5 AI projects in 5 weeks. 
                        As part of my final challenge, I aim to achieve a milestone of either 1,000 waitlist sign-ups, 1,000 accounts created, 
                        or $1,000 in revenue.
                        </Box>
                        
          

                        </Box>

                </Box>

                <Box border={'5px solid #3083F0'}
                width='1000px'
                height='400px'
                borderRadius={50}
                color={'#3083F0'}
                paddingLeft={40}
                paddingTop={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                        fontSize="3rem"
                        fontFamily={'teko'}>
                            Navmatic (acquired by Superpedestrian)
                        </Box>


                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
                       
                        >
                        January 2021 - July 2021
                        </Box>

                        <Box
                        paddingRight={20}
        
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                        flexDirection={'row'}>

                        <Box
                        w={'80%'}
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}

                        >
                        Conducted extensive collection, analysis, and annotation of positioning data, 
                        contributing to the development of precise navigation solutions. Utilized 
                        software tools, including MATLAB, Bitbucket, and Git, to manage and process 
                        data efficiently. Developed and maintained scripts using various command-line 
                        utilities to improve overall project workflow.
                        </Box>

                        <Image src='/navmatic.png'
                        alt='tylor franca'
                        width={300}
                        height={300}>
                        </Image>
          

                        </Box>

                </Box>
                <Box border={'5px solid #CD0000'}
                width='1000px'
                height='400px'
                borderRadius={50}
                color={'#CD0000'}
                paddingLeft={40}
                paddingTop={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                        fontSize="3rem"
                        fontFamily={'teko'}>
                            Dynamic Engineering
                        </Box>


                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
             
                        >
                            September 2019 - March 2020
                        </Box>

                        <Box
                        paddingRight={20}
        
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                        flexDirection={'row'}>

                        <Box
                        w={'80%'}
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}

                        >
                      Engaged in the testing and assembly of Printed Circuit Boards (PCBs) for 
                      various engineering projects. Gained hands-on experience with diagnostic 
                      tools and techniques, enhancing the quality and functionality of electronic
                        systems. Troubleshot and resolved issues in computer systems, ensuring 
                       optimal performance and reliability.
                        </Box>

                        <Image src='/dynamic.png'
                        alt='tylor franca'
                        width={250}
                        height={250}>
                        </Image>
          

                        </Box>

                </Box>
             </BuildingBlock> 
            </Grey>
        </Box>
    );
}