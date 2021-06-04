import { motion } from 'framer-motion'
import organizations from '../lib/organizations'
import OrganizationContainer from './OrganizationContainer'
import shuffle from '../util/shuffle'

export default function AnimationContainer() {
    shuffle(organizations)
    return (
        <div id="animation-container" className="flex flex-col space-y-4">
            <div className="flex flex-row-reverse overflow-hidden">
                {organizations.slice(0, Math.ceil(organizations.length / 2)).filter(org => org.name !== null).map(({ name, logo }) => (
                    <motion.div
                        initial={{ x: -1000 }}
                        animate={{ x: [1000, 120] }}
                        transition={{ duration: 15 }}
                        key={name} className="relative"
                    >
                        <OrganizationContainer name={name} logo={logo} />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-row overflow-hidden">
                {organizations.slice(-Math.ceil(organizations.length / 2)).filter(org => org.name !== null).map(({ name, logo }) => (
                    <motion.div
                        initial={{ x: 1000 }}
                        animate={{ x: [-1000, -100] }}
                        transition={{ duration: 15 }}
                        key={name} className="relative"
                    >
                        <OrganizationContainer name={name} logo={logo} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}