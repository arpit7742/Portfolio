import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/headercontent";
import { Animate } from 'react-simple-animate';
import './styles.scss';
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';


const personalDetail = [
    {
        label: "Name:",
        value: "Arpit Agrawal",
    },
    {
        label: "Age:",
        value: "20",
    },
    {
        label: "Address:",
        value: "India",
    },
    {
        label: "Email:",
        value: "agrawalarpit414@gmail.com",
    },
    {
        label: "Contact No:",
        value: "+91 774285106",
    },
];

const jobsummary = "Motivated and highly skilled Frontend Developer with a strong passion for creating visually appealing and user-friendly websites. Possessing a solid foundation in HTML, CSS, and JavaScript, I am eager to leverage my technical expertise and creative problem-solving skills to contribute to the success of an innovative organization."
const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__peronalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(-900px)'

                        }}
                        end={{
                            transform: 'translateX(0px)'

                        }}
                    >
                        <h3> Front End Developer</h3>
                        <p>{jobsummary}</p>
                    </Animate>


                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(500px)'

                        }}
                        end={{
                            transform: 'translateX(0px)'

                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personalDetail.map((item, i) => (
                                    <li key={i}>
                                        <span className="title">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__servicesWrapper">
                <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: 'translateX(600px)'

                        }}
                        end={{
                            transform: 'translateX(0px)'

                        }}
                    >
                    <div className="about__content__servicesWrapper__innercontent">
                        <div>
                            <FaDev size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                        <div>
                            <DiApple size={60} color="var(--yellow-theme-main-color)" />
                        </div>
                    </div>
                    </Animate>

                </div>


            </div>

        </section>
    )
}
export default About;