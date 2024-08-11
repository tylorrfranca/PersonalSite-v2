import { ReactNode } from "react";
import { Box } from "panda";

interface GreyProps {
    children?: ReactNode;
}



//creates a simple building block that I want all my components to be inside
export function Grey({children}:GreyProps){
    return (
        <Box
        width={'100vw'}
        minHeight={'100vh'}
        bgColor={'#232324'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        flexDirection={'column'}
        >
            {children}
        </Box>
    );
}