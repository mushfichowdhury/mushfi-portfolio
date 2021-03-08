import { Flex, Spacer, Heading, Grid, Stack, Text, Icon } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Links } from './Links'
import theme from '../theme';
const { gunmetal, phthalogreen, timberwolf, culturedwhite, mintcream } = theme.colors;

export const Hero = ({ title, subtitle }) => (
    <Flex
    textAlign="center"
    justifyContent="center"
    alignItems="center"
    height="80vh"
  >
    <Grid templateRows="repeat(3, 1fr)" >
      <Heading as="h1" className="animate__animated animate__fadeInUp" fontSize="7.5vw" textShadow="2px 2px #292F36">
        {title}
      </Heading>
      <Flex
        justifyContent="center"
        alignItems="center">
      <Stack
        direction={["column", "row"]}
        justifyContent="space-between"
      >
        <Text fontSize="1.5vw">
          <Icon as={ChevronRightIcon} />
          {subtitle[0]}
          </Text>
          <Spacer/>
        <Text fontSize="1.5vw">
          <Icon as={ChevronRightIcon} />
          {subtitle[1]}
          </Text>
          <Spacer/>

        <Text fontSize="1.5vw">
          <Icon as={ChevronRightIcon} />
          {subtitle[2]}
          </Text>
                    <Spacer/>
          <Text fontSize="1.5vw">
          <Icon as={ChevronRightIcon} />
          {subtitle[3]}
          </Text>
        </Stack>
      </Flex>
      <Links/>
    </Grid>
  </Flex>
)

Hero.defaultProps = {
  title: 'Mushfi Chowdhury',
  subtitle: ["software engineer", "photographer", "pokemon card collector", "vintage car enthusiast"],
}
