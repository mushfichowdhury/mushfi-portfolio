import {
  Github,
  Medium,
  Linkedin,
} from '@icons-pack/react-simple-icons';
import { Link, HStack } from '@chakra-ui/react';

export const Links = () => (
    <HStack
        spacing="2em"
        justifyContent="center"
        alignItems="center"
    >
    <Link href="https://www.github.com/mushfichowdhury/" isExternal>
        <Github size="2em" />
    </Link>
    <Link href="https://www.linkedin.com/in/mushfi-chowdhury/" isExternal>
        <Linkedin size="2em" />
    </Link>
    <Link href="https://chowdhurymushfi.medium.com/" isExternal>
    <Medium size="2em" />
    </Link>
    </HStack>
)
