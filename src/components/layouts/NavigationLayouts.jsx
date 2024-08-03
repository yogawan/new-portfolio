import { Link } from "react-router-dom"

const NavigationLayouts = () => {
    return (
        <nav>
            <ul>
                <li><img src="./work.svg" alt="" /><Link to={'/'}>Project</Link></li>
                <li><img src="./certi.svg" alt="" /><Link to={'/certificate'}>Certificate</Link></li>
                {/* <li><img src="./home.svg" alt="" /><Link to={'/'}>Home</Link></li> */}
                {/* <li><img src="./profile.svg" alt="" /><a href="#">Yogawan</a></li> */}
            </ul>
        </nav>
    )
}

export default NavigationLayouts;