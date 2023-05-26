import { Box, Heading, Spacer } from '@chakra-ui/layout'
import { Tag } from '@chakra-ui/tag'
import React from 'react'

function Skills({ skillRef }) {
    return (
        <Box p={9} ref={skillRef} color={'white'} >
            <Heading as={'h1'} mb={8} display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"> Skills</Heading>
            <Box display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg">
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    Html
            </Tag>
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    CSS
            </Tag>
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    JavaScript
            </Tag>
                <Tag bg='teal.400' borderRadius={3} >
                    React
            </Tag>
            </Box > <br />
            <Spacer />
            <Box display="flex"
                justifyContent="center"
                p={3}
                justify='space-between'
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg">
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    Node
            </Tag>
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    Mongo
            </Tag>
                <Tag bg='teal.400' borderRadius={3} mr={5}>
                    Express
            </Tag>
                <Tag bg='teal.400' borderRadius={3}>
                    FireBase
            </Tag>
            </Box>
        </Box>
    )
}

export default Skills
