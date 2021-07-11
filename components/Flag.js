/**
 * Hack Club Orpheus Flag Tailwind Component.
 * Written by @lachlanjc on hackclub/summer-scrapbook
 * Adapted by @sarthaktexas on hackclub/hackfoundation.org
 */

export default function Flag(props) {
    return (
        <a
            title="Hack Club"
            href="https://hackclub.com/"
            className="nav-flag absolute top-0 inline-block cursor-pointer flex-shrink-0"
            {...props}
        >
            <img src="https://assets.hackclub.com/flag-orpheus-top.svg" className="pl-5" />
            <style jsx>{`
            img {
                width: 7rem;
            }
            @media (prefers-reduced-motion: no-preference) {
                a {
                    transition: ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1) transform;
                    transform-origin: top left;
                }
                a:hover, a:focus {
                    animation: waveFlag 0.5s linear infinite alternate;
                }
            }
            @keyframes waveFlag {
                from {
                    transform: rotate(0deg);
                }
                to {
                    transform: rotate(-5deg);
                }
            }
            `}</style>
        </a>
    )
}