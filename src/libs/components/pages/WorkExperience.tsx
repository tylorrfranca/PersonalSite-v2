import { BuildingBlock } from "../BuidlingBlock";
import { Grey } from "../backgrounds/Grey";
import { Box } from "panda";
import { Heading } from "@radix-ui/themes";
import Image from "next/image";
import { Resume } from "../Resume";





export function WorkExperince(){
    return (
        <Box>
    
            <Grey>
                <BuildingBlock title= "Work Experience"
                alignItems="center"
                height={{                    
                    base:'2100px',
                    sm:'1900px',
                    md:'1800px',
                    lg:'1500px',
                    xl: '1500px'}}
                flexDirection='column'
                >

                <Box border={'5px solid #1EA317'}
                width={{                    
                    base:'90%',
                    sm:'500px',
                    md:'600px',
                    lg:'1000px',
                    xl: '1000px'}}
                height='auto'
                borderRadius={50}
                color={'#1EA317'}
                paddingLeft={{
                    base:20,
                    sm: 40,
                    md: 40,
                    lg: 40,
                    xl: 40
                }}
                paddingTop={20}
                paddingBottom={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                            fontSize={{
                                base:'1.2rem',
                                sm:'1.8rem',
                                md:'2.2rem',
                                lg:'3rem',
                                xl:'3rem'
                            }}
                        fontFamily={'teko'}>
                            HeadStarter Fellowship Program
                        </Box>


                        <Box
                        fontSize={{
                            base:'0.9rem',
                            sm:'1.2rem',
                            md:'1.3rem',
                            lg:'1.5rem',
                            xl:'1.5rem'
                            }}
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
                        paddingRight={{
                            base:10,
                            sm: 20,
                            md: 80,
                            lg: 80,
                            xl: 80
                        }}
                        paddingBottom={{
                            base:10,
                            sm: 20,
                            md: 50,
                            lg: 50,
                            xl: 50
                        }}
                        >
                            July 2024 - September 2024

                        
                        <Box 
                            width={{        
                            base:'200px',
                            sm: '200px',
                            md: '200px',
                            lg: '300px',
                            xl: '350px',}}
                            height="auto"  
                            position="relative">

                        <Image src='/headstarter.png'
                            alt='tylor franca'
                            layout="responsive"
                            width={300}
                            height={300}  // Adjust this based on the aspect ratio of the image
                            objectFit="cover">
                        </Image>
                        </Box>
                        </Box>

                        <Box
                        paddingRight={40}>
                        <Box
                        fontSize={{
                            base:'1rem',
                            sm:'1.3rem',
                            md:'1.3rem',
                            lg:'1.5rem',
                            xl:'1.5rem'
                            }}
                        fontFamily={"jockeyOne"}
                        >
                        I am thrilled to announce that I am now a Headstarter Software Engineering Fellow! 
                        Starting July 22nd, I will embark on an intense journey of building 5 AI projects in 5 weeks. 
                        As part of my final challenge, I aim to achieve a milestone of either 1,000 waitlist sign-ups, 1,000 accounts created, 
                        or $1,000 in revenue.
                        </Box>
                        
          

                        </Box>

                </Box>

                <Box
                border={'5px solid #3083F0'}
                width={{
                    base: '90%', // Responsive width for smaller screens
                    sm: '500px',
                    md: '600px',
                    lg: '1000px',
                    xl: '1000px'
                }}
                height={{
                    base: 'auto', // Let the height adjust automatically on smaller screens
                    sm: 'auto'
                }}
                borderRadius={50}
                color={'#3083F0'}
                paddingLeft={{
                    base: 20,
                    sm: 40
                }}
                paddingTop={{
                    base: 10,
                    sm: 20
                }}
                paddingBottom={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                }}
                >
                <Box
                    fontSize={{
                        base:'1.2rem',
                        sm:'1.8rem',
                        md:'2.2rem',
                        lg:'3rem',
                        xl:'3rem'
                    }}
                    fontFamily={'teko'}
                >
                    Navmatic (acquired by Superpedestrian)
                </Box>

                <Box
                    fontSize={{
                    base: '1rem',
                    sm: '1.2rem',
                    md: '1.5rem'
                    }}
                    fontFamily={"jockeyOne"}
                    display={'flex'}
                    justifyContent={'space-between'}
                    marginTop={10}
                >
                    January 2021 - July 2021
                </Box>

                <Box
                    paddingRight={{
                    base: 10,
                    sm: 20
                    }}
                    marginTop={10}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'start'}
                    flexDirection={{
                    base: 'column-reverse',
                    sm: 'row'
                    }}
                >
                    <Box
                    w={{
                        base: '100%',
                        sm: '80%'
                    }}
                    fontSize={{
                        base:'1rem',
                        sm:'1.3rem',
                        md:'1.3rem',
                        lg:'1.5rem',
                        xl:'1.5rem'
                    }}
                    fontFamily={"jockeyOne"}
                    marginBottom={{
                        base: 20,
                        sm: 0
                    }}
                    >
                    Conducted extensive collection, analysis, and annotation of positioning data, 
                    contributing to the development of precise navigation solutions. Utilized 
                    software tools, including MATLAB, Bitbucket, and Git, to manage and process 
                    data efficiently. Developed and maintained scripts using various command-line 
                    utilities to improve overall project workflow.
                    </Box>

                    <Box
                    width={{
                        base: '120px',
                        sm: '200px',
                        md: '250px',
                        lg: '300px'
                    }}
                    height="auto"
                    position="relative"
                    >
                    <Image
                        src='/navmatic.png'
                        alt='tylor franca'
                        layout="responsive"
                        width={300}
                        height={300}
                        objectFit="cover"
                    />
                    </Box>
                </Box>
                </Box>

                <Box
                border={'5px solid #CD0000'}
                width={{
                    base: '90%', // Responsive width for smaller screens
                    sm: '500px',
                    md: '600px',
                    lg: '1000px',
                    xl: '1000px'
                }}
                height={{
                    base: 'auto', // Let the height adjust automatically on smaller screens
                    sm: 'auto'
                }}
                borderRadius={50}
                color={'#CD0000'}
                paddingLeft={{
                    base: 20,
                    sm: 40
                }}
                paddingTop={{
                    base: 10,
                    sm: 20
                }}
                paddingBottom={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                    transform: 'scale(1.1)', // Scale the entire component
                }}
                >
                <Box
                    fontSize={{
                    base: '2rem',
                    sm: '2.5rem',
                    md: '3rem'
                    }}
                    fontFamily={'teko'}
                >
                    Dynamic Engineering
                </Box>

                <Box
                    fontSize={{
                    base: '1rem',
                    sm: '1.2rem',
                    md: '1.5rem'
                    }}
                    fontFamily={"jockeyOne"}
                    display={'flex'}
                    justifyContent={'space-between'}
                    marginTop={10}
                >
                    September 2019 - March 2020
                </Box>

                <Box
                    paddingRight={{
                    base: 10,
                    sm: 20
                    }}
                    marginTop={10}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'start'}
                    flexDirection={{
                    base: 'column',
                    sm: 'row'
                    }}
                >
                    <Box
                    w={{
                        base: '100%',
                        sm: '80%'
                    }}
                    fontSize={{
                        base:'1rem',
                        sm:'1.3rem',
                        md:'1.3rem',
                        lg:'1.5rem',
                        xl:'1.5rem'
                    }}
                    fontFamily={"jockeyOne"}
                    marginBottom={{
                        base: 20,
                        sm: 0
                    }}
                    >
                    Engaged in the testing and assembly of Printed Circuit Boards (PCBs) for 
                    various engineering projects. Gained hands-on experience with diagnostic 
                    tools and techniques, enhancing the quality and functionality of electronic
                    systems. Troubleshot and resolved issues in computer systems, ensuring 
                    optimal performance and reliability.
                    </Box>

                    <Box
                    width={{
                        base: '150px',
                        sm: '200px',
                        md: '250px',
                        lg: '250px'
                    }}
                    height="auto"
                    position="relative"
                    >
                    <Image
                        src='/dynamic.png'
                        alt='tylor franca'
                        layout="responsive"
                        width={250}
                        height={250}
                        objectFit="cover"
                    />
                    </Box>
                </Box>
                </Box>




