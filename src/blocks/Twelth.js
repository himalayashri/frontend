import phone from "../images/phone-fill.svg";
import mail from "../images/mail-fill.svg";
import osumare from "../images/osumare.svg";
import icon1 from "../images/p1(1).svg";
import icon2 from "../images/p1(2).svg";
import icon3 from "../images/p1(3).svg";
import icon4 from "../images/p1(4).svg";
import icon5 from "../images/p1(5).svg";
import icon6 from "../images/p1(6).svg";


function Twelth(){
    return (
        <div className="twelth">
            <div id="twelth-outer1" className="twelth-outer">
                <div>
                    <img src={osumare} alt="osumare-logo" id="os-logo"/>
                    <p>The best digital marketing agency in Pune with a proven track record of consistently delivering quality service.</p>
                </div>
                <div>
                    <h2>Address</h2>
                    <p>Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi, Pune-14, Maharastra, India.</p>
                </div>
                <div>
                    <h1>Contacts</h1>
                    <div className="outer1">
                        <img src={phone} alt="phone" />
                        <p>hello@osumare.in</p>
                    </div>
                    <div className="outer1">
                        <img src={mail} alt="mail" />
                        <p>+91 8459 8762 26</p>
                    </div>
                   
                </div>

            </div>
            <div id="twelth-outer2" className="twelth-outer">
                <h1>Menu</h1>
                <p>Home</p>
                <p>About</p>
                <p>Services</p>
                <p>Work</p>
                <p>Blog</p>
                <p>Career</p>

            </div>
            <div id="twelth-outer3" className="twelth-outer">
                <h1>Social</h1>
                <img src={icon1} alt="facebook" />
                <img src={icon2} alt="youtube" />
                <img src={icon3} alt="pinterest" />
                <img src={icon4} alt="instagram" />
                <img src={icon5} alt="whatsapp" />
                <img src={icon6} alt="pinterest" />


            </div>
        </div>
    )
}

export default Twelth;