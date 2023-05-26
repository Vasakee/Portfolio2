import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Pic from './Dp.JPG'
import Display from './Background.jpg'

function About({ aboutRef }) {
    return (
        <Box display='flex' alignItems='center' color='white' justifyContent='center' ref={aboutRef} backgroundImage={Display} backgroundSize={'cover'}
            backgroundPosition='center'
        >
            <Flex direction='column' alignItems='center' justifyContent='center' >
                <Heading as={'h2'} fontSize='30' mb={4} >
                    Hello ...
                </Heading>
                <Image src={Pic} boxSize={200} borderRadius={'10'} />
                <Text fontWeight='bold' p={4} mb={3} fontSize='20' >
                    I'm Basil  Dayigil a MERN fullstack software developer
            </Text>
            </Flex>
        </Box>
    )
}

export default About
