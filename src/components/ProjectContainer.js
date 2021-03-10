import React from 'react';
import { Project } from './Project';
import { VStack } from '@chakra-ui/react';

export default function ProjectContainer() {
  return (
    <VStack>
      <div
      data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="3000"
            data-aos-offset="200"
      >
      <Project
        title="Bundles of Joy"
        image="/"
        website="https://bundlesofjoy.netlify.app/"
        frontend="https://github.com/mushfichowdhury/bundlesofjoy-frontend"
        backend="https://github.com/mushfichowdhury/bundlesofjoy-backend"
        description="My current personal project, converting rPlants into a scalable and lighter-weight Sanity.io and Next.js site."
        tech={[
          'React',
          'Next.js',
          'Chakra-UI',
          'Sanity.io',
          'Tailwind',
          'HTML',
          'CSS'
        ]}
      />
      </div>
      <div
        data-aos="fade-left"
      data-aos-delay="50"
        data-aos-duration="3000"
            data-aos-offset="200"
      >
      <Project
        title="PickFlix"
        image="/"
        website="https://pick-flix.netlify.app/welcome"
        frontend="https://github.com/mushfichowdhury/pickflix-frontend"
        backend="https://github.com/mushfichowdhury/pickflix-backend"
        description="Web forum with live chat designed to encourage new developers to collaborate on projects."
        tech={[
          'React',
          'Redux',
          'Rails',
          'Framer Motion',
          'PostgreSQL',
          'JWT',
          'BCryrpt',
          'ActionCable',
          'Redis',
          'Material-UI',
          'styled-components'
        ]}
      />
      </div>
      <div
        data-aos="fade-right"
      data-aos-delay="50"
        data-aos-duration="3000"
            data-aos-offset="200"
      >
      <Project
        image="/"
        website="https://funko-shop.vercel.app/"
        title="Funko Shop"
        repo="https://github.com/mushfichowdhury/funko-shop"
        description="E-commerce platform to connect users to environmentally conscious sourced houseplants"
        tech={[
          'React',
          'Rails',
          'styled-components',
          'CSS',
          'HTML',
          'PostgreSQL',
          'JWT',
          'Leaflet',
          'OSM',
          'GeoJSON',
          'BCrypt'
        ]}
        />
        </div>
    </VStack>
  )
};
