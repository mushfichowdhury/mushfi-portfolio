import React from 'react';

import { Project } from './Project';

export const ProjectContainer = () => (
  <>
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
  </>
);
