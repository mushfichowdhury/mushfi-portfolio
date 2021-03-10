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

export default class Index extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     fullpages: [
  //       {
  //         text: "Section 1"
  //       },
  //       {
  //         text: "Section 2"
  //       },
  //       {
  //         text: 'Section 3',
  //       }
  //     ]
  //   };
  // }

 onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }


  moveSectionDown(){
    fullpage_api.moveSectionDown();
  }

  render() {
    // const { fullpages } = this.state;

    // if (!fullpages.length) {
    //   return null;
    // }

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
      <Container height="100%">
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          scrollHorizontally = {true}
          // sectionsColor={this.state.sectionsColor}
          render={render =>
          (
            <>
            <ReactFullpage.Wrapper>
                <div className="section">
                <DarkModeSwitch />
                <HeroContainer height="100vh">
                    <Hero />
                </HeroContainer>
              </div>
                <div className="section">
                  <Main spacing={2} columns={[1, 2, 3]}>
                    <ProjectContainer />
                  </Main>
              </div>
              </ReactFullpage.Wrapper>
              </>
            )
          }
        />
        <Menu />
        {/* <HeroContainer height="100vh">
          <Hero />
        </HeroContainer>
        <Main spacing={2} columns={[1, 2, 3]}>
          <ProjectContainer />
        </Main>
        <DarkModeSwitch />
        <AboutMe />
        <Skills />
        <Footer /> */}
      </Container>
    )
  }
}
