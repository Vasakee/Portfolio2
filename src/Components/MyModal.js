import { Button } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react'
import Pic from './Dp.JPG'

function MyModal() {
    const { isOpen, Onpen, onClose } = useDisclosure()
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent >
                <ModalHeader display={'flex'} fontFamily='heading' justifyContent={'center'} fontSize='40px'>
                    Basil Dayigil
              </ModalHeader>
                <ModalCloseButton />
                <ModalBody display={'flex'} flexDirection='column' alignItems={'center'} justifyContent='space-between' >
                    <Image src={Pic} alt={'Basil Dayigil'} borderRadius='full' boxSize='150px' />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} >Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MyModal
