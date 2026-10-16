import { Box, Container, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'

export default function Guide() {
  return (
    <>
      <Meta
        as={Head}
        title="Make a Website – The Hack Foundation"
        description="A step-by-step guide to building and publishing your own tribute website using HTML, CSS, and GitHub Pages."
        image="https://assets.hackclub.com/flag-orpheus-top.svg"
      />

      {/* Nav */}
      <Box
        as="nav"
        sx={{
          bg: 'white',
          borderBottom: '2px solid',
          borderColor: '#ec3750',
          px: [3, 4],
          py: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 3
        }}
      >
        <img
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club flag"
          style={{ height: 40 }}
        />
        <Box>
          <Text sx={{ fontWeight: 'bold', fontSize: [1, 2], color: '#1f2d3d' }}>
            The Hack Foundation
          </Text>{' '}
          <Text sx={{ fontSize: 0, color: '#6b7280' }}>Guide</Text>
        </Box>
      </Box>

      {/* Hero */}
      <Box
        sx={{
          bg: '#ec3750',
          color: 'white',
          py: [5, 6],
          px: [3, 4]
        }}
      >
        <Container sx={{ maxWidth: 800 }}>
          <Text
            sx={{
              fontSize: 0,
              fontWeight: 'bold',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              opacity: 0.85,
              mb: 2
            }}
          >
            Step-by-step guide
          </Text>
          <Heading
            as="h1"
            sx={{
              fontSize: [5, 6],
              fontWeight: 900,
              lineHeight: 1.1,
              mb: 3
            }}
          >
            Make a Website
          </Heading>
          <Text sx={{ fontSize: [2, 3], opacity: 0.9, mb: 4, maxWidth: 560 }}>
            Build a fan site for something you love — a game, show, book,
            artist, or food — using HTML, CSS, and GitHub Pages.
          </Text>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
            <Box
              as="a"
              href="https://guides.horizons.hackclub.com/pdfs/website-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                bg: 'white',
                color: '#ec3750',
                fontWeight: 'bold',
                fontSize: 2,
                px: 4,
                py: 2,
                borderRadius: 6,
                textDecoration: 'none',
                '&:hover': { opacity: 0.9 }
              }}
            >
              ↓ Download PDF
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Content */}
      <Container sx={{ maxWidth: 800, py: [5, 6], px: [3, 4] }}>
        {/* Overview */}
        <Section>
          <SectionHeading>Overview</SectionHeading>
          <Body>
            Personal websites used to be everywhere — pages full of personality
            and creativity that reflected exactly what their owners cared about.
            This guide will help you build a tribute site for something you
            love, learning HTML and CSS along the way, and publish it live on
            the internet for free using GitHub Pages.
          </Body>
          <Body>
            You will learn what to make, how to style it, and how to share it
            with the world.
          </Body>
        </Section>

        <Divider />

        {/* What to make */}
        <Section>
          <SectionHeading>What to make?</SectionHeading>
          <Body>
            Pick a topic you love — a video game, a TV show, a book, a musician,
            a food, anything. Look at what makes it visually distinctive: its
            fonts, color schemes, in-game menus, album art, or iconic imagery.
          </Body>
          <Body>
            Browse{' '}
            <a
              href="https://neocities.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Neocities
            </a>{' '}
            for inspiration — it is full of creative personal sites. Let your
            personality come through.
          </Body>
        </Section>

        <Divider />

        {/* How to make it */}
        <Section>
          <SectionHeading>How to make it</SectionHeading>
          <Body>Your site is built with two technologies:</Body>
          <Box as="ul" sx={{ pl: 4, mb: 3 }}>
            <Box as="li" sx={{ mb: 2 }}>
              <Text sx={{ fontWeight: 'bold', display: 'inline' }}>HTML</Text>{' '}
              forms the structure of the page — headings, paragraphs, images,
              links.
            </Box>
            <Box as="li" sx={{ mb: 2 }}>
              <Text sx={{ fontWeight: 'bold', display: 'inline' }}>CSS</Text>{' '}
              controls how it looks — colors, fonts, layout, spacing.
            </Box>
          </Box>
          <Body>
            As an example, the guide walks through building an
            Undertale-inspired tribute page with pixel art, monospace text, and
            black boxes with white outlines — built from a hero image, a text
            box, and a status bar using inline CSS.
          </Body>
          <Body>
            A second example uses the album <em>Citrona</em> by Flipturn to show
            how to take cues from a color palette and typography, move styles
            into a separate <code>styles.css</code> file, and link it from your
            HTML.
          </Body>
        </Section>

        <Divider />

        {/* Setup */}
        <Section>
          <SectionHeading>Setup</SectionHeading>
          <Body>Before you write any code, get your tools ready:</Body>
          <StepList
            steps={[
              {
                n: 1,
                title: 'Create a GitHub account',
                body: 'Go to github.com and sign up for a free account. GitHub is where your code will live.'
              },
              {
                n: 2,
                title: 'Install GitHub Desktop',
                body: 'Download GitHub Desktop from desktop.github.com. It gives you a simple way to save and sync your code without using the command line.'
              },
              {
                n: 3,
                title: 'Install Visual Studio Code',
                body: 'Download VS Code from code.visualstudio.com. This is the text editor you will write your HTML and CSS in.'
              },
              {
                n: 4,
                title: 'Create a new public repository',
                body: 'In GitHub Desktop, create a new repository. Give it a name like "my-tribute-site" and make sure visibility is set to Public.'
              },
              {
                n: 5,
                title: 'Add an index.html file',
                body: 'Open the repository folder in VS Code and create a new file called index.html. This is your homepage.'
              },
              {
                n: 6,
                title: 'Install the Live Server extension',
                body: 'In VS Code, open the Extensions panel and install "Live Server" by Ritwick Dey. Click "Go Live" in the bottom bar to preview your site in the browser as you build it.'
              }
            ]}
          />
        </Section>

        <Divider />

        {/* Building your site */}
        <Section>
          <SectionHeading>Building your site</SectionHeading>
          <Body>
            Start with a basic HTML skeleton in your <code>index.html</code>:
          </Body>
          <CodeBlock>{`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Tribute Site</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my tribute to something I love.</p>
  </body>
</html>`}</CodeBlock>
          <Body>
            Then create a <code>styles.css</code> file next to it and start
            adding styles. For example, to set a background color and font:
          </Body>
          <CodeBlock>{`body {
  background-color: #000;
  color: #fff;
  font-family: monospace;
  padding: 2rem;
}`}</CodeBlock>
          <Body>
            From here, look at what makes your chosen topic distinctive and try
            to recreate that feeling on the page. Add images with{' '}
            <code>&lt;img&gt;</code>, links with <code>&lt;a&gt;</code>, and
            style everything with CSS until it feels right.
          </Body>
        </Section>

        <Divider />

        {/* Publish */}
        <Section>
          <SectionHeading>Publishing your site</SectionHeading>
          <Body>
            Once your site looks the way you want, publish it live for free
            using GitHub Pages:
          </Body>
          <StepList
            steps={[
              {
                n: 1,
                title: 'Commit your changes',
                body: 'In GitHub Desktop, you will see your changed files listed. Write a short commit message like "Add my tribute site" and click Commit to main.'
              },
              {
                n: 2,
                title: 'Push to GitHub',
                body: 'Click "Push origin" to upload your code to GitHub. Your files are now online.'
              },
              {
                n: 3,
                title: 'Enable GitHub Pages',
                body: 'Go to your repository on github.com. Click Settings → Pages. Under "Source," select the main branch and click Save.'
              },
              {
                n: 4,
                title: 'Visit your live site',
                body: 'After a minute or two, your site will be live at YOURUSERNAME.github.io/nameofyourrepository. Share that link with anyone!'
              },
              {
                n: 5,
                title: 'Making updates',
                body: 'Edit your files in VS Code, commit, and push again. Your live site will update automatically within a few minutes.'
              }
            ]}
          />
        </Section>

        <Divider />

        {/* You're done */}
        <Section>
          <SectionHeading>{"You're done!"}</SectionHeading>
          <Body>
            You have built and published a website. That is a real skill — the
            same tools used here (HTML, CSS, GitHub) power sites across the web.
          </Body>
          <Body>
            From here, keep experimenting: add more pages, try JavaScript for
            interactivity, or take on a bigger project. If you get stuck, the
            Hack Club Slack community is full of people happy to help.
          </Body>
          <Box sx={{ mt: 4 }}>
            <Box
              as="a"
              href="https://guides.horizons.hackclub.com/pdfs/website-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                bg: '#ec3750',
                color: 'white',
                fontWeight: 'bold',
                fontSize: 2,
                px: 4,
                py: 2,
                borderRadius: 6,
                textDecoration: 'none',
                '&:hover': { opacity: 0.85 }
              }}
            >
              ↓ Download the full PDF guide
            </Box>
          </Box>
        </Section>
      </Container>

      {/* Footer */}
      <Box
        as="footer"
        sx={{
          borderTop: '1px solid',
          borderColor: '#e5e7eb',
          py: 4,
          px: [3, 4],
          textAlign: 'center'
        }}
      >
        <Text sx={{ fontSize: 1, color: '#6b7280' }}>
          © {new Date().getFullYear()} The Hack Foundation · 501(c)(3) nonprofit
          ·{' '}
          <a
            href="https://thehackfoundation.org"
            style={{ color: '#ec3750', textDecoration: 'none' }}
          >
            thehackfoundation.org
          </a>
        </Text>
      </Box>
    </>
  )
}

