import React, { useRef, useEffect, useState, Suspense } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";

// Page State
import state from "./components/state";

// R3F
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useProgress } from "drei";

// React Spring
import { a, useTransition } from "@react-spring/web";
//Intersection Observer
import { useInView } from "react-intersection-observer";


const HTMLContent = ({
  domContent,
  children,
  bgColor,
  position,
}) => {
  const ref = useRef();
  useFrame(() => (ref.current += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });
  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className='container'>
            <h1 className='title'>{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  );
};

function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}

export default function App() {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Header />
      <Canvas
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          {/* Hero */}
          <HTMLContent
            domContent={domContent}
            bgColor='#D53734'
            position={250}>
            <span>Hello! </span>
            <span>My name is Mushfi.</span>
            <span>I'm a fullstack engineer.</span>
          </HTMLContent>
          {/* About Me */}
          <HTMLContent
            domContent={domContent}
            bgColor='#009DDC'
            position={0}>
            <span>About Me:</span>
          </HTMLContent>
          {/* Projects */}
          <HTMLContent
            domContent={domContent}
            bgColor='#009B72'
            position={-250}>
            <span>Projects</span>
          </HTMLContent>
          {/* Projects Part 2 */}
          <HTMLContent
            domContent={domContent}
            bgColor='#F26430'
            position={-500}>
            <span>Bundlezzz</span>
          </HTMLContent>
          {/* Resume */}
          <HTMLContent
            domContent={domContent}
            bgColor='#6761A8'
            position={-750}>
            <span>Resume</span>
          </HTMLContent>
          {/* Contact Me */}
          <HTMLContent
            domContent={domContent}
            bgColor='#FFCE0A'
            position={-1000}>
            <span>Contact Me!</span>
          </HTMLContent>
        </Suspense>
      </Canvas>
      <Loader />
      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}
