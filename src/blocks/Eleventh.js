function Eleventh(){
    return (
        <div className="eleventh">
            <h1>Connect with Our Digital Marketing Experts</h1>
            <p>Reach Out for Tailored Strategies and Results-Driven Solutions. Let's Elevate Your Online Presence Together</p>
            <form action="">
            <div className="form">
                
                    <div className="form-outer">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name"/>
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" placeholder="Enter your number"/>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Enter your email"/>
                    </div>

                    <div className="form-inner">
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" id="msg" cols="20" rows="5" placeholder="Enter your message"></textarea>
                    </div>

                   
                    
                
            </div>
            </form>
            <button>Get Started</button>
        </div>
    )
}
export default Eleventh;