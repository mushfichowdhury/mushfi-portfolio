import { Flex, Spacer, Heading, Grid, Stack, Text, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Links } from './Links'
import theme from '../theme';
const { gunmetal, phthalogreen, timberwolf, culturedwhite, mintcream } = theme.colors;

export const AboutMe = ({ title, subtitle }) => (
    <Flex
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    height="80vh"
  >
      <Heading as="h1" data-aos="fade-right" className="animate__animated animate__fadeInUp" fontSize="7.5vw">
        {title}
      </Heading>
  </Flex>
)

AboutMe.defaultProps = {
  title: 'Mushfi Chowdhury',
  subtitle: ["software engineer", "photographer", "pokemon card collector", "vintage car enthusiast"],
}
