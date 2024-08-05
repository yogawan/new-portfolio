import CardProjectLayouts from "../layouts/CardProjectLayouts";
import FooterLayouts from "../layouts/FooterLayouts";
import NavigationPopupHomeLayouts from "../layouts/NavigationPopupHomeLayouts";
import NavigationLayouts from "../layouts/NavigationLayouts";
import ExperienceLayouts from "../layouts/ExperienceLayouts";

const HomePages = () => {
    return (
        <div>
            <NavigationLayouts></NavigationLayouts>
            <div className="hero">
                <h1>Hi, i'm Yogawan.<br />a <em><u>MERN Stack</u></em> and <em><u>UI Designer</u></em></h1>
                <p>~ Convert Design into Code with <em><u>Pixel Perfect</u></em></p>
                <div className="list">
                    <div className="content">
                        <img src="./m.png" alt="img" />
                        <img src="./e.png" alt="img" />
                        <img src="./r.png" alt="img" />
                        <img src="./n.png" alt="img" />
                    </div>
                    <div className="content">
                        <img src="./f.svg" alt="img" />
                    </div>
                </div>
            </div>
            <ExperienceLayouts></ExperienceLayouts>
            <NavigationPopupHomeLayouts></NavigationPopupHomeLayouts>
            <div className="bottom"></div>
        </div>
    )
}

export default HomePages;