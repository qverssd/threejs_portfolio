import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component"
import { CTA } from "../components";
import { experiences, skills } from "../constants";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
    return (
        <section className="max-container">
            <h1 className="head-text">
                Hello, I'm{" "}
                <span className='blue-gradient_text font-semibold drop-shadow'>
                    {" "}
                    Pikanga
                </span>{" "}
                👋
            </h1>

            <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                <p>
                Software Engineer based in " ", specializing in building web applications.
                </p>
            </div>

            <div className='py-10 flex flex-col'>
                <h3 className="subhead-text">My Skills</h3>

                <div className='mt-16 gap-12 flex flex-wrap'>
                    {skills.map((skill) => (
                        <div className='block-container w-20 h-20' key={skill.name}>
                            <div className='btn-back rounded-xl' />
                            <div className='btn-front flex rounded-xl justify-center items-center'>
                                <img
                                src={skill.imageUrl}
                                alt={skill.name}
                                className='object-contain w-1/2 h-1/2'
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16'>
                <h3 className='subhead-text'>
                    Work Experience.
                </h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>I`m working at several companies sort right now,
                        leveling up my skills and teaming up with huge amount of pepole. Here's the rundown:
                    </p>
                </div>

                <div className='mt-12 flex'>
                    <VerticalTimeline>
                        {experiences.map((
                            experience, index) => (
                                <VerticalTimelineElement
                                key={experience.company_name}
                                date={experience.date}
                                iconStyle={{ background: experience.iconBg }}
                                icon={
                                    <div
                                    className='flex justify-center items-center w-full h-full'
                                    >
                                        <img 
                                        src={experience.icon}
                                        alt={experience.company_name}
                                        className='w-[60%] h-[60%] object-contain'
                                        />
                                    </div>
                                }
                                contentStyle={{
                                    borderBottom: "8px",
                                    borderStyle: "solid",
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: "none",
                                }}
                                >
                                </VerticalTimelineElement>
                            )
                        )}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}