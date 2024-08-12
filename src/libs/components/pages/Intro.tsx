import { BuildingBlock } from "../BuidlingBlock";
import { Black } from "../backgrounds/Black";
import { Box } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";



//creates a simple building block that I want all my components to be inside
export function Intro(){
    return (
<Box>
    
            <Box
            display={'flex'}
            justifyContent={'end'}>
            <Resume/>
            </Box>
            <Black>
    
                <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={{
                    base:'column',
                    sm:'column',
                    md:'column',
                    lg:'row',
                    xl:'row'
                }}
                width={{
                    base:'300px',
                    sm:'600px',
                    md:'700px',
                    lg:'1050px',
                    xl:'1200px'
                }}
                height={{
                    base:'500px',
                    sm:'700px',
                    md:'700px',
                    lg:'450px',
                    xl:'500px'
                }}
                border={'5px solid white'}
                borderRadius={'50'}
                >
    
                    <Box
                    width="700px"
                    maxHeight="400px"
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={{                        
                        base:'start',
                        sm:'center',
                        md:'center',
                        lg:'start',
                        xl:'start'}}
                    alignItems={{
                        base:'center',
                        sm:'center',
                        md:'center',
                        lg:'start',
                        xl:'start'
                    }}
                    paddingLeft={{
                        base:0,
                        sm:0,
                        md:30,
                        lg:10, 
                        xl: 0   
                    }}
                    paddingBottom={{
                        base:30,
                        sm:100,
                        md:80,
                        lg:0, 
                        xl:0
                    }}
                    >
                        <Box
                        fontSize={{
                            base:'1.8rem',
                            sm:'2.7rem',
                            md:'2.7rem',
                            lg:'3rem', 
                            xl:'3.5rem'                           
                        }}
                        fontFamily={'teko'}>
                        Tylor Franca
                        </Box>
    
                        <Box
                        fontSize={{
                            base:'1.2rem',
                            sm:'2.3rem',
                            md:'2.3rem',
                            lg:'2.4rem', 
                            xl:'3rem'                           
                        }}
                        fontFamily={"jockeyOne"}
                        paddingBottom={{
                            base:5,
                            sm:20,
                            md:10,
                            lg:170, 
                            xl:150
                        }}>
                        Computer and Software Engineer
                        </Box>
    
                        <Box
                        fontSize={{
                            base:'1rem',
                            sm:'1.6rem',
                            md:'1.6rem',
                            lg:'2rem'                           
                        }}
                        fontFamily={"jockeyOne"}
                        >
                        Pursuing B.S. In Computer Engineering at
                        </Box>
    
                        <Box
                        fontSize={{
                            base:'1.1rem',
                            sm:'2rem',
                            md:'2rem',
                            lg:'2.5rem'                           
                        }}
                        fontFamily={"jockeyOne"}
                        color={'#F8E343'}
                        >
                            California State University, Long Beach
                        </Box>
    
                    </Box>
    
    
                    <Box
                    borderRadius={'50%'}
                    width={{        
                        base:'250px',
                        sm: '300px',
                        md: '300px',
                        lg: '300px',
                        xl: '350px',}}
                    overflow={'hidden'}
                    marginRight={10}
                    marginBottom={{
                        base:0,
                        sm: 40,
                        md: 40,
                        lg: 40,
                        xl: 40,
                    }}
                  
                    height="auto"
                    position="relative">
                        <Image src={'/profilePic.JPG'}
                        alt="Tylor Franca"
                        layout="responsive"
                        width={300}
                        height={300}  // Adjust this based on the aspect ratio of the image
                        objectFit="cover"
                        >
                        </Image>
                    </Box>
    
                </Box>
            </Black>
</Box>
    );
}