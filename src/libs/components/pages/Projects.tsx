import { BuildingBlock } from "../BuidlingBlock";
import { Black } from "../backgrounds/Black";
import { Box, Grid } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { ProjectBox } from "../ProjectBox";




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
            <ProjectBox 
            src = '/greenField.png'
            alt= 'tylor franca'
            title="Greenfield Churrascaria" />

            <ProjectBox 
            src = '/lineCar.jpg'
            alt= 'tylor franca'
            title="Analog Line Following Robot" />

            </Grid>

            </BuildingBlock>

    
            
            </Black>

    );
}