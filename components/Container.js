import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/core'

export const Container = (props) => {
    const { colorMode } = useColorMode()

    const bgColor = { light: 'gray.50', dark: 'gray.900' }

    const color = { light: 'black', dark: 'white' }
    return (
        <Flex
            direction="column"
            alignItems="center"
            justifyContent="flex-start"
            p={{ sm: 0, md: 10 }}
            ml={[0, 0, 0, '15%']}
            mr={[0, 0, 0, '15%']}
            bg={bgColor[colorMode]}
            color={color[colorMode]}
            {...props}
        />
    )
}