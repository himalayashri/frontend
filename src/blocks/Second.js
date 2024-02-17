import cuate from "../images/cuate.svg"

function Second () {
    return (
        <div className="second">
        <h1 className="second-head">Real Estate-Focused Digital Mastery</h1>
        <div className="second-outer">
            <img src={cuate} alt="cuate" />
            <div className="second-inner">
                <h1>Unlock the Potential of Digital Real Estate Excellence</h1>
                <p>At Osumare, we understand that the real estate landscape demands a digital presence that aligns with the intricacies of property marketing. Our range of specialized services is meticulously designed to catapult your brand's success in the ever-evolving digital property market.</p>
                <button>Get Started</button>
            </div>
        </div>
        </div>
    )
}

export default Second;