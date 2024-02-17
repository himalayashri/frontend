import house from "../images/house.svg"

function First () {
    return (
        <div className="first">
        <h1>Elevate <span>Real Estate Success</span> with Osumare's Digital Expertise</h1>
        <p>Tailored Solutions for Thriving in the Digital Real Estate Landscape</p>
        <img src={house} alt="house" />
        <button>Get Started</button>

        </div>
    )
}

export default First;