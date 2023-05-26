import React from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer, Text } from '@chakra-ui/layout'
//import Child from './pikin.jpg'
import Votes from './Votes.png'

function Voteasy() {
    return (
        <Box width={{ base: "50vw", md: "70vw" }} height={{ base: "60vh", md: "50vh" }} p={5} border='1px solid white' ml={5} borderRadius={5}
            _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }} transition='ease-in-out 0.5s'
        >
            <Box marginBottom={2}>
                <Link href='https://voteasyy.vercel.app/' target='_blank' >
                    <Image src={Votes} boxSize='100' />
                </Link>
                <Text >
                    <Heading as='h3'>Voteasy</Heading>
                     An online voting site that allows voters to vote in limited time, and logs you out when the time is exhausted.
                     The votes are updated updated in realTime at the database
                           <Spacer /> <br />
                    <b>Stacks:</b> React, ChakraUi, FireBase.
              </Text>
            </Box>
        </Box>
    )
}

export default Voteasy
