
import Link from "next/link";
import { Box } from "panda";



//creates a simple building block that I want all my components to be inside
export function Resume(){
    return (
        <Box
        borderRadius={20}
        paddingX={{
            base:60,
            sm:80,
            md:100,
            lg:100, 
            xl:100
        }}
        bgColor={'white'}
        color={'black'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        w={'5%'}
        fontSize={{
            base:'1.2rem',
            sm:'1.7rem',
            md:'1.8rem',
            lg:'2rem', 
            xl:'2.5rem'                           
        }}
        marginRight={{
            base:60,
            sm:80,
            md:100,
            lg:100, 
            xl:100
        }}
        marginTop={50}
        fontFamily={'jockeyOne'}
        transition="all 0.3s ease-in-out"
        _hover={{
        transform: 'scale(1.2)', // Scale the entire component
        }}
        >
        <Link 
        href = '/Tylor_Franca_Pires_Resume.pdf'
        target="blank">
            Resume
        </Link>
        </Box>

    );
}