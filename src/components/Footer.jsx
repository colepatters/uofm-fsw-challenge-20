import IconLink from "./IconLink"

import GitHubSVG from "../assets/svg/github.svg"
import LinkedinSVG from "../assets/svg/linkedin.svg"

function Footer() {
    return (
        <div className="d-flex justify-content-center align-items-center gap-2 bg-body-secondary">
            {/* github link */}
            <IconLink link="https://github.com/colepatters" icon={GitHubSVG} alt="GitHub profile" />
           
            {/* linkedin link */}
            <IconLink link="https://www.linkedin.com/in/colepatterson4342/" icon={LinkedinSVG} alt="LinkedIn profile" />

        </div>
    )
}

export default Footer