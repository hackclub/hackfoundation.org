import organizations from '../lib/organizations'

export default function OrganizationContainer() {
    return (
        <div className="flex flex-wrap gap-2 md:justify-start justify-center">
            {organizations.map(({ name, logo }) => (
                <Organization key={name} name={name} logo={logo} />
            ))}
        </div>
    )
}

export function Organization({ name, logo, extraClasses }) {
    return (
        <div className={`flex flex-row rounded-full border border-gray-400 p-1 w-fitcontent h-10 text-lg font-bold ${extraClasses}`}>
            <img className={`${logo ? 'block' : 'hidden'} w-8 h-8 border border-gray-400 rounded-full self-center`} src={logo ?? ''} alt={`${name}'s logo within a circle next to the text with the name of ${name}`} />
            <div className="px-2">{name}</div>
        </div>
    )
}