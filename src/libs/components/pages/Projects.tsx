import { BuildingBlock } from "../BuidlingBlock";
import { Black } from "../backgrounds/Black";
import { Box, Grid } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { SWProjectBox } from "../SWProjectBox";
import {HWProjectBox} from "../HWProjectBox"




//creates a simple building block that I want all my components to be inside
export function Projects(){
    return (

            <Black>
            <BuildingBlock title='Projects'
            height="700px"
            alignItems="center">
            
            <Grid
            gridTemplateColumns={2}
            gridTemplateRows={2}
            justifyContent={'center'}
            >
            <SWProjectBox 
            src = '/greenField.png'
            alt= 'tylor franca'
            title="Greenfield Churrascaria"
            description="Creating a contracted website redesign for Green Field Churrascaria, a local restaurant in Long Beach, California." 
            timeFrame="May 2024 - In Progress"
            skillsUsed="Next.js, TypeScript, Panda CSS, Neo4j, Park UI"
            projectLink="Currently Unreleased"
            repoLink="Private"
            about1='Leading development and designing system structure for two person contracted website redevelopment.' 
            about2 = 'Streamlined development using Uix, a Neo4j graph library, allowing for seamless client tracking and reservation system, digitizing a formerly analog reservation system and lowering restaurant operational costs.'
            projhref=''
            repohref=''
            name = "Tylor Franca & Lucas Amberg"/>

            <SWProjectBox 
            src = '/inventoryApp.png'
            alt= 'tylor franca'
            title="Simple Inventory App"
            description="Created an inventory management application featuring robust user authentication and secure user data storage." 
            timeFrame="August 2024 - In Progress"
            skillsUsed="Next.js, JavaScript, Material UI, Firebase"
            projectLink="https://inventory-app-kohl-sigma.vercel.app/"
            repoLink="https://github.com/tylorrfranca/InventoryApp"
            about1='This inventory management application was developed as part of the Headstarter Fellowship Program, where I aimed to build a fully functional, user-friendly tool to streamline inventory tracking and management.' 
            about2 = 'The app features robust user authentication and secure data storage, leveraging Firebase to seamlessly connect users with the database.'
            projhref='https://inventory-app-kohl-sigma.vercel.app/'
            repohref='https://github.com/tylorrfranca/InventoryApp'
            name="Tylor Franca"/>

            <HWProjectBox 
            src = '/lineCar.jpg'
            alt= 'tylor franca'
            title="Analog Line Following Robot"
            description="This project involved building a line-following robot without the use of programmable devices like FPGAs or microcontrollers. The robot relied on analog circuitry, including infrared sensors, OP amp comparators, and MOSFETs, to detect and follow a path marked with black tape on white poster board. " 
            timeFrame = "Spring 2024"
            skillsUsed = 'Analog Circuit Design, Sensor Integration, Voltage Regulation and Control'
            projectLink="click here to see  full report"
            href="/CECS311FinalProject.pdf"
            about1="Despite initial challenges with speed control, sensor placement, and build quality, the team successfully created a robot that could follow the line, though improvements in stability and optimization would enhance future iterations."
            about2="The project provided valuable hands-on experience in circuit design and problem-solving."
            name="Tylor Franca & Anthony Keroles"/>

            <HWProjectBox 
            src = '/smartCar.jpg'
            alt= 'tylor franca'
            title="Smart Car and Smart Home"
            description="This project involved creating a smart house and a stepper motor-powered car that interact using infrared sensors. The car operates in two modes—entering and leaving—triggering the garage door to open or close based on sensor input" 
            timeFrame = "Spring 2024"
            skillsUsed = 'Embedded Systems Programming, FSMs, Interupt Handling, Stepper Motor Control, Sensor Integration, and SysTick Timer'
            projectLink="click here to see  full report"
            href="/CECS346_FinalProject.pdf"
            about1="We utilized TM4C microcontrollers to manage the smart car and house operations."
            about2="This project required a deep understanding of microcontroller programming, sensor interfacing, and hardware debugging to ensure smooth communication and functionality between the car and garage."
            name="Tylor Franca, Anthony Keroles, & Nick DeGreef"/>

            </Grid>

            </BuildingBlock>

    
            
            </Black>

    );
}