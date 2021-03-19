import { Flex, useColorMode } from '@chakra-ui/react';
import theme from '../theme';
import { Hero } from './Hero';
const { gunmetal, phthalogreen, timberwolf, culturedwhite, mintcream } = theme.colors;

export const HeroContainer = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: timberwolf, dark: phthalogreen }
  const headingColor = { light: phthalogreen, dark: mintcream }
  const textColor = { light: phthalogreen, dark: culturedwhite }
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      headingColor={headingColor[colorMode]}
      textColor={textColor[colorMode]}
      {...props}
    >
      <Hero/>
    </Flex>
  )
}
