import { Box, Heading, Container } from '@chakra-ui/layout'
import React from 'react'
import CryptoCheck from '../Works.js/CryptoCheck'
import Heyo from '../Works.js/Heyo'
import Voteasy from '../Works.js/Voteasy'
import Weather from '../Works.js/Weather'
import Display from './Background.jpg'

function Projects({ projectRef }) {
    return (
        <Box alignItems='flex' p={9} ref={projectRef} color={'white'} backgroundImage={Display} backgroundSize={'cover'}
            backgroundPosition='center'>
            <Heading as={'h1'} marginBottom={2} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >Projects</Heading>
            <Heading as={'h2'} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >Frontend Projects</Heading>
            <Box display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >
                <Weather />
                <CryptoCheck />
            </Box>

            <Heading as={'h2'} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >Midstack Projects</Heading>
            <Container>
                <Box display="flex"
                    justifyContent="center"
                    p={3}
                    justify='space-between'
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg">
                    <Voteasy />
                </Box>
            </Container>
            <Heading as={'h2'} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >Fullstack Projects</Heading>
            <Container>
                <Box display="flex"
                    justifyContent="center"
                    p={3}
                    justify='space-between'
                    w="100%"
                    m="40px 0 15px 0"
                    borderRadius="lg" >
                    <Heyo />
                </Box>
            </Container>
        </Box>
    )
}

export default Projects
