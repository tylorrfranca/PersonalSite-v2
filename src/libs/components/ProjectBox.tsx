
import { Box } from "panda";
import Image from "next/image";


interface ProjectBoxProps{
    src:string
    alt:string
    title?:string

}

export function ProjectBox({src, alt, title}:ProjectBoxProps){


    return(

            <Box display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            flexDirection={'column'}
            transition="all 0.3s ease-in-out"
            marginX={50}
            marginY={20}
            _hover={{
                transform: 'scale(1.2)', // Scale the entire component on hover
            }}>
                <Box
                width="400px"
                height="200px"
                borderRadius={50}
                margin={10}
                bgColor={'white'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                overflow="hidden">
                <Image src= {src}
                alt = {alt}
                width={400}
                height={200}
                >
                </Image>
                </Box>

                {title}
            </Box>


    );
}