import tabishFormal from "../images/formal-tabish.svg";
import tabishShort from "../images/tabish-short.svg";
import tick from "../images/tick.svg";
import right from "../images/right.svg";
import left from "../images/left.svg";


function Ninth(){
    return(
        <div className="ninth">
        <h1 className="ninth-head">What Our Pharma Partners Say</h1>
        <p className="ninth-p">Driving Transformations, One Brand at a Time</p>
        <div className="ninth-outer">
            <img src={tabishFormal} alt="tabish formal" id="tabish-f"/>
            <div className="ninth-inner-outer">
                <div className="ninth-inner-inner">
                    <div className="n-inner3">
                    <img src={tabishShort} alt="tabish short" id="tabish-s"/>
                    <h2>Tabish Khan</h2>
                    </div>
                    <img src={tick} alt="tick" id="tick" />
                </div>
                <p>Osumare's expertise in pharma marketing is unparalleled. Their strategies helped us navigate complex regulations while driving remarkable growth.</p>
            </div>
        </div>
        <div className="ninth-second">
           <button><img src={left} alt="left pagination" /></button>
           <button><img src={right} alt="right pagination" /></button>
        </div>
        </div>
    )
}

export default Ninth;