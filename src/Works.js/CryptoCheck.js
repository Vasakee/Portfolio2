import React from 'react'
import { Image } from '@chakra-ui/image'
import { Box, Heading, Link, Spacer, Text } from '@chakra-ui/layout'
import Crypto from './Crypto.png'

function CryptoCheck() {
    return (
        <Box width={{ base: "50vw", md: "70vw" }} height={{ base: "70vh", md: "50vh" }} p={5} border='1px solid white' ml={3} borderRadius={5}
            _hover={{ cursor: 'pointer', transform: 'scale(1.1)' }} transition='ease-in-out 0.5s'
        >
            <Box marginBottom={2}>
                <Link href='https://vercel.com/vasakee/crypto-check' target='_blank' >
                    <Image src={Crypto} boxSize='100' />
                </Link>
                <Text >
                    <Heading as='h3'>CryptoCheck</Heading>
                    A cryptocurrency dashboard that displays crypto-coins, their prices and percentage rise or fall. <b>Data gotten from coingecko API</b> <Spacer /> <br />
                    <b>Stacks:</b> React, ChakraUi.
              </Text>
            </Box>
        </Box>
    )
}

export default CryptoCheck
