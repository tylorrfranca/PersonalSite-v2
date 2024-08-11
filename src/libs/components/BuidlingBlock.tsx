import { ReactNode } from "react";
import { Box } from "panda";



interface BuildingBlocksProps {
    title:string
    children?: ReactNode;
    height?: string
    flexDirection?:string
    alignItems:string
}

//creates a simple building block that I want all my components to be inside
export function BuildingBlock({title,children, height, flexDirection, alignItems}:BuildingBlocksProps){
    return (
        <Box
        paddingY={100}>
            <Box
            width='1200px'
            display={'flex'}
            alignItems={'start'}
            justifyContent={'start'}
            paddingLeft={40}
            fontSize={'4rem'}
            fontFamily={'teko'}
            
            >
            {title}
            </Box>
            <Box
            display={'flex'}
            alignItems={alignItems}
            justifyContent={'space-around'}
            flexDirection={flexDirection}
            width={'1200px'}
            height={height}
            border={'5px solid white'}
            borderRadius={'50'}
            p={100}
            gap={40}
            >

            {children}
            </Box>
        </Box>
            
    );
}