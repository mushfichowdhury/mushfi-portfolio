import { Flex, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import theme from '../theme';
const { gunmetal, phthalogreen, timberwolf, culturedwhite, mintcream } = theme.colors;

export const Container = (props) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: timberwolf, dark: phthalogreen }
  const headingColor = { light: phthalogreen, dark: mintcream }
  const textColor = { light: phthalogreen, dark: culturedwhite }

  const router = useRouter();
  const meta = {
    title: 'Mushfi - Software Engineer',
    description:
      'Mushfi owns a tortoise.',
    image: '/',
    type: 'website'
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="meta" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://mushfi.dev${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Mushfi Chowdhury" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      headingColor={headingColor[colorMode]}
      textColor={textColor[colorMode]}
      {...props}
      />
      </>
  )
}
