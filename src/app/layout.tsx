import type { Metadata } from "next";
import { Inter} from "next/font/google";
import { Jockey_One , Teko} from "next/font/google";
import "./globals.css";
import { Providers } from "@/libs/utility/providers/Providers";
import { Box } from "panda";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--inter-font",
});

const jockeyOne = Jockey_One({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--jockey-one",
});

const teko = Teko({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--teko",
});

export const metadata: Metadata = {

    title: "Tylor Franca",
    description: "Tylor Franca's Portfolio Site",
    openGraph: {
        title: 'Tylor Franca',
        description: "Tylor Franca's Portfolio Site",
        url: 'https://www.tylorfranca.dev',
        siteName: 'Tylor Franca Portfolio',
        images: [
            {
                url: 'https://www.tylorfranca.dev/profilepic.jpg',  // Updated URL
                width: 800,
                height: 600,
                alt: 'Tylor Franca Profile Picture',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tylor Franca',
        description: "Tylor Franca's Portfolio Site",
        images: [
            'https://www.tylorfranca.dev/profilepic.jpg',  // Updated URL
        ],
    },
};


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en"
        className={`${jockeyOne.variable} ${teko.variable}`}>
            <body
                style={{ overflowX: "hidden" }}
                >
                <Providers>
                    <Box
                        scrollbarWidth={"none"}
                        width="screen"
                        padding="0"
                        minHeight="screen"
                        overflowX="hidden"
                        bgColor={'#0f0f0f'}>
                        {children}
                    </Box>
                </Providers>
            </body>
        </html>
    );
}
