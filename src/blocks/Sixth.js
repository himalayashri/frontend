import image1 from "../images/img(2).svg";
import image2 from "../images/img(3).svg";
import image3 from "../images/img(4).svg";
import image4 from "../images/img(5).svg";
import Block3 from "../components/Block3";


function Sixth(){
    let data = [
        {
           icon: {image1},
           title: "Call-to-Action Optimization",
           detail: "Our carefully crafted CTAs guide potential buyers through the property journey, enhancing engagement and conversion rates."
        },
        {
            icon: {image2},
            title: "Landing Page Efficiency",
            detail: "Tailored landing pages are designed for maximum property lead conversion. They provide seamless user experiences and clear pathways for inquiry submission."
        },
        {
            icon: {image3},
            title: "Social Proof Utilization",
            detail: "Leverage the power of testimonials and success stories from satisfied buyers to build trust and credibility, encouraging hesitant prospects to take action"
        },
        {
            icon: {image4},
            title: "Mobile-Friendly Experience",
            detail: "With a responsive design approach, our strategies ensure a seamless browsing experience across all devices. This responsiveness enhances engagement and conversions by accommodating the preferences of on-the-go property seekers."
        }
    ]
    return (
        <div className="sixth">
            <h1 className="sixth-head">Driving Property Inquiries to Conversions</h1>
            <div className="sixth-outer">
            {
                data.map((item, index) => {
                    return <Block3 key={index} data={item} />
                })
            }
            </div>
            
        </div>
    )
}

export default Sixth;