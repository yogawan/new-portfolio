import CardCertificateLayouts from "../layouts/CardCertificateLayouts";
import FooterLayouts from "../layouts/FooterLayouts";
import NavigationPopupLayouts from "../layouts/NavigationPopupLayouts";
import NavigationLayouts from "../layouts/NavigationLayouts";

const CertificatePages = () => {
    return (
        <div>
            <NavigationLayouts></NavigationLayouts>
            <CardCertificateLayouts></CardCertificateLayouts>
            <FooterLayouts></FooterLayouts>
            <NavigationPopupLayouts></NavigationPopupLayouts>
        </div>
    )
}

export default CertificatePages;