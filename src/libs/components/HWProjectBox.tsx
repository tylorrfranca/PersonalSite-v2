'use client'
import { Box, HStack } from "panda";
import { Modal } from '@mui/material';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


interface HWProjectBoxProps{
    src:string
    alt:string
    title?:string
    description:string 
    timeFrame:string
    skillsUsed:string
    projectLink:string
    repoLink?:string 
    about1?:string
    about2?:string
    about3?:string
    href:string
    name:string
}

export function HWProjectBox({src, alt, title, description, timeFrame, skillsUsed, projectLink, repoLink, about1, about2, about3, href, name}:HWProjectBoxProps){
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(

            <Box>
                <Box display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                flexDirection={'column'}
                transition="all 0.3s ease-in-out"
                marginX={50}
                marginY={20}
                _hover={{
                    transform: 'scale(1.2)', // Scale the entire component on hover
                }}
                onClick={handleOpen}>
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
                <Modal
                open={open}
                onClose={handleClose}
                >
                <Box
                position="absolute"
                top="50%"
                left="50%"
                width={{
                    sm: '400px',
                    md: '600px',
                }}
                borderRadius={50}
                bgColor="#232324"
                color="white"
                transform={'translate(-50%, -50%)'}
                padding={40}
                >
                <Box
                    marginTop={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection={'column'}
                    gap={20}
                >
                <Image
                src={src}
                alt={alt}
                width={400}
                height={200}
                />

                <Box fontSize="2rem" fontWeight={'bold'}>{title}</Box>
                <Box fontSize="1rem" fontWeight={'bold'}> Created By: {name}</Box>
                <Box display={'flex'}
                justifyContent={'start'}
                flexDirection={'column'}
                gap={20}>
                    <Box>{description}</Box>
                    <Box fontWeight={'bold'}>{timeFrame}</Box>
                    <HStack><Box fontWeight={'bold'}>Skills Used:</Box> {skillsUsed}</HStack>
                    <HStack><Box fontWeight={'bold'}> Project Link:</Box><Link target="blank" href={href}>{projectLink}</Link> </HStack>
                    <hr></hr>

                    <Box fontWeight={'bold'}>About the Project:</Box>
                    <Box>{about1}</Box>
                    <Box>{about2}</Box>
                    {about3}
                </Box>
                </Box>
                </Box>
                </Modal>
            </Box>


    );
}