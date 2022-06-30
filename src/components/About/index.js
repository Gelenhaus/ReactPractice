import React from 'react';
import fallingEmpire from '../../assets/fallingEmpire/fallingempire.jpeg'



function About() {


    return (
        <section  >
            <div>
                <img className="romeImages" src={fallingEmpire} ></img>
            </div>

            <h1>Rome in 410</h1>
        </section>

    )
}

export default About;