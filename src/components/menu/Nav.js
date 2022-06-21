import React, {useState} from 'react';


import GithubIcon from '../../assets/github_icon_active.svg'
import GithubIconInactive from '../../assets/github_icon_inactive.svg'
import LinkledlnIcon from '../../assets/linkledln_icon_active.svg'
import LinkledlnIconInActive from '../../assets/linkledln_icon_inactive.svg'
import MetaIcon from '../../assets/meta_icon_active.svg'
import MetaIconInActive from '../../assets/meta_icon_inactive.svg'
import ProjectIcon from '../../assets/project_icon_active.svg'
import ProjectIconInActive from '../../assets/project_icon_inactive1.svg'
import TwiterIcon from '../../assets/twiter_icon_active.svg'
import TwiterIconInactive from '../../assets/twiter_icon_inactive.svg'



const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return ( 
        <nav className="bg-[#FFFFFF] bg-opacity-30 rounded-3xl w-max px-4 py-2 left-1/2 -translate-x-1/2 bottom-2 flex gap-4 fixed backdrop-blur-lg ">
            <a href="#" className="">
            <img className="w-10 md:w-auto"  alt="Meta" onMouseLeave={()=> setActiveNav("#")} onMouseOver= {()=> setActiveNav("#meta")} src= { activeNav === "#meta" ? MetaIcon : MetaIconInActive}/>

                </a>   

            <a href="#">
                <img className="w-10 md:w-auto"  alt="Github" onMouseLeave={()=> setActiveNav("#")} onMouseOver= {()=> setActiveNav("#github")} src= { activeNav === "#github" ? GithubIcon : GithubIconInactive}/>
                
            </a> 
            <a href="#">
            <img className="w-10 md:w-auto"  alt="Project" onMouseLeave={()=> setActiveNav("#")} onMouseOver= {()=> setActiveNav("#project")} src= { activeNav === "#project" ? ProjectIcon : ProjectIconInActive}/>

            </a> 
            <a href="#">
            <img className="w-10 md:w-auto" alt="Project" onMouseLeave={()=> setActiveNav("#")} onMouseOver= {()=> setActiveNav("#linkledln")} src= { activeNav === "#linkledln" ? LinkledlnIcon : LinkledlnIconInActive}/>
            </a>
            <a href="#">
            <img className="w-10 md:w-auto" salt="Project" onMouseLeave={()=> setActiveNav("#")} onMouseOver= {()=> setActiveNav("#twiter")} src= { activeNav === "#twiter" ? TwiterIcon :TwiterIconInactive}/>
            </a>       
        </nav>
     );
}

export default Nav ;