{/* 
                <Box border={'5px solid #3083F0'}
                width='1000px'
                height='400px'
                borderRadius={50}
                color={'#3083F0'}
                paddingLeft={40}
                paddingTop={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                        fontSize="3rem"
                        fontFamily={'teko'}>
                            Navmatic (acquired by Superpedestrian)
                        </Box>


                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
                       
                        >
                        January 2021 - July 2021
                        </Box>

                        <Box
                        paddingRight={20}
        
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                        flexDirection={'row'}>

                        <Box
                        w={'80%'}
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}

                        >
                        Conducted extensive collection, analysis, and annotation of positioning data, 
                        contributing to the development of precise navigation solutions. Utilized 
                        software tools, including MATLAB, Bitbucket, and Git, to manage and process 
                        data efficiently. Developed and maintained scripts using various command-line 
                        utilities to improve overall project workflow.
                        </Box>

                        <Image src='/navmatic.png'
                        alt='tylor franca'
                        width={300}
                        height={300}>
                        </Image>
          

                        </Box>

                </Box>
                <Box border={'5px solid #CD0000'}
                width='1000px'
                height='400px'
                borderRadius={50}
                color={'#CD0000'}
                paddingLeft={40}
                paddingTop={20}
                bgColor={'#000000'}
                transition="all 0.3s ease-in-out"
                _hover={{
                transform: 'scale(1.1)', // Scale the entire component
                }}>
                        <Box
                        fontSize="3rem"
                        fontFamily={'teko'}>
                            Dynamic Engineering
                        </Box>


                        <Box
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}
                        display={'flex'}
                        justifyContent={'space-between'}
             
                        >
                            September 2019 - March 2020
                        </Box>

                        <Box
                        paddingRight={20}
        
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                        flexDirection={'row'}>

                        <Box
                        w={'80%'}
                        fontSize="1.5rem"
                        fontFamily={"jockeyOne"}

                        >
                      Engaged in the testing and assembly of Printed Circuit Boards (PCBs) for 
                      various engineering projects. Gained hands-on experience with diagnostic 
                      tools and techniques, enhancing the quality and functionality of electronic
                        systems. Troubleshot and resolved issues in computer systems, ensuring 
                       optimal performance and reliability.
                        </Box>

                        <Image src='/dynamic.png'
                        alt='tylor franca'
                        width={250}
                        height={250}>
                        </Image>
          

                        </Box>

                </Box> */}
             </BuildingBlock> 
            </Grey>
        </Box>
    );
}