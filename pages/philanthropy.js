import { Box, Container, Grid, Heading, Text } from 'theme-ui'
import Head from 'next/head'
import Meta from '@hackclub/meta'

const RED = '#ec3750'
const BORDER = 'rgba(229,231,235,1)'

const donors = {
  '$5M – $10M': ['Tom Preston-Werner (9x)', 'Musk Foundation (6x)'],
  '$1M – $5M': [
    'Dr. Lisa Su',
    'Michael Dell (3x)',
    'Patrick J. McGovern Foundation (3x)',
    'Craig Newmark (4x)',
    'Tobi Lutke',
    'Advanced Micro Devices',
    'The Libermans',
    'Lizzy Danhakl and Andrew Reed (4x)',
    'Endless Network (5x)'
  ],
  '$500k – $1M': [
    'GitHub Education (6x)',
    'Argosy Foundation (5x)',
    'FUTO (3x)',
    'Joe Liemandt'
  ],
  '$200k – $500k': [
    'Ron Conway (6x)',
    'Adam Ross (3x)',
    'Gwynne Shotwell',
    'Ron Baron',
    'Jack Dorsey',
    'Vitalik Buterin'
  ],
  '$100k – $200k': [
    'Quinn Slack (3x)',
    'Peter Levine',
    'Mitchell and Amy Hashimoto',
    'Chuck and Marna Davis',
    'Proton Foundation',
    'Kellogg Foundation',
    'Pinkerton Foundation',
    'Gates Foundation'
  ]
}

const otherDonors = [
  'Dylan Field, Founder, Figma',
  'Guillermo Rauch, Founder, Vercel',
  'Taylor Otwell, Creator of Laravel',
  'Theo Bleier, Technical Staff, Simile',
  'Kevin Yang, Principal Researcher, Microsoft',
  'Amjad Masad, Cofounder, Replit',
  'Conrad Kramer, Cofounder, Workflow',
  'David Cramer, Cofounder, Sentry',
  'Mahmoud Abdelkader, CEO, Very Good Security',
  'Blake Lieberman, Partner, Rief Ventures'
]

const form990s = [
  {
    year: 2024,
    link: 'https://cdn.hackclub.com/019c4366-66a7-7b57-8103-5d7731c114d3/812908499_2024_202533219349309698_990.pdf'
  },
  {
    year: 2023,
    link: 'https://cdn.hackclub.com/019c4366-d33c-7b59-a778-f1a932036d43/812908499_2023_202423209349312247_990.pdf'
  },
  {
    year: 2022,
    link: 'https://cdn.hackclub.com/019c4367-399e-76b5-8198-66ab98fb6ea9/812908499_2022_202333199349306488_990.pdf'
  },
  {
    year: 2021,
    link: 'https://cdn.hackclub.com/019c4367-84af-7e6c-a8bc-cb7dabd69f9f/812908499_2021_202243189349308489_990.pdf'
  },
  {
    year: 2020,
    link: 'https://cdn.hackclub.com/019c4367-d7be-73b2-bf65-933c982b3d07/812908499_2020_202103239349300740_990.pdf'
  }
]

const annualReports = [
  {
    year: 2025,
    link: 'https://cdn.hackclub.com/019ff180-b929-7834-ad99-e263bcdd9a1d/2025%20Hack%20Club%20Annual%20Report.pdf'
  },
  {
    year: 2024,
    link: 'https://cdn.hackclub.com/019c4369-c21c-7436-9669-4ab80d4774a4/2024%20Annual%20Report.pdf'
  },
  {
    year: 2023,
    link: 'https://cdn.hackclub.com/019c4368-9ea2-76fb-96fc-d7859dffa59e/2023%20Annual%20Report.pdf'
  },
  {
    year: 2022,
    link: 'https://cdn.hackclub.com/019c436a-61fa-7c33-bd8d-d65b89446bff/2022%20Annual%20Report.pdf'
  }
]

const boardMembers = [
  { name: 'Tom Preston-Werner', title: 'Cofounder, GitHub' },
  { name: 'Quinn Slack', title: 'Cofounder and CEO, Amp' },
  {
    name: 'Ruth Cotter',
    title: 'Senior Vice President and Chief Administrative Officer, AMD'
  },
  { name: 'Zach Latta', title: 'Founder and Executive Director, Hack Club' },
  { name: 'Christina Asquith', title: 'Cofounder and President, Hack Club' }
]

const boardAdvisors = [
  { name: 'John Abele', title: 'Founder, Boston Scientific' },
  {
    name: 'Michael Dell',
    title: 'Founder, Chairman and CEO, Dell Technologies'
  }
]

const pressLogos = [
  {
    name: 'NBC5',
    href: 'https://www.mynbc5.com/article/nbc5-in-depth-burlingtons-hack-club-inspires-teens-to-build-with-artificial-intelligence/73375621'
  },
  {
    name: 'Business Insider',
    href: 'https://www.businessinsider.com/zach-lattas-hacker-club-got-him-on-forbes-30-under-30-2016-1'
  },
  {
    name: 'Wall Street Journal',
    href: 'https://www.wsj.com/articles/teen-hackers-try-to-convince-parents-they-are-up-to-good-11569922200'
  },
  {
    name: 'Forbes',
    href: 'https://www.forbes.com/sites/fastforward/2021/06/29/from-journalism-to-a-tech-nonprofit-this-coos-big-pivot-to-empower-the-next-generation-of-coders/'
  },
  {
    name: 'Chronicle of Philanthropy',
    href: 'https://www.philanthropy.com/article/nonprofits-need-to-embrace-transparency-even-if-the-supreme-court-rules-to-protect-donor-privacy'
  }
]

function Eyebrow({ children, sx = {} }) {
  return (
    <Text
      sx={{
        display: 'block',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: RED,
        mb: 2,
        ...sx
      }}
    >
      {children}
    </Text>
  )
}

function SectionHeading({ children }) {
  return (
    <Heading
      as="h2"
      sx={{
        fontSize: ['1.5rem', '2rem'],
        fontWeight: 800,
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        mb: 3
      }}
    >
      {children}
    </Heading>
  )
}

function Divider() {
  return <Box sx={{ borderBottom: `${BORDER} solid 2px`, my: 4 }} />
}

export default function Philanthropy() {
  return (
    <>
      <Meta
        as={Head}
        name="The Hack Foundation"
        title="Philanthropy — The Hack Foundation"
        description="Support Hack Club's mission to build a generation of teen makers. Learn how to donate and get involved."
        image="https://cdn.hackclub.com/019db4df-dc7a-7270-94b5-df621a60c7ca/splash.png"
      />

      {/* ── Nav ── */}
      <Box
        as="nav"
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          bg: 'background',
          borderBottom: `${BORDER} solid 1px`,
          px: [3, 4],
          py: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 3
        }}
      >
        <Box
          as="a"
          href="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            textDecoration: 'none'
          }}
        >
          <Text sx={{ fontWeight: 800, fontSize: '1rem', color: 'text' }}>
            The Hack Foundation
          </Text>
        </Box>
        <Box sx={{ display: ['none', 'flex'], alignItems: 'center', gap: 4 }}>
          <Box
            as="a"
            href="https://hackclub.com/fiscal-sponsorship"
            target="_blank"
            className="a"
            sx={{ fontSize: '0.9rem', color: 'secondary' }}
          >
            Fiscal Sponsorship
          </Box>
          <Box
            as="a"
            href="https://hcb.hackclub.com/hq/"
            target="_blank"
            className="a"
            sx={{ fontSize: '0.9rem', color: 'secondary' }}
          >
            Financials
          </Box>
          <Box
            as="a"
            href="https://hcb.hackclub.com/donations/start/hq?utm_source=hf-site&utm_medium=internal&utm_campaign=philanthropy_page&utm_content=nav"
            target="_blank"
            sx={{
              bg: RED,
              color: 'white',
              px: 3,
              py: 2,
              borderRadius: 6,
              fontSize: '0.875rem',
              fontWeight: 700,
              textDecoration: 'none',
              '&:hover': { bg: '#c0293f' }
            }}
          >
            Donate
          </Box>
        </Box>
      </Box>

      {/* ── Hero ── */}
      <Box
        sx={{
          bg: '#1a1d2e',
          color: 'white',
          py: [5, 6],
          textAlign: 'center',
          px: [3, 4]
        }}
      >
        <Box
          sx={{
            display: 'inline-block',
            bg: RED,
            color: 'white',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            px: 3,
            py: 1,
            borderRadius: 99,
            mb: 3
          }}
        >
          Philanthropy
        </Box>
        <Heading
          as="h1"
          sx={{
            fontSize: ['2rem', '2.8rem', '3.5rem'],
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            mb: 3,
            maxWidth: 700,
            mx: 'auto'
          }}
        >
          Invest in the future.{' '}
          <Box as="span" sx={{ color: RED }}>
            Empower the next generation.
          </Box>
        </Heading>
        <Text
          sx={{
            fontSize: ['1rem', '1.15rem'],
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 520,
            mx: 'auto',
            mb: 4,
            lineHeight: 1.6
          }}
        >
          Led by young engineers, Hack Club already reaches tens of thousands of
          teenagers. With your support, Hack Club can grow to hundreds of
          thousands more.
        </Text>
      </Box>

      {/* ── Mission ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Box>
          <Eyebrow>Our Mission</Eyebrow>
          <SectionHeading>We back teens with big ideas.</SectionHeading>
          <Text as="p" sx={{ color: 'secondary', lineHeight: 1.7, mb: 3 }}>
            In the next ten years, Hack Club will discover, foster, and inspire
            thousands more teenagers to use technical skills to solve problems.
          </Text>
          <Text as="p" sx={{ color: 'secondary', lineHeight: 1.7, mb: 3 }}>
            Hack Club is always free for teenagers. With your support, Hack Club
            can bring free computer science education, a hacker mindset, and an
            equal shot at success to every teenager, regardless of where they
            are from.
          </Text>
          <Text as="p" sx={{ color: 'secondary', lineHeight: 1.7, mb: 3 }}>
            Over time, Hack Clubbers will reshape societies as entrepreneurs,
            environmentalists, political leaders, activists, and policy makers.
            We help shape the values of these future leaders.
          </Text>
          <Text as="p" sx={{ color: 'secondary', lineHeight: 1.7, mb: 3 }}>
            We need your support to make this vision a reality.
          </Text>
          <Box
            as="blockquote"
            sx={{
              borderLeft: `4px solid ${RED}`,
              pl: 3,
              my: 4,
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: '1.1rem',
              lineHeight: 1.45
            }}
          >
            &ldquo;With major support, I am confident Hack Club will change the
            world.&rdquo;
            <Box
              as="cite"
              sx={{
                display: 'block',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '0.875rem',
                color: 'secondary',
                mt: 2
              }}
            >
              — Tom Preston-Werner, GitHub Cofounder
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider />

      {/* ── Contact / Reach Out ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Eyebrow>To discuss a gift</Eyebrow>
        <SectionHeading>Reach out directly.</SectionHeading>
        <Grid columns={['1fr', null, '1fr 1fr']} gap={[3, 4]}>
          <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: 12, p: 4 }}>
            <Text sx={{ fontWeight: 800, fontSize: '1.2rem', mb: 1, display: 'block' }}>
              Christina Asquith
            </Text>
            <Text sx={{ color: 'secondary', fontSize: '0.875rem', mb: 3, display: 'block' }}>
              Cofounder, President, and Board Member
            </Text>
            <Box
              as="a"
              href="mailto:christina@hackclub.com"
              sx={{ color: RED, fontWeight: 600, fontSize: '0.9rem' }}
            >
              christina@hackclub.com
            </Box>
          </Box>
          <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: 12, p: 4 }}>
            <Text
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'secondary',
                mb: 2
              }}
            >
              Send physical checks
            </Text>
            <Text sx={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
              <br />
              <strong>The Hack Foundation</strong>
              <br />
              8605 Santa Monica Blvd #86294
              <br />
              West Hollywood, CA 90069
              <br />
              <br />
              <strong>EIN:</strong> 81-2908499
            </Text>
            <Box sx={{ borderTop: `1px solid ${BORDER}`, my: 3 }} />
            <Box
              as="a"
              href="https://hcb.hackclub.com/donations/start/hq?utm_source=hf-site&utm_medium=internal&utm_campaign=philanthropy_page&utm_content=body_link"
              target="_blank"
              sx={{
                display: 'inline-block',
                border: `2px solid ${RED}`,
                color: RED,
                fontWeight: 700,
                fontSize: '0.95rem',
                px: 3,
                py: 2,
                borderRadius: 7,
                textDecoration: 'none',
                '&:hover': { bg: RED, color: 'white' }
              }}
            >
              Donate online
            </Box>
            <Text sx={{ fontSize: '0.8rem', color: 'secondary', mt: 2 }}>
              We also accept crypto, stocks, and other forms of support.
            </Text>
          </Box>
        </Grid>
      </Container>

      {/* ── Donor community ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Eyebrow>Community</Eyebrow>
        <SectionHeading>Join our community of generous donors.</SectionHeading>
        <Box sx={{ display: 'grid', gap: 3 }}>
          {Object.entries(donors).map(([tier, names]) => (
            <Box
              key={tier}
              sx={{ border: `1px solid ${BORDER}`, borderRadius: 12, p: 4 }}
            >
              <Text
                sx={{
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: RED,
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  '&::after': {
                    content: '""',
                    flex: 1,
                    height: '1px',
                    bg: BORDER
                  }
                }}
              >
                {tier}
              </Text>
              <Box
                as="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px 20px'
                }}
              >
                {names.map(name => (
                  <Box
                    as="li"
                    key={name}
                    sx={{ fontSize: '0.9rem', fontWeight: 500 }}
                  >
                    {name}
                  </Box>
                ))}
              </Box>
              {tier === '$100k – $200k' && (
                <Text sx={{ fontSize: '0.72rem', color: 'secondary', mt: 3 }}>
                  * number in parentheses indicates gifts since 2018.
                </Text>
              )}
            </Box>
          ))}
        </Box>
        <Eyebrow sx={{ mt: 5, mb: 3 }}>
          A few others who support Hack Club
        </Eyebrow>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {otherDonors.map(name => (
            <Box
              key={name}
              sx={{
                bg: 'muted',
                border: `1px solid ${BORDER}`,
                borderRadius: 99,
                fontSize: '0.8rem',
                fontWeight: 500,
                px: 3,
                py: 1
              }}
            >
              {name}
            </Box>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ── Press ── */}
      <Container
        py={[4, 5]}
        px={[3, 4]}
        sx={{ maxWidth: 1100, textAlign: 'center' }}
      >
        <Eyebrow>In the news</Eyebrow>
        <SectionHeading>
          As the largest network of technical teenagers, we are featured in
          global press.
        </SectionHeading>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: [3, 4],
            justifyContent: 'center',
            mt: 4
          }}
        >
          {pressLogos.map(item => (
            <Box
              as="a"
              key={item.name}
              href={item.href}
              target="_blank"
              className="a"
              sx={{
                fontWeight: 800,
                fontSize: '1.05rem',
                color: 'secondary',
                letterSpacing: '-0.01em',
                '&:hover': { color: RED }
              }}
            >
              {item.name}
            </Box>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ── Board ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Eyebrow>Board of Directors &amp; Advisors</Eyebrow>
        <SectionHeading>
          Stewardship with discipline and transparency.
        </SectionHeading>
        <Grid columns={['1fr', null, '1fr 1fr']} gap={[4, 5]}>
          <Box>
            <Text
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: RED,
                mb: 3
              }}
            >
              Board of Directors
            </Text>
            {boardMembers.map(m => (
              <Box
                key={m.name}
                sx={{
                  py: 3,
                  borderBottom: `1px solid ${BORDER}`,
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <Text sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {m.name}
                </Text>
                <Text sx={{ fontSize: '0.82rem', color: 'secondary' }}>
                  {m.title}
                </Text>
              </Box>
            ))}
          </Box>
          <Box>
            <Text
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: RED,
                mb: 3
              }}
            >
              Board Advisors
            </Text>
            {boardAdvisors.map(m => (
              <Box
                key={m.name}
                sx={{
                  py: 3,
                  borderBottom: `1px solid ${BORDER}`,
                  '&:last-child': { borderBottom: 'none' }
                }}
              >
                <Text sx={{ fontWeight: 700, fontSize: '0.95rem' }}>
                  {m.name}
                </Text>
                <Text sx={{ fontSize: '0.82rem', color: 'secondary' }}>
                  {m.title}
                </Text>
              </Box>
            ))}
          </Box>
        </Grid>
        <Box
          sx={{
            bg: 'muted',
            border: `1px solid ${BORDER}`,
            borderRadius: 12,
            p: 4,
            mt: 5
          }}
        >
          <Box
            as="blockquote"
            sx={{
              fontStyle: 'italic',
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: 1.6,
              borderLeft: `4px solid ${RED}`,
              pl: 3,
              mb: 3,
              m: 0
            }}
          >
            &ldquo;Hack Club is the organization I wish I had when I was a
            teenager. In 2017, I joined as a founding board member, and I have
            seen firsthand the leadership team act with integrity and
            transparency since Day 1.&rdquo;
            <br />
            <br />
            &ldquo;Founder Zach Latta and President Christina Asquith are
            efficient, responsible and disciplined stewards of every dollar, and
            I have proudly grown my donations over the years.&rdquo;
          </Box>
          <Text sx={{ fontSize: '0.85rem', color: 'secondary', mt: 3 }}>
            — Tom Preston-Werner, Cofounder and former CEO, GitHub
          </Text>
        </Box>
      </Container>

      <Divider />

      {/* ── What your gift funds ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Eyebrow>What your gift funds</Eyebrow>
        <SectionHeading>
          Direct support for teenagers, clubs, and projects.
        </SectionHeading>
        <Box as="ul" sx={{ listStyle: 'none', p: 0, display: 'grid', gap: 3 }}>
          {[
            'Increase support to serve thousands more teenagers, with a strong focus on teens who face additional barriers.',
            'Create hundreds more Hack Clubs in high schools and communities across the world.',
            'Inspire a problem-solving mindset where teenagers build what they want to see.',
            'Host dozens of in-person events, including flagship summer adventures.',
            'Extend mini-grants of hardware and internet access to hundreds of teenagers.',
            'Grow the team, mostly engineers, to meet demand from teens worldwide.'
          ].map(item => (
            <Box
              as="li"
              key={item}
              sx={{
                display: 'flex',
                gap: 3,
                alignItems: 'flex-start',
                fontSize: '0.95rem',
                color: 'secondary',
                lineHeight: 1.6
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: 99,
                  bg: RED,
                  flexShrink: 0,
                  mt: '7px'
                }}
              />
              {item}
            </Box>
          ))}
        </Box>
      </Container>

      <Divider />

      {/* ── Financials ── */}
      <Container py={[4, 5]} px={[3, 4]} sx={{ maxWidth: 1100 }}>
        <Eyebrow>Transparency</Eyebrow>
        <SectionHeading>Financials and annual reports.</SectionHeading>
        <Text as="p" sx={{ color: 'secondary', lineHeight: 1.7, mb: 4 }}>
          Starting in 2021, Hack Club has engaged with an external auditing firm
          and has audited financials through the current fiscal year.
        </Text>
        <Grid columns={['1fr', null, '1fr 1fr']} gap={3}>
          <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: 12, p: 4 }}>
            <Text
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: RED,
                mb: 3
              }}
            >
              IRS Form 990s
            </Text>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {form990s.map(({ year, link }) => (
                <Box
                  as="a"
                  key={year}
                  href={link}
                  target="_blank"
                  sx={{
                    display: 'inline-block',
                    bg: 'muted',
                    border: `1px solid ${BORDER}`,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    px: 3,
                    py: 2,
                    borderRadius: 7,
                    textDecoration: 'none',
                    '&:hover': { bg: RED, color: 'white', borderColor: RED }
                  }}
                >
                  {year}
                </Box>
              ))}
            </Box>
            <Text sx={{ fontSize: '0.75rem', color: 'secondary', mt: 3 }}>
              2025 form will be shared when ready.
            </Text>
          </Box>
          <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: 12, p: 4 }}>
            <Text
              sx={{
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: RED,
                mb: 3
              }}
            >
              Annual Reports
            </Text>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {annualReports.map(({ year, link }) => (
                <Box
                  as="a"
                  key={year}
                  href={link}
                  target="_blank"
                  sx={{
                    display: 'inline-block',
                    bg: 'muted',
                    border: `1px solid ${BORDER}`,
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    px: 3,
                    py: 2,
                    borderRadius: 7,
                    textDecoration: 'none',
                    '&:hover': { bg: RED, color: 'white', borderColor: RED }
                  }}
                >
                  {year}
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Container>

      {/* ── Closing CTA ── */}
      <Box
        sx={{
          bg: '#1a1d2e',
          color: 'white',
          py: [5, 6],
          px: [3, 4],
          textAlign: 'center'
        }}
      >
        <Container sx={{ maxWidth: 700 }}>
          <Eyebrow sx={{ color: 'rgba(255,255,255,0.45)' }}>Thank you</Eyebrow>
          <Heading
            as="h2"
            sx={{
              fontSize: ['1.5rem', '2rem'],
              fontWeight: 800,
              color: 'white',
              mb: 3
            }}
          >
            Hack Club invites leading thinkers, builders, and disrupters to join
            us.
          </Heading>
          <Text sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, mb: 4 }}>
            We envision thousands of diverse Hack Club leaders in towns and
            cities across America and the world, connected online and
            self-organizing events and hackathons.
          </Text>

          <Grid
            columns="1fr 1fr"
            gap={4}
            sx={{ mt: 5, textAlign: 'left', maxWidth: 500, mx: 'auto' }}
          >
            <Box sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <Text
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: '1rem',
                  mb: 1
                }}
              >
                Christina Asquith
              </Text>
              <Text sx={{ fontSize: '0.8rem' }}>Cofounder and President</Text>
            </Box>
            <Box sx={{ color: 'rgba(255,255,255,0.7)' }}>
              <Text
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: '1rem',
                  mb: 1
                }}
              >
                Zach Latta
              </Text>
              <Text sx={{ fontSize: '0.8rem' }}>
                Founder and Executive Director
              </Text>
            </Box>
          </Grid>

          <Box
            sx={{
              mt: 5,
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.7
            }}
          >
            <Text sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>
              The Hack Foundation
            </Text>
            <Text>8605 Santa Monica Blvd #86294, West Hollywood, CA 90069</Text>
            <Text>EIN: 81-2908499</Text>
          </Box>

          <Box
            as="a"
            href="https://cdn.hackclub.com/01a0b07d-cc54-72c9-8ada-e534cbbd85b5/hack-club-philanthropy.pdf"
            target="_blank"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.85rem',
              mt: 4,
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              pb: '2px',
              textDecoration: 'none',
              '&:hover': { color: 'white' }
            }}
          >
            Download as PDF
          </Box>
        </Container>
      </Box>

      {/* ── Footer ── */}
      <Box
        as="footer"
        sx={{
          bg: 'muted',
          borderTop: `1px solid ${BORDER}`,
          py: [4, 5],
          px: [3, 4]
        }}
      >
        <Container sx={{ maxWidth: 1100 }}>
          <Grid
            columns={['1fr', null, '1fr auto']}
            gap={[4, 5]}
            sx={{ alignItems: 'start' }}
          >
            <Box>
              <Text sx={{ fontWeight: 800, fontSize: '1rem', mb: 2 }}>
                The Hack Foundation
              </Text>
              <Text sx={{ fontSize: '0.85rem', color: 'secondary', mb: 2 }}>
                For teens, by teens.
              </Text>
              <Text
                sx={{
                  fontSize: '0.75rem',
                  color: 'secondary',
                  lineHeight: 1.6,
                  maxWidth: 380
                }}
              >
                © 2026 The Hack Foundation. A 501(c)(3) nonprofit (EIN:
                81-2908499). <br />
                Hack Club is a program of The Hack Foundation.{' '}
                <Box
                  as="a"
                  href="https://hackclub.com"
                  target="_blank"
                  className="a"
                  sx={{ color: RED }}
                >
                  hackclub.com
                </Box>
              </Text>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                {
                  label: 'Our Team & Board',
                  href: 'https://hackclub.com/team'
                },
                {
                  label: 'Philosophy',
                  href: 'https://hackclub.com/philosophy'
                },
                {
                  label: 'Fiscal Sponsorship',
                  href: 'https://hackclub.com/fiscal-sponsorship'
                },
                { label: 'Financials', href: 'https://hcb.hackclub.com/hq/' },
                {
                  label: 'Privacy & Terms',
                  href: 'https://hackclub.com/privacy-and-terms'
                },
                {
                  label: 'Code of Conduct',
                  href: 'https://hackclub.com/conduct'
                }
              ].map(link => (
                <Box
                  as="a"
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="a"
                  sx={{ fontSize: '0.85rem', color: 'secondary' }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Grid>
        </Container>
      </Box>

      <style>{`
        .a {
          -webkit-text-decoration-color: rgba(0,0,0,.2);
          text-decoration-color: rgba(0,0,0,.2);
        }
        a {
          text-decoration: underline;
          color: inherit;
        }
        .a:hover {
          text-decoration: none;
          cursor: pointer;
          background-color: rgba(252, 211, 77, 0.2);
        }
      `}</style>
    </>
  )
}
