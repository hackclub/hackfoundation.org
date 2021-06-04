export default function OrganizationContainer({ name, logo }) {
    return (
        <div className="flex flex-row space-x-2 rounded-full border border-gray-400 mx-2 p-1 w-fitcontent h-10 text-lg font-bold">
            <img className={`${logo ? 'block' : 'hidden'} w-8 h-8 rounded-full self-center mr-2`} src={logo ?? ''} alt={`${name}'s Logo`} />
            {name}
        </div>
    )
}