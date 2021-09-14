import { useEffect } from 'react'
import Head from 'next/head'
import Meta from '@hackclub/meta'
import OrganizationContainer from '../components/OrganizationContainer'
import { useTheme } from 'next-themes'

export default function Home() {
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
  });
  const { theme, systemTheme } = useTheme()
  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")
  return (
    <div className="vertical-center py-4 md:py-12 my-4 md:my-0">
      <Meta
        as={Head}
        name="The Hack Foundation"
        title="The Hack Foundation"
        description="The Hack Foundation partners with over 330 non-profit organizations including Hack Clubs, hackathons, Little League teams, newspapers, and everything in between to act as their legal and financial entity."
        color={isDark ? "#000000" : "#ffffff"}
      />
      <main className="m-10 md:mx-12 lg:mx-24 md:my-2 flex flex-row xl:w-full justify-center">
        <section className="safe flex flex-col space-y-8 md:space-y-0 md:gap-0 md:grid md:grid-cols-3 xl:max-w-6xl">
            <section id="main" className="md:mr-16 md:col-span-2 flex flex-col space-y-5 text-lg xl:text-xl">
              <p>
                <b>The Hack Foundation</b> was founded in 2016 to serve as the legal entity for <a target="_blank" className="a" href="https://hackclub.com">Hack Club</a>, a nonprofit network of high schoolers creating the coding education they wish they could have.
              </p>
              <p>
                In 2018, The Hack Foundation expanded to act as a nonprofit <a target="_blank" className="a" href="https://en.wikipedia.org/wiki/Fiscal_sponsorship">fiscal sponsor</a> for Hack&nbsp;Clubs, hackathons, community organizations, and other for-good projects.
              </p>
              <p>
                Today, hundreds of diverse groups with annual budgets from $100 to $250,000 are fiscally sponsored by The Hack Foundation. Partnered organizations receive the benefits of 501(c)(3) nonprofit status, administrative and backoffice support, financial oversight, and transparency tools.
              </p>
              <p>
                The Hack Foundation and all its software has been built over the years by teenagers at Hack Club. Today's supporters include Elon Musk, Vitalik Buterin, Google.org, among many others and hundreds of individual supporters.
              </p>
              <OrganizationContainer />
            </section>
            <section className="mt-12 md:mt-0 md:col-span-1 flex flex-col space-y-5 2xl:text-lg">
              <p>If you are considering supporting an organization partnered with The Hack Foundation, contact our <a target="_blank" className="a font-bold" href="mailto:bank@hackclub.com">financial operations team.</a></p>
              <p>If you would like to learn more about partnering with The Hack Foundation for your organization, <a target="_blank" className="a font-bold" href="https://hackclub.com/bank/">please see here.</a></p>
              <section id="people">
                <h3 className="font-bold">Board</h3>
                <div className="flex flex-col space-y-1 items-start">
                  <a target="_blank" className="a" href="https://github.com/zachlatta">Zach Latta</a>
                  <a target="_blank" className="a" href="https://twitter.com/ChristinaAsquit">Christina Asquith</a>
                  <a target="_blank" className="a" href="https://twitter.com/mojombo">Tom Preston-Werner</a>
                  <a target="_blank" className="a" href="https://twitter.com/sqs">Quinn Slack</a>
                </div>
              </section>
              <section id="finances">
                <h3 className="font-bold">Finances (990s)</h3>
                <div className="flex flex-col space-y-1 items-start">
                  <em><a target="_blank" className="a" href="https://bank.hackclub.com/hq/">See our 100% transparent finances</a></em>
                  2020 TBD
                  <a target="_blank" className="a" href="https://apps.irs.gov/pub/epostcard/cor/812908499_201912_990_2021022417751020.pdf">2019</a>
                  <a target="_blank" className="a" href="https://apps.irs.gov/pub/epostcard/cor/812908499_201812_990_2020013017086607.pdf">2018</a>
                  <a target="_blank" className="a" href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf">2017</a>
                  <a target="_blank" className="a" href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf">2016</a>
                </div>
              </section>
              <section>
                <h3 className="font-bold">EIN</h3>
                <p>81-2908499</p>
              </section>
            </section>
        </section>
      </main>
    </div>
  )
}
