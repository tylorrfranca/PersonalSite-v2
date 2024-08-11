import { ReactNode } from "react";
import { Box } from "panda";


interface BlackProps {
    children?: ReactNode;
}

//creates a simple building block that I want all my components to be inside
export function Black({children}:BlackProps){
    return (
        <Box
        width={'100vw'}
        minHeight={'100vh'}
        bgColor={'#0f0f0f'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'row'}
        >
            {children}
        </Box>
    );
}