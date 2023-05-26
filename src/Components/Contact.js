import React from 'react'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import { UilWhatsapp, UilTwitter, UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons'

function Contact({ contactRef }) {
    return (
        <Box ref={contactRef} color={'white'} >
            <Text fontSize={30} fontWeight={'extrabold'} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"> Lets connect...</Text>
            <Flex align='center' display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg" >

                <Box _hover={{ cursor: 'pointer', transform: 'scale(1.5)' }} transition='ease-in-out 0.5s' mr={6}  >
                    <Link href='https://wa.me/09046824242' target='_blank' >
                        < UilWhatsapp size='50' color='green' />
                    </Link>
                </Box>
                <Box _hover={{ cursor: 'pointer', transform: 'scale(1.5)' }} transition='ease-in-out 0.5s' mr={6}>
                    <Link href='https://twitter.com/Vasco_Dayigil?t=sNM-jAOtFlw5EYWFHqyn1A&s=09' target='_blank'>
                        <UilTwitter size='50' color='blue' />
                    </Link>
                </Box>
                <Box _hover={{ cursor: 'pointer', transform: 'scale(1.5)' }} transition='ease-in-out 0.5s' mr={6} >
                    <Link href='https://github.com/Vasakee' target='_blank'>
                        <UilGithub size='50' color='black' />
                    </Link>
                </Box>
                <Box _hover={{ cursor: 'pointer', transform: 'scale(1.5)' }} transition='ease-in-out 0.5s' mr={6}>
                    <Link href='https://www.linkedin.com/in/basil-dayigil-62659421b' target='_blank' >
                        <UilLinkedin color='blue' size='50' />
                    </Link>
                </Box>
                <Box _hover={{ cursor: 'pointer', transform: 'scale(1.5)' }} transition='ease-in-out 0.5s' mr={3}>
                    <Link href='mailto:basildayigil@gmail.com' target='_blank' >
                        <UilEnvelope color='red' size='50' />
                    </Link>
                </Box>
            </Flex>
        </Box>
    )
}

export default Contact
