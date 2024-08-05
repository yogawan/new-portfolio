import CardProjectLayouts from "../layouts/CardProjectLayouts";
import FooterLayouts from "../layouts/FooterLayouts";
import NavigationPopupLayouts from "../layouts/NavigationPopupLayouts";
import NavigationLayouts from "../layouts/NavigationLayouts";

const HomePages = () => {
    return (
        <div>
            <NavigationLayouts></NavigationLayouts>
            <div className="hero">
                <h1>Convert Design into Code with <em><u>Pixel Perfect</u></em></h1>
                <p>Hai, im Yogawan. I hate school, but i so fucking like and people crazy about learning.</p>
                <p className="red">*This content can't be loaded because Developer uncomplete this project</p>
            </div>
            <div>
                <br />
            </div>
            <FooterLayouts></FooterLayouts>
            <NavigationPopupLayouts></NavigationPopupLayouts>
        </div>
    )
}

export default HomePages;