import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import { useEffect } from 'react'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import Icon from '@hackclub/icons'
import Image from 'next/image'
import ExecuteBig from '../public/codedaydc_hack.jpg'
import HackCamp from '../public/sf.jpg'
import HackerGames from '../public/0img_20210830_161125.jpg'
import LaptopDonations from '../public/0screenshot_2021-10-03_at_4.20.30_pm.png'
import Kerala from '../public/0img-20210918-wa0091.jpg'
import HackPenn from '../public/0color_pop.jpg'
import ElonAMA from '../public/a7605379-7582-4aac-8f44-45bbdfca0cfa%2F2020-05-16_screenshot.jpg'
import SpaceX from '../public/0spacex_and_hack_club.jpg'
import FrontlineNotes from '../public/1ae6618_52a8d7fbf108462a8c540fd13973b879_mv2.jpg'
import Flagship from '../public/flagship.png'
import MAHacks from '../public/0screenshot_2021-10-03_at_4.07.51_pm.png'
import HackCamp2020 from '../public/0img_6447.jpg'
import InnovationCircuit from '../public/0screenshot_2021-10-03_at_3.45.54_pm.png'
import WindyCity from '../public/6screenshot_2021-10-03_at_3.29.29_pm.png'
import CharlotteBridgeEditor from '../public/chea-waters-evans-1-20210323-1536x1025.jpg'
import ZephyrFun from '../public/0screenshot_2021-10-03_at_3.59.34_pm.png'

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export default function Index() {
  useEffect(() => {
    console.log(`
               __
              / _)
     _.----._/ /
    /         /
 __/ (  | (  |
/__.-'|_|--|_|
see the source: https://github.com/hackclub/hackfoundation.org
    `)
  })
  let events = [
    {
      colour: '#ec3750',
      image: ZephyrFun,
      bankURL: 'https://bank.hackclub.com/zephyr',
      alt: 'Hacking onboard The Hacker Zephyr'
    },
    {
      colour: '#ff8c37',
      image: CharlotteBridgeEditor,
      bankURL: 'https://bank.hackclub.com/the-charlotte-bridge',
      alt: 'Chea Evans, the Editor of the Charlotte Bridge'
    },
    {
      colour: '#f1c40f',
      image: WindyCity,
      bankURL: 'https://bank.hackclub.com/169',
      alt: 'Team selfie at Windy City Hacks!'
    },
    {
      colour: '#33d6a6',
      image: InnovationCircuit,
      bankURL: 'https://bank.hackclub.com/the-innovation-circuit',
      alt: 'The Innovation Circuit squad doing some late night bug fixing'
    },
    {
      colour: '#5bc0de',
      image: HackCamp2020,
      bankURL: 'https://twitter.com/hackcamp2020',
      alt: 'Hacker at Hack Camp 2020'
    },
    {
      colour: '#338eda',
      image: MAHacks,
      bankURL: 'https://mahacks.com',
      alt: 'Hackers hanging out at MAHacks 2019'
    },
    {
      colour: '#a633d6',
      image: Flagship,
      bankURL: 'https://flagship.hackclub.com',
      alt: 'Hack Club leaders helping one another at Flagship'
    },
    {
      colour: '#ec3750',
      image: FrontlineNotes,
      bankURL: 'https://www.notesforsupport.org',
      alt: 'Frontline workers receiving notes for support'
    },
    {
      colour: '#ff8c37',
      image: SpaceX,
      bankURL: 'https://bank.hackclub.com/zephyr',
      alt: 'Hack Clubbers at SpaceX after the Hacker Zephyr'
    },
    {
      colour: '#ec3750',
      image: ElonAMA,
      bankURL: 'https://hackclub.com/elon/',
      alt: 'Hack Club AMA with Elon Musk'
    },
    {
      colour: '#33d6a6',
      image: HackPenn,
      bankURL: 'https://bank.hackclub.com/hackpenn',
      alt: 'Hacker at Hack Pennsylvania 2019'
    },
    {
      colour: '#5bc0de',
      image: Kerala,
      bankURL: 'https://india.hackclub.com',
      alt: 'Hack Club meetup in Kerala'
    },
    {
      colour: '#338eda',
      image: LaptopDonations,
      bankURL: 'https://www.youtube.com/watch?v=rumyxiDst3w',
      alt: 'Delivering laptops to hackers in rural India'
    },
    {
      colour: '#a633d6',
      image: HackerGames,
      bankURL: 'https://bank.hackclub.com/wild-wild-west',
      alt: 'Winner of the Hacker Games 2021'
    },
    {
      colour: '#ec3750',
      image: HackCamp,
      bankURL: 'https://camp.hackclub.com/',
      alt: 'The first Hack Camp in SF'
    },
    {
      colour: '#ff8c37',
      image: ExecuteBig,
      bankURL: 'https://executebig.org/journals/moveout/',
      alt: 'An ExecuteBig event, a nonprofit that began on Bank'
    }
  ]

  return (
    <Grid
      sx={{
        gridTemplateColumns: '1fr 100vh',
        '@media screen and (orientation: portrait)': {
          gridTemplateColumns: '1fr!important'
        },
        '@media screen and (max-width: calc(100vh + 600px))': {
          gridTemplateColumns: '1fr calc(100vh * 2/3)'
        }
      }}
    >
      <Meta
        as={Head}
        name="The Hack Foundation"
        title="The Hack Foundation"
        description="The Hack Foundation partners with over 330 non-profit organizations including Hack Clubs, hackathons, Little League teams, newspapers, and everything in between to act as their legal and financial entity."
        image="https://camo.githubusercontent.com/bab1c7d453175fc8658c1149be2b044107d10d6ef857d171c547e79e4fdf4632/68747470733a2f2f636c6f75642d6b31386337677271632d6861636b2d636c75622d626f742e76657263656c2e6170702f307370616365785f616e645f6861636b5f636c75622e6a7067"
      />
      <Container
        py={4}
        px={4}
        sx={{
          maxHeight: ['none', '100vh'],
          overflow: ['visible', 'scroll'],
          fontSize: '1.25rem',
          '@media screen and (orientation: portrait)': {
            maxHeight: 'none'
          }
        }}
      >
        <Heading
          as="h1"
          sx={{
            color: '#ec3750',
            borderBottom: 'rgba(229,231,235,1) solid 2px',
            fontSize: ['1.7rem', '2.5rem'],
            pr: [2, 4],
            mb: 3,
            width: 'max-content'
          }}
        >
          The Hack Foundation
        </Heading>
        <p className="mt-0" style={{ marginTop: '10px!important' }}>
          The Hack Foundation (EIN: 81-2908499) was founded in 2016 to serve as
          the legal entity for{' '}
          <a target="_blank" className="a" href="https://hackclub.com">
            Hack Club
          </a>
          , a nonprofit network of high schoolers creating the coding education
          they wish they could have.
        </p>
        <p>
          In 2018, The Hack Foundation expanded to act as a nonprofit{' '}
          <a
            target="_blank"
            className="a"
            href="https://en.wikipedia.org/wiki/Fiscal_sponsorship"
          >
            fiscal sponsor
          </a>{' '}
          for Hack&nbsp;Clubs, hackathons, community organizations, and other
          for-good projects.
        </p>
        <p>
          Today, hundreds of diverse groups ranging from a{' '}
          <a
            target="_blank"
            className="a"
            href="https://bank.hackclub.com/the-charlotte-bridge"
          >
            small town newspaper in Vermont
          </a>{' '}
          to{' '}
          <a
            target="_blank"
            className="a"
            href="https://bank.hackclub.com/hackpenn"
          >
            the largest high-school hackathon in Pennsylvania
          </a>{' '}
          are fiscally sponsored by The Hack Foundation. Partnered organizations
          receive the benefits of 501(c)(3) nonprofit status, administrative and
          backoffice support, financial oversight, and transparency tools.
        </p>
        <p>
          If you would like to learn more about partnering with The Hack
          Foundation for your organization,{' '}
          <a target="_blank" className="a" href="https://hackclub.com/bank/">
            please see here.
          </a>
        </p>
        <p>
          The Hack Foundation and all its software has been built over the years
          by teenagers at Hack Club. Today's supporters include Elon Musk,
          Vitalik Buterin, Google.org, among many others and hundreds of
          individual supporters.
        </p>
        <p>
          As it grows, the Hack Foundation is exploring ways in which it can be
          responsible, as part of this we have recently made{' '}
          <a target="_blank" className="a" href="https://bank.hackclub.com/hq/">
            our entire finances 100% transparent
          </a>
          .
        </p>
        <Box sx={{ borderBottom: 'rgba(229,231,235,1) solid 2px' }} />
        <Grid columns={['1fr', '1fr 1fr']} my={3}>
          <div>
            <h3 style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>
              Our Board
            </h3>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Text sx={{ pr: 3 }}>
                <a
                  target="_blank"
                  className="a"
                  href="https://github.com/zachlatta"
                >
                  Zach Latta
                </a>
              </Text>
              <Text sx={{ pr: 3 }}>
                <a
                  target="_blank"
                  className="a"
                  href="https://twitter.com/ChristinaAsquit"
                >
                  Christina Asquith
                </a>
              </Text>
              <Text sx={{ pr: 3 }}>
                <a
                  target="_blank"
                  className="a"
                  href="https://twitter.com/mojombo"
                >
                  Tom Preston-Werner
                </a>
              </Text>
              <a target="_blank" className="a" href="https://twitter.com/sqs">
                Quinn Slack
              </a>
            </Box>
          </div>
          <div>
            <h3 style={{ marginBlockStart: '0em', marginBlockEnd: '0em' }}>
              990s Tax Forms
            </h3>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <span style={{ marginRight: '12px' }}>2020 (TBD)</span>
              <a
                target="_blank"
                className="a"
                style={{ marginRight: '12px' }}
                href="https://apps.irs.gov/pub/epostcard/cor/812908499_201912_990_2021022417751020.pdf"
              >
                2019
              </a>
              <a
                target="_blank"
                className="a"
                style={{ marginRight: '12px' }}
                href="https://apps.irs.gov/pub/epostcard/cor/812908499_201812_990_2020013017086607.pdf"
              >
                2018
              </a>
              <a
                target="_blank"
                className="a"
                style={{ marginRight: '12px' }}
                href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf"
              >
                2017
              </a>
              <a
                target="_blank"
                className="a"
                style={{ marginRight: '12px' }}
                href="https://apps.irs.gov/pub/epostcard/cor/812908499_201612_990EZ_2019080116538191.pdf"
              >
                2016
              </a>
            </Box>
          </div>
        </Grid>
        <Box sx={{ borderBottom: 'rgba(229,231,235,1) solid 2px', mb: 3 }} />
        <Box sx={{ margin: 'auto', textAlign: 'center', mt: 4 }}>
          <a href="https://hackclub.com/">
            <img
              src="https://assets.hackclub.com/flag-standalone.png"
              width="100px"
            />
          </a>
        </Box>
      </Container>
      <Grid
        sx={{
          gridGap: '0px',
          background: '#000',
          maxHeight: '100vh',
          overflow: 'hidden',
          gridTemplateColumns: '25vh 25vh 25vh 25vh',
          '@media screen and (orientation: portrait)': {
            gridTemplateColumns: [
              '1fr 1fr 1fr!important',
              '1fr 1fr 1fr 1fr!important'
            ],
            gridRow: 1,
            maxHeight: ['66vw']
          },
          '@media screen and (max-width: calc(100vh + 600px))': {
            gridTemplateColumns:
              'calc(100vh * 2/9) calc(100vh * 2/9) calc(100vh * 2/9)'
          }
        }}
      >
        {events.map((event, i) => (
          <Box
            sx={{
              position: 'relative',
              height: '25vh',
              '@media screen and (orientation: portrait)': {
                height: ['33vw', '25vw']
              }
            }}
          >
            <Box
              as="a"
              title={event.alt}
              href={event.bankURL}
              key={event.bankURL + '-' + i}
              target="_blank"
              sx={{
                zIndex: 999,
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `linear-gradient(90deg, rgba(${
                  hexToRgb(event.colour).r
                },${hexToRgb(event.colour).g},${
                  hexToRgb(event.colour).b
                },0.5) 0%, rgba(${hexToRgb(event.colour).r},${
                  hexToRgb(event.colour).g
                },${hexToRgb(event.colour).b},0.5) 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                '&>.external': {
                  opacity: 0,
                  transition: 'opacity 0.3s'
                },
                ':hover': {
                  '&>.external': {
                    opacity: 1,
                    transition: 'opacity 0.2s'
                  }
                }
              }}
            >
              <Box
                sx={{ color: 'white', float: 'right', p: 1 }}
                className="external"
              >
                <Icon glyph="external" />
              </Box>
            </Box>
            <Image
              placeholder="blur"
              src={event.image}
              alt={event.alt}
              layout="fill"
              objectFit="cover"
              className="next-image"
            />
          </Box>
        ))}
      </Grid>
      <style>
        {`
          .a, .underline {
            -webkit-text-decoration-color: rgba(0,0,0,.2);
            text-decoration-color: rgba(0,0,0,.2);
          }

          a {
            text-decoration: underline;
            color: inherit;
          }
          
          .a:hover {
              text-decoration:none
          }
          
          .a:hover {
              cursor: pointer;
              --tw-bg-opacity: 1;
              background-color: rgba(252, 211, 77, var(--tw-bg-opacity));
              --tw-bg-opacity:0.2
          }
          .next-image{
            position: absolute;
            top: 0;
            z-index: 0;
            height: 100%;
            width: 100%;
          }
          `}
      </style>
    </Grid>
  )
}
