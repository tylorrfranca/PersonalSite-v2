'use client'
import { ReactNode } from "react";
import { Box } from "panda";
import { motion } from "framer-motion";

interface BlackProps {
    children?: ReactNode;
}

// Creates a simple building block that fades in from the right
export function Black({children}: BlackProps) {
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
            <motion.div
                initial={{ opacity: 0, x: 1000}}  // Start with opacity 0 and positioned 100px to the right
                whileInView={{ opacity: 1, x: 0 }} // Fade in and slide to the original position when in view
                transition={{ duration: 1.5 }}     // Adjust the duration as needed
                viewport={{ once: true }}          // Ensure the animation happens only once when the component enters the viewport
            >
                {children}
            </motion.div>
        </Box>
    );
}