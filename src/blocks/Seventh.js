import icon1 from "../images/ic(1).svg";
import icon2 from "../images/ic(2).svg";
import icon3 from "../images/ic(3).svg";
import icon4 from "../images/ic(4).svg";
import Block3 from "../components/Block3";


function Seventh (){
    let data = [
        {
           icon: {icon1},
           title: "Effective CTAs",
           detail: "See how our strategic CTAs drove a significant increase in property inquiries and accelerated sales for a real estate agency."
        },
        {
            icon: {icon2},
            title: "Conversion-Optimized Landing Pages",
            detail: "Explore a case study where our landing page optimization increased property lead conversion rates by 30%"
        },
        {
            icon: {icon3},
            title: "Trust Building with Social Proof",
            detail: "Discover how leveraging client testimonials boosted buyer confidence, leading to higher conversion rates for a property development project"
        },
        {
            icon: {icon4},
            title: "Mobile-First Success:",
            detail: "Learn how our mobile-responsive design approach resulted in a 25% increase in inquiries from mobile users for a real estate agency."
        }
    ]
    return (
        <div className="seventh">
        <h1 className="seventh-head">Our Expertise in Action</h1>
        <div className="seventh-outer">
        {
            data.map((item, index) => {
                return <Block3 key={index} data={item}/>
            })
        }
        </div>
      
        </div>
    )
}
export default Seventh;