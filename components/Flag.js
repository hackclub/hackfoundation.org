/**
 * Written by @lachlanjc on hackclub/summer-scrapbook
 */

const Flag = props => (
    <a
        title="Hack Club"
        href="https://hackclub.com/"
        className="nav-flag absolute inline-block cursor-pointer flex-shrink-0 w-32"
        {...props}
    >
        <img src="https://assets.hackclub.com/flag-orpheus-top.svg" />
        <style jsx>{`
        @media (min-width: 32em) {
            a {
                height: 64px;
            }
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

export default Flag