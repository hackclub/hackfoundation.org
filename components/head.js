import Head from 'next/head'

export default function HeadObject({children}) {
    const title = "The Hack Foundation";
    const description = "The Hack Foundation is the foundation that partners with over 330 non-profit organizations including Hack Clubs, hackathons, Little League teams, newspapers, and everything in between to act as their legal and financial entity.";
    const keywords = "hack, club, foundation, entity, nonprofit";
    const author = "The Hack Foundation";
    const twitter = "@hackclub";
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="https://hackfoundation.org" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}
