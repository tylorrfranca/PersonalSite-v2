import Image from "next/image";
import { Box} from "panda";
import { Heading } from "@radix-ui/themes";
import { BuildingBlock } from "@/libs/components/BuidlingBlock";
import { Intro } from "@/libs/components/pages/Intro";
import { Black} from "@/libs/components/backgrounds/Black"
import { Grey } from "@/libs/components/backgrounds/Grey";
import { TechnicalSkills } from "@/libs/components/pages/TechnicalSkills";
import { Education } from "@/libs/components/pages/Education";
import { WorkExperince } from "@/libs/components/pages/WorkExperience";
import { Projects } from "@/libs/components/pages/Projects";
import { ContactMe } from "@/libs/components/pages/ContactMe";
export default function Home() {
    return (
            // <Box 
            //    w="screen"
            //    marginTop={20}
            //    display={'flex'}
            //    flexDirection={'column'}
            //    alignItems="center"
            //    justifyContent="center"
            //    >  
   
            // </Box>
            <>
            <Intro/>
            <TechnicalSkills/>
            <Education/>
            <WorkExperince/>
            <Projects/>
            <ContactMe/>
            
            </>
                

      
    );
}
