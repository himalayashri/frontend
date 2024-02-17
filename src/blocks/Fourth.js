import teacher from "../images/rafiki.svg";
import Block2 from "../components/Block2";
import ikon1 from "../images/ikon(1).svg";
import ikon2 from "../images/ikon(2).svg"
import ikon3 from "../images/ikon(3).svg"
import ikon4 from "../images/ikon(4).svg"


function Fourth () {
    let data = [
        {
            icon: {ikon1},
            title: "Market Trends Analysis",
            detail: "Predictive insights to guide real estate strategies."
        },
        {
            icon: {ikon2},
            title: "Targeted Buyer Persona",
            detail: "Understand and connect with your ideal property buyers."
        },
        {
            icon: {ikon3},
            title: "Competitor Insights",
            detail: "Stand out in the property market with informed strategies."

        },
        {
            icon: {ikon4},
            title: "Stand out in the property market with informed strategies.",
            detail: "Captivate buyers with appealing visuals and immersive experiences."
        }
    ]
    return (
        <div className="fourth">
        <h1 className="fourth-head">Navigating Real Estate's Digital Landscape</h1>
        <p className="fourth-p">Insights for Real Estate Marketing Advantage</p>
        <div className="fourth-outer">
            <div className="fourth-inner">
            {data.map((item, index) => {
                return <Block2 key={index} data={item}/>
            })}
            </div>
            <img src={teacher} alt="" />
        </div>
        </div>
    )
}
export default Fourth;