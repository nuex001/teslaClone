import React from 'react'
import joinUs from "../../../assets/images/join-us.jpg"
import { Link } from 'react-router-dom'
function Join() {
    return (
        <section className="join">
            <img src={joinUs} alt="join Us" />
            <div className="sec1">
                <h1>Join Us</h1>
                <h4>Accelerate the world’s transition to sustainable energy.</h4>
                <Link>Search Careers</Link>
            </div>
           <div className="textBox">
           <p>Tesla participates in the <Link>E-Verify Program</Link>.</p>
           <p>Tesla is an Equal Opportunity / Affirmative Action employer committed to diversity in the workplace. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, age, national origin, disability, protected veteran status, gender identity or any other factor protected by applicable federal, state or local laws.</p>
            <p>Tesla is also committed to working with and providing reasonable accommodations to individuals with disabilities. Please let your recruiter know if you need an accommodation at any point during the interview process.</p>
           </div>
        </section>
    )
}

export default Join