import { useEffect } from 'react'
import HeadObject from '../components/head'
import AnimationContainer from '../components/AnimationContainer'

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

  return (
    <div className="vertical-center">
      <HeadObject />
      <main className="m-10 md:mx-12 lg:mx-24 md:my-2">
        <section className="flex flex-col md:grid md:grid-cols-3">
            <section id="main" className="md:mr-16 md:col-span-2 flex flex-col space-y-12 text-lg lg:text-xl">
              <p>
                <b>The Hack Foundation</b> was founded in 2016 to serve as the legal entity for <a href="https://hackclub.com" target="_blank">Hack Club</a>, a nonprofit network of high schoolers creating the coding education they wish they could receive.
              </p>
              <p>
                Today, The Hack Foundation is the largest <a href="https://en.wikipedia.org/wiki/Fiscal_sponsorship">fiscal sponsor</a> for teen-led projects in the world. From Hack Clubs, to hackathons, to Little League teams and community organizations, hundreds of diverse groups with annual budgets from $100 to $250,000 are powered by the infrastructure created, designed, and coded by Hack Club teenagers across America, <a href="https://bank.hackclub.com/hq/">including Hack Club HQ itself</a>.
              </p>
              <p>
                Every year, tens of thousands of people are impacted by organizations operating under The Hack Foundation. Partnered organizations receive the benefits of 501(c)(3) nonprofit status, administrative and backoffice support, and financial oversight.
              </p>
              <section className="-m-10 md:m-0">
                <h2 className="font-bold pb-4 px-10 md:px-0">300+ organizations. $3M+ raised.</h2>
                <AnimationContainer />
              </section>
            </section>
            <section className="mt-12 md:mt-0 md:col-span-1 flex flex-col space-y-10">
              <p>If you are considering supporting an organization partnered with The Hack Foundation, contact our <a href="mailto:bank@hackclub.com" className="font-bold">financial operations team.</a></p>
              <p>If you would like to learn more about partnering with The Hack Foundation for your organization, <a href="https://hackclub.com/bank/" className="font-bold">please see here.</a></p>
              <section>
                <h3 className="font-bold">Board</h3>
                <section className="flex flex-col space-y-1">
                  <a href="https://twitter.com/zachlatta">Zach Latta</a>
                  <a href="https://twitter.com/ChristinaAsquit">Christina Asquith</a>
                  <a href="https://twitter.com/mojombo">Tom Preston-Werner</a>
                  <a href="https://twitter.com/sqs">Quinn Slack</a>
                </section>
              </section>
              <section>
                <h3 className="font-bold">Finances</h3>
                <section className="flex flex-col space-y-1">
                  <a href="https://apps.irs.gov/pub/epostcard/cor/812908499_201912_990_2021022417751020.pdf">2019</a>
                  <a href="https://apps.irs.gov/pub/epostcard/cor/812908499_201812_990_2020013017086607.pdf">2018</a>
                  <a href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf">2017</a>
                  <a href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf">2016</a>
                </section>
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
