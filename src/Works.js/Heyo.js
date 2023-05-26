import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer, Text } from '@chakra-ui/layout'
import React from 'react'
//import Child from './pikin.jpg'
import Chats from './Chats.png'

function Heyo() {
    return (
        <Box width={{ base: "50vw", md: "70vw" }} height={{ base: "50vh", md: "50vh" }} p={5} border='1px solid white' ml={5} borderRadius={5}
            _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }} transition='ease-in-out 0.5s'
        >
            <Box marginBottom={2}>
                <Link href='https://heyo-chat.onrender.com' target='_blank' >
                    <Image src={Chats} boxSize='100' />
                </Link>
                <Text >
                    <Heading as='h3'>Heyo</Heading>
                  A chat app that allows one on one chats and also group chats. <Spacer /> <br />
                    <b>Stacks:</b> React, ChakraUi, Express, Nodejs, MongoDb, Socket.io.
              </Text>
            </Box>
        </Box>
    )
}

export default Heyo
