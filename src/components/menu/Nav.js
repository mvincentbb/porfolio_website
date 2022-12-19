import React, {useState} from 'react';

import GithubIcon from '../../assets/github_icon_active.svg'
import GithubIconInactive from '../../assets/github_icon_inactive.svg'
import LinkledlnIcon from '../../assets/linkledln_icon_active.svg'
import LinkledlnIconInActive from '../../assets/linkledln_icon_inactive.svg'
// import MetaIcon from '../../assets/meta_icon_active.svg'
// import MetaIconInActive from '../../assets/meta_icon_inactive.svg'
import ProjectIcon from '../../assets/project_icon_active.svg'
import ProjectIconInActive from '../../assets/project_icon_inactive1.svg'
import TwiterIcon from '../../assets/twiter_icon_active.svg'
import TwiterIconInactive from '../../assets/twiter_icon_inactive.svg'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
	// {
	// 	href: "https://www.facebook.com/vincent.bakpa",
	// 	alt: "Meta",
	// 	name: "meta",
	// 	activeIcon: MetaIcon,
	// 	inActiveIcon: MetaIconInActive,
	// },
	{
		href: "https://github.com/mvincentbb",
		alt: "github",
		name: "github",
		activeIcon: GithubIcon,
		inActiveIcon: GithubIconInactive,
	},
	{
		href: "https://vincentdepaul.notion.site/Projects-32cc2194c7f542a0998bd28b9897f981",
		alt: "project",
		name: "project",
		activeIcon: ProjectIcon,
		inActiveIcon: ProjectIconInActive,
	},
	{
		href: "https://www.linkedin.com/in/vincent-bakpatina",
		alt: "linkedin",
		name: "linkedin",
		activeIcon: LinkledlnIcon,
		inActiveIcon: LinkledlnIconInActive,
	},
	{
		href: "https://twitter.com/BakpatinaP",
		alt: "twitter",
		name: "twitter",
		activeIcon: TwiterIcon,
		inActiveIcon: TwiterIconInactive,
	},
	
]

const Nav = () => {
	const [activeNav, setActiveNav] = useState(undefined)
 
	return (
		<nav className="bg-white bg-opacity-30 rounded-3xl w-max px-4 py-2 left-1/2 -translate-x-1/2 bottom-2 flex gap-4 fixed backdrop-blur-lg items-center">
			{
				NAV_ITEMS.map(item => (
					// eslint-disable-next-line react/jsx-key
					<motion.div 
					whileHover={{ scale: 1.1, transition: { duration: 0.5 } }} 
					whileTap={{ scale: 0.8 }}
					>
						<a
						// className={`transition ease-in-out delay-150 duration-300 transition-all ${ activeNav === item.name ? 'scale-75' : '' } hover:scale-60`}
						key={item.name}
						href={item.href}
						target="_blank"
						rel="noopener noreferrer"
						>
						<img
							alt="Meta"
							className="w-10 md:w-16 "
							onMouseLeave={() => setActiveNav(undefined)}
							onMouseOver={() => setActiveNav(item.name)}
							src={activeNav === item.name ? item.activeIcon : item.inActiveIcon}
						/>
					</a>
					</motion.div>
				
				))
			}
		</nav>
	);
}

export default Nav;
