'use client'
import { ReactNode } from "react";
import { Box } from "panda";
import { motion } from "framer-motion";

interface GreyProps {
    children?: ReactNode;
}

// Creates a simple building block that fades in from the right
export function Grey({ children }: GreyProps) {
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
            <motion.div
                initial={{ opacity: 0, x: -1000 }}  // Start with opacity 0 and positioned 100px to the right
                whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to the original position when in view
                transition={{ duration: 1.5}}     // Adjust the duration as needed
                viewport={{ once: true }}          // Ensure the animation happens only once when the component enters the viewport
            >
                {children}
            </motion.div>
        </Box>
    );
}
