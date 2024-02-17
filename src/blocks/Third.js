import Block from "../components/Block";
import icon1 from "../images/icon1(1).svg";
import icon2 from "../images/icon1(2).svg";
import icon3 from "../images/icon1(3).svg";
import icon4 from "../images/icon1(4).svg";
import icon5 from "../images/icon1(5).svg";
import icon6 from "../images/icon1(6).svg";
import icon7 from "../images/icon1(7).svg";
import icon8 from "../images/icon1(8).svg";


function Third(){
    let data = [
        {
            icon : {icon2},
            title: "Automotive SEO",
            detail: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today"
        },
        {
            icon: {icon1},
            title : "PPC Precision",
            detail: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
        },
        {
            icon: {icon8},
            title : "Social Acceleration",
            detail: " Engage and influence your audience across social media platforms, amplifying your brand's presence and connection."
        },
        {
            icon: {icon7},
            title : "Content Excellence",
            detail: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement."
        },
        {
            icon: {icon6},
            title : "Web Design",
            detail: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions."
        },
        {
            icon: {icon5},
            title : "Data-Driven Insights",
            detail: "Leverage data to refine your strategies, making informed decisions that drive revenue growth."
        },
        {
            icon: {icon3},
            title : "End-to-End Solutions",
            detail: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey."
        },
        {
            icon: {icon4},
            title : "Video marketing",
            detail: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns."
        }
    ]
    return (
        <div className="third">
            <h1 className="third-head">Our Service Offerings</h1>
            <p className="third-p">Strategies that Drive Property Market Excellence</p>
            <div className="third-outer">
                {
                    data.map((box, index) => {
                        return <Block key={index} data={box}/>
                    } )
                }
            
            </div>
            <button>Get Started</button>
        </div>
    )
}
export default Third;