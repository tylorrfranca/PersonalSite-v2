import { ReactNode } from "react";
import { Box } from "panda";



interface BuildingBlocksProps {
    title:string
    children?: ReactNode;
    height?: {
        base:string,
        sm:string,
        md:string,
        lg:string,
        xl: string
    }
    flexDirection?:string
    alignItems:string
}

//creates a simple building block that I want all my components to be inside
export function BuildingBlock({title,children, height, flexDirection, alignItems}:BuildingBlocksProps){
    return (
        <Box
        paddingY={100}>
            <Box
            width={{
                base:'300px',
                sm:'600px',
                md:'700px',
                lg:'1050px',
                xl:'1200px'
            }}
            display={'flex'}
            alignItems={'start'}
            justifyContent={'start'}
            paddingLeft={40}
            fontSize={{
                base:'2rem',
                sm:'3rem',
                md:'3rem',
                lg:'4rem',
                xl:'4rem'
            }}
            fontFamily={'teko'}
            
            >
            {title}
            </Box>
            <Box
            display={'flex'}
            alignItems={alignItems}
            justifyContent={'space-around'}
            flexDirection={flexDirection}
            width={{
                base:'300px',
                sm:'600px',
                md:'700px',
                lg:'1050px',
                xl:'1200px'
            }}
            height={height}
            border={'5px solid white'}
            borderRadius={'50'}
            p={10}
            gap={40}
            >

            {children}
            </Box>
        </Box>
            
    );
}