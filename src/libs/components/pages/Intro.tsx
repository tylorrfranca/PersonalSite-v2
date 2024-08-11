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
                flexDirection={'row'}
                width={'1200px'}
                height={'500px'}
                border={'5px solid white'}
                borderRadius={'50'}
                >
    
                    <Box
                    width="700px"
                    height="400px"
                    justifyContent="start"
                    alignItems="start"
                    >
                        <Box
                        fontSize="4rem"
                        fontFamily={'teko'}>
                            Tylor Franca
                        </Box>
    
                        <Box
                        fontSize="3rem"
                        fontFamily={"jockeyOne"}
                        paddingBottom={120}>
                            Computer and Software Engineer
                        </Box>
    
                        <Box
                        fontSize="1.8rem"
                        fontFamily={"jockeyOne"}
                        >
                        Pursuing B.S. In Computer Engineering at
                        </Box>
    
                        <Box
                        fontSize="2.5rem"
                        fontFamily={"jockeyOne"}
                        color={'#F8E343'}
                        >
                            California State University, Long Beach
                        </Box>
    
                    </Box>
    
    
                    <Box
                    borderRadius={'50%'}
                    width={350}
                    height={350}
                    overflow={'hidden'}
                    border={'5px solid white'}>
                        <Image src={'/profilePic.JPG'}
                        alt="Tylor Franca"
                        width={350}
                        height={350}
                        >
                        </Image>
                    </Box>
    
                </Box>
            </Black>
</Box>
    );
}