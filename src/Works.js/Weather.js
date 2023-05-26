import React from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer, Text } from '@chakra-ui/layout'
//import Child from './pikin.jpg'
import Weat from './Weat.png'

function Weather() {
    return (
        <Box width={{ base: "50vw", md: "70vw" }} height={{ base: "80vh", md: "50vh" }} p={5} border='1px solid white' borderRadius={5} mr={3}
            _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }} transition='ease-in-out 0.5s'
        >
            <Box marginBottom={2}>
                <Link href='https://vasakee.github.io/weather/' target='_blank' >
                    <Image src={Weat} boxSize='100' />
                </Link>
                <Text >
                    <Heading as='h3'>Weather</Heading>
                  A Weather forecasting app that shows the weather conditions of different locations
                   (based on the location searched) for the last 3hours, the present time and next 3 hours. <b>Data gotten from openweathermap API</b> <Spacer /> <br />
                    <b>Stacks:</b> React, ChakraUi.
              </Text>
            </Box>
        </Box>
    )
}

export default Weather
