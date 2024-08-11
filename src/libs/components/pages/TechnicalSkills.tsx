import { BuildingBlock } from "../BuidlingBlock";
import { Black } from "../backgrounds/Black";
import { Box, Grid } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";
import { Grey } from "../backgrounds/Grey";
import { SkillBox } from "../SkillBox";
import cppAnimation from './../../../../public/cpp.json';
import tsAnimation from './../../../../public/typescript.json';
import reactAnimation from './../../../../public/react-js.json';
import pythonAnimation from './../../../../public/python.json';
import cAnimation from './../../../../public/c.json';
import jsAnimation from './../../../../public/js.json';
import gitAnimation from './../../../../public/git.json';
import vercelAnimation from './../../../../public/Vercel.json';



//creates a simple building block that I want all my components to be inside
export function TechnicalSkills(){
    return (

            <Grey>
            <BuildingBlock title='Technical Skills'
            height="600px"
            alignItems="center">
            <Grid
            gridTemplateColumns={4}
            gridTemplateRows={2}
            justifyContent={'center'}
            
            >

            <SkillBox 
            title="JavaScript"
            animationData={jsAnimation}
            height={300}
            width={300}/>
                
            <SkillBox 
            title="TypeScript"
            animationData={tsAnimation}
            height={300}
            width={300}/> 

            <SkillBox 
            title="React"
            animationData={reactAnimation}
            height={300}
            width={300}/>

            <SkillBox 
            title="NextJS"
            animationData={vercelAnimation}
            height={300}
            width={300}/>

            <SkillBox 
            title="C++"
            animationData={cppAnimation}
            height={300}
            width={300}/>

            <SkillBox 
            title="C"
            animationData={cAnimation}
            height={300}
            width={300}/>


            <SkillBox 
            title="Python"
            animationData={pythonAnimation}
            height={300}
            width={300}/>

            <SkillBox 
            title="Git"
            animationData={gitAnimation}
            height={300}
            width={300}/>

            
            </Grid>

            </BuildingBlock>

    
            
            </Grey>

    );
}