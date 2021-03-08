import { Flex, Link } from '@chakra-ui/react'

export const Footer = (props) => (
    <>
    <Flex
        as="footer"
        position="fixed"
        bottom="0"
        width="100%"
        maxWidth="48rem"
        justifyContent="center"
        alignItems="center"
        pb="4rem"
        pt="12rem"
        py={5}
        {...props}>
    <Link pb="10px" color="green.500" href="mailto:chowdhurymushfi@gmail.com">
                Hit me up
    </Link>
    </Flex>
    </>
)

