import { Avatar } from '@chakra-ui/avatar'
import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import React from 'react'
import Pic from './Dp.JPG'

function Navbar({ scrolltopage, aboutRef, projectRef, skillRef, contactRef }) {
    return (
        <Flex as='nav' align='center' justify='space-between' padding='1rem' bg='black' color='white' >

            <Box >
                <Link onClick={() => scrolltopage(aboutRef)} >
                    <Text _hover={{ color: 'aqua', fontSize: '2xl', fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.2)' }} transition='ease-in-out 0.3s'>
                        Home
                        </Text>
                </Link>
            </Box>
            <Box>
                <Link onClick={() => scrolltopage(projectRef)} >
                    <Text _hover={{ color: 'aqua', fontSize: '2xl', fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }} transition='ease-in-out 0.3s'>
                        Projects
                        </Text>
                </Link>
            </Box>
            <Box >
                <Link onClick={() => scrolltopage(skillRef)} >
                    <Text _hover={{ color: 'aqua', fontSize: '2xl', fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }} transition='ease-in-out 0.3s'>
                        skills
                        </Text>
                </Link>
            </Box>
            <Box>
                <Link onClick={() => scrolltopage(contactRef)} >
                    <Text _hover={{ color: 'aqua', fontSize: '2xl', fontWeight: 'bold', cursor: 'pointer', transform: 'scale(1.05)' }} transition='ease-in-out 0.3s'>
                        Contact
                        </Text>
                </Link>
            </Box>
        </Flex>
    )
}

export default Navbar
