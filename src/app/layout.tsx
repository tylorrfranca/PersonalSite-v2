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
