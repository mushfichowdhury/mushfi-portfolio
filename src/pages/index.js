import {
  Icon
} from '@chakra-ui/react'
import React from "react";
import ReactDOM from "react-dom";
import ProjectContainer from '../components/ProjectContainer'
import { Hero } from '../components/Hero'
import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import { Footer } from '../components/Footer'
import { HeroContainer } from '../components/HeroContainer'
import { AboutMe } from '../components/AboutMe'
import { Skills } from '../components/Skills'
import ReactFullpage from "@fullpage/react-fullpage";
import Head from 'next/head'
import { ChevronDownIcon } from '@chakra-ui/icons'

const pages = [
  {
    page: <Hero/>
  },
  {
    page: <AboutMe/>
  },
  {
    page: <Skills/>
  }
]
export default class Index extends React.Component {
 onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
  }


  moveSectionDown(){
    fullpage_api.moveSectionDown();
  }

  render() {
    if (!pages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          bottom: 0,
          zIndex: 100,
          width: "1vw"
        }}
      >
      <Icon as={ChevronDownIcon} onClick={() => this.moveSectionDown()}>
        Move Section Down
      </Icon>
      </div>
    );

    return (
      <Container>
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          scrollHorizontally = {true}
          // sectionsColor={this.state.sectionsColor}
          render={render =>
          (
              <ReactFullpage.Wrapper>
              {pages.map(p => (
                  <div className="section">
                  {p.page}
                  </div>
                  )
                  )}
              </ReactFullpage.Wrapper>
            )
          }
        />
        <Menu />
      </Container>
    )
  }
}
