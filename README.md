# [The Hack Foundation](https://hackfoundation.org)

The Hack Foundation was founded in 2016 as the legal entity for [Hack Club](https://hackclub.com), a nonprofit network of high schoolers creating the coding education they wish they could receive.

In [2018](https://medium.com/hackclub/hack-club-bank-a-bank-for-student-hackers-e5d894ea5375), we built out a [financial platform/fiscal sponsor for our clubs called HCB](https://hackclub.com/hcb).

By [2019](https://medium.com/hackclub/hack-club-bank-is-now-live-for-everyone-including-you-884f7f54836f), HCB expanded to become the largest fiscal sponsor for teen-led projects in the world. From Hack Clubs, to hackathons, FRC teams, to Little League teams, hundreds of groups with annual budgets from $100 to $250k are powered by The Hack Foundation and our tools.

Hack Club HQ ourselves [runs on The Hack Foundation's platforms](https://hcb.hackclub.com/hq), and we want to continue doing so to make sure we invest in making it better.

Every year, tens of thousands of people are impacted by organizations operating under The Hack Foundation. Partnered organizations receive the benefits of 501(c)(3) nonprofit status, administrative and backoffice support, and financial oversight.

## Docker deployment

The production image uses a two-stage build based entirely on [Docker Hardened Images](https://docs.docker.com/dhi/): a Bun development image builds the site, then a minimal Node.js runtime image runs the Next.js standalone server as a non-root user.

1. Sign in to the Docker Hardened Images registry:

   ```sh
   docker login dhi.io
   ```

2. Build and start the service:

   ```sh
   docker compose up --build -d
   ```

The site is available at <http://localhost:3000>. Set `WEB_PORT` to publish a different host port, for example `WEB_PORT=8080 docker compose up --build -d`.

Check its status and logs with `docker compose ps` and `docker compose logs -f web`. Stop it with `docker compose down`.
