import organizations from '../lib/organizations'
import OrganizationContainer from './OrganizationContainer'
import shuffle from '../util/shuffle'

export default function AnimationContainer() {
    shuffle(organizations)
    return (
        <div id="animation-container" className="flex flex-col space-y-4 overflow-hidden">
            <div className="flex flex-row whitespace-nowrap">
                {organizations.slice(0, Math.ceil(organizations.length / 2)).filter(org => org.name !== null).map(({ name, logo }) => (
                    <div key={name + Math.random()}>
                        <OrganizationContainer name={name} logo={logo} extraClasses="w-52 animate-marquee-left" />
                    </div>
                ))}
            </div>
            <div className="flex flex-row whitespace-nowrap">
                {organizations.slice(-Math.ceil(organizations.length / 2)).filter(org => org.name !== null).map(({ name, logo }) => (
                    <div key={name + Math.random()}>
                        <OrganizationContainer name={name} logo={logo} extraClasses="w-52 animate-marquee-right" />
                    </div>
                ))}
            </div>
        </div>
    )
}