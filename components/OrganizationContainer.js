import organizations from '../lib/organizations'
import Organization from './Organization'

export default function OrganizationContainer() {
    return (
        <div className="flex flex-wrap gap-2 md:justify-start justify-center">
            {organizations.map(({ name, logo, url }) => (
                <Organization key={name} name={name} logo={logo} url={url} />
            ))}
        </div>
    )
}