import {
  Link as ChakraLink,
  Text
} from '@chakra-ui/react'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { ProjectContainer } from '../components/ProjectContainer'
import { HeroContainer } from '../components/HeroContainer'

const Index = () => (
  <Container height="100%">
    <HeroContainer height="100vh">
      <Hero />
      </HeroContainer>
    <Main spacing={2} columns={[1, 2, 3]}>
      {/* <ProjectContainer /> */}
    </Main>
    <DarkModeSwitch />
    <Footer/>
  </Container>
)

export default Index
