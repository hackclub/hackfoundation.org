import { useEffect } from "react";
import Head from "next/head";
import Meta from "@hackclub/meta";
import Marquee from "react-marquee-slider";

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
    `);
  });
  return (
    <div className="py-4 md:py-12 my-4 md:my-0 font-body">
      <Meta
        as={Head}
        name="The Hack Foundation"
        title="The Hack Foundation"
        description="The Hack Foundation partners with over 330 non-profit organizations including Hack Clubs, hackathons, Little League teams, newspapers, and everything in between to act as their legal and financial entity."
        image="https://camo.githubusercontent.com/bab1c7d453175fc8658c1149be2b044107d10d6ef857d171c547e79e4fdf4632/68747470733a2f2f636c6f75642d6b31386337677271632d6861636b2d636c75622d626f742e76657263656c2e6170702f307370616365785f616e645f6861636b5f636c75622e6a7067"
      />
      <main className="m-5 md:mx-12 lg:mx-24 md:my-2">
        <section className="safe xl:max-w-4xl mx-auto">
          <section
            id="main"
            className="md:col-span-2 flex flex-col space-y-5  text-md md:text-lg xl:text-xl"
          >
            <h1
              className="text-3xl md:text-5xl font-bold w-max border-b-2 border-gray-200 pr-3 md:pr-6 md:mb-3"
              style={{ color: "#ec3750" }}
            >
              The Hack Foundation
            </h1>
            <p className="mt-0" style={{ marginTop: "10px!important" }}>
              The Hack Foundation (EIN: 81-2908499) was founded in 2016 to serve
              as the legal entity for{" "}
              <a target="_blank" className="a" href="https://hackclub.com">
                Hack Club
              </a>
              , a nonprofit network of high schoolers creating the coding
              education they wish they could have.
            </p>
            <p>
              In 2018, The Hack Foundation expanded to act as a nonprofit{" "}
              <a
                target="_blank"
                className="a"
                href="https://en.wikipedia.org/wiki/Fiscal_sponsorship"
              >
                fiscal sponsor
              </a>{" "}
              for Hack&nbsp;Clubs, hackathons, community organizations, and
              other for-good projects.
            </p>
            <div
              style={{
                height: 200,
                marginLeft: "-1.25rem",
                marginRight: "-1.25rem",
              }}
              className="mx-0"
            >
              <Marquee velocity={25}>
                <img
                  src="https://cloud-qmweg7d8y-hack-club-bot.vercel.app/0screenshot_2021-04-05_at_7.25.05_pm.png"
                  className="image"
                />
                <img
                  src="https://hackclub.com/bank/events/teenhacks-li.jpg"
                  className="image"
                />
                <img
                  src="https://camo.githubusercontent.com/bab1c7d453175fc8658c1149be2b044107d10d6ef857d171c547e79e4fdf4632/68747470733a2f2f636c6f75642d6b31386337677271632d6861636b2d636c75622d626f742e76657263656c2e6170702f307370616365785f616e645f6861636b5f636c75622e6a7067"
                  className="image"
                />
              </Marquee>
            </div>
            <p>
              Today, hundreds of diverse groups ranging from a{" "}
              <a
                target="_blank"
                className="a"
                href="https://bank.hackclub.com/the-charlotte-bridge"
              >
                small town newspaper in Vermont
              </a>{" "}
              to  <a
                target="_blank"
                className="a"
                href="https://bank.hackclub.com/hackpenn"
              >the largest high-school hackathon in Pennsylvania</a> are fiscally
              sponsored by The Hack Foundation. Partnered organizations receive
              the benefits of 501(c)(3) nonprofit status, administrative and
              backoffice support, financial oversight, and transparency tools.
            </p>
            <p>
              If you would like to learn more about partnering with The Hack
              Foundation for your organization,{" "}
              <a
                target="_blank"
                className="a"
                href="https://hackclub.com/bank/"
              >
                please see here.
              </a>
            </p>
            <p>
              The Hack Foundation and all its software has been built over the
              years by teenagers at Hack Club. Today's supporters include Elon
              Musk, Vitalik Buterin, Google.org, among many others and hundreds
              of individual supporters.
            </p>
            <p>
              As it grows, the Hack Foundation is exploring ways in which it can
              be responsible, as part of this we have recently made{" "}
              <a
                target="_blank"
                className="a"
                href="https://bank.hackclub.com/hq/"
              >
                our entire finances 100% transparent
              </a>
              .
            </p>
            <hr />
            <div className="grid md:grid-cols-2">
              <div className="mb-3 md:mb-0">
                <h3 className="font-bold">Our Board</h3>
                <div className="flex items-start flex-wrap mt-1">
                  <span className="pr-4">
                    <a
                      target="_blank"
                      className="a"
                      href="https://github.com/zachlatta"
                    >
                      Zach Latta
                    </a>
                  </span>
                  <span className="pr-4">
                    <a
                      target="_blank"
                      className="a"
                      href="https://twitter.com/ChristinaAsquit"
                    >
                      Christina Asquith
                    </a>
                  </span>
                  <span className="pr-4">
                    <a
                      target="_blank"
                      className="a"
                      href="https://twitter.com/mojombo"
                    >
                      Tom Preston-Werner
                    </a>
                  </span>
                  <a
                    target="_blank"
                    className="a"
                    href="https://twitter.com/sqs"
                  >
                    Quinn Slack
                  </a>
                </div>
              </div>
              <div>
                <h3 className="font-bold">990s Tax Forms</h3>
                <div className="flex items-start flex-wrap mt-1">
                  <span className="mr-3">2020 (TBD)</span>
                  <a
                    target="_blank"
                    className="a mr-3"
                    href="https://apps.irs.gov/pub/epostcard/cor/812908499_201912_990_2021022417751020.pdf"
                  >
                    2019
                  </a>
                  <a
                    target="_blank"
                    className="a mr-3"
                    href="https://apps.irs.gov/pub/epostcard/cor/812908499_201812_990_2020013017086607.pdf"
                  >
                    2018
                  </a>
                  <a
                    target="_blank"
                    className="a mr-3"
                    href="https://apps.irs.gov/pub/epostcard/cor/812908499_201712_990EZ_2019112216882661.pdf"
                  >
                    2017
                  </a>
                  <a
                    target="_blank"
                    className="a mr-3"
                    href="https://apps.irs.gov/pub/epostcard/cor/812908499_201612_990EZ_2019080116538191.pdf"
                  >
                    2016
                  </a>
                </div>
              </div>
            </div>
            <hr />
            <img
              src="https://assets.hackclub.com/flag-standalone.png"
              width="100px"
              className="mx-auto pt-3"
            />
          </section>
        </section>
      </main>
    </div>
  );
}