function Section({ children }) {
  return <Box sx={{ mb: 5 }}>{children}</Box>
}

function SectionHeading({ children }) {
  return (
    <Heading
      as="h2"
      sx={{
        fontSize: [3, 4],
        fontWeight: 800,
        color: '#1f2d3d',
        mb: 3,
        pb: 2,
        borderBottom: '3px solid',
        borderColor: '#ec3750',
        display: 'inline-block'
      }}
    >
      {children}
    </Heading>
  )
}

function Body({ children }) {
  return (
    <Text
      as="p"
      sx={{
        fontSize: [1, 2],
        color: '#374151',
        lineHeight: 1.75,
        mb: 3
      }}
    >
      {children}
    </Text>
  )
}

function Divider() {
  return (
    <Box
      sx={{
        borderTop: '1px solid',
        borderColor: '#e5e7eb',
        my: 5
      }}
    />
  )
}

function StepList({ steps }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {steps.map(step => (
        <Box
          key={step.n}
          sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}
        >
          <Box
            sx={{
              minWidth: 36,
              height: 36,
              borderRadius: '50%',
              bg: '#ec3750',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              mt: '2px'
            }}
          >
            {step.n}
          </Box>
          <Box>
            <Text
              sx={{ fontWeight: 'bold', fontSize: 2, color: '#1f2d3d', mb: 1 }}
            >
              {step.title}
            </Text>
            <Text sx={{ fontSize: [1, 2], color: '#374151', lineHeight: 1.7 }}>
              {step.body}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

function CodeBlock({ children }) {
  return (
    <Box
      as="pre"
      sx={{
        bg: '#1f2d3d',
        color: '#e2e8f0',
        p: 3,
        borderRadius: 8,
        fontSize: 1,
        lineHeight: 1.6,
        overflowX: 'auto',
        mb: 3,
        fontFamily: 'monospace'
      }}
    >
      <code>{children}</code>
    </Box>
  )
}
