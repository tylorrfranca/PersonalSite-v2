import { BuildingBlock } from "../BuidlingBlock";
import { Grey } from "../backgrounds/Grey";
import { Box } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";
import { MyLinks } from "../MyLinks";
import emailAnimation from './../../../../public/Email.json';
import githubAnimation from './../../../../public/Github.json';
import LiAnimation from './../../../../public/Linkedin.json';


//creates a simple building block that I want all my components to be inside
export function ContactMe(){
    return (
        <Box>
    
            <Grey>
                <BuildingBlock title= "Contact Me"
                height='900px'
                alignItems="start"
                flexDirection="column">

                {/* <Box border={'5px solid #ffffff'}
                width='1000px'
                height='200px'
                borderRadius={50}
                color={'#ffffff'}
                paddingLeft={40}
                paddingTop={20}
                transition="all 0.3s ease-in-out"
                display={'flex'}
                alignItems={'center'}
                justifyContent={'start'}
                fontSize={'2.5rem'}
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                Email Me: tylorfranca101@gmail.com
                        
                </Box> */}
                <MyLinks
                href="mailto:tylorfranca101@gmail.com"
                bgColor={'white'}
                description="tylorfranca101@gmail.com"
                animationData={emailAnimation}
                height={300}
                width={300}/>

                <MyLinks
                
                href="https://github.com/tylorrfranca"
                bgColor={"#AAAAAA"}
                description="github.com/tylorrfranca"
                animationData={githubAnimation}
                height={150}
                width={150}/>

                <MyLinks
                href="https://www.linkedin.com/in/tylorfrancapires-949254179/"
                bgColor={'#5EBDF8'}
                description="linkedin.com/in/tylorfrancapires"
                animationData={LiAnimation}
                height={300}
                width={300}/>
            
                    




                </BuildingBlock>


            
            </Grey>
        </Box>
    );
}