import React from 'react'
import AutoflowLanding from "../assets/AutoflowLanding.png"
import AutoflowDesktop from "../assets/AutoflowDesktop.png"
import smlapp from "../assets/smlapp.png"
import vendedores from "../assets/vendedores.png"
import corredores from "../assets/corredores.png"
import CardRight from './CardRight'
import CardLeft from './CardLeft'
import CardMobile from './CardMobile'
export default function OtherProjects() {

    return (
        <div id='work' className='flex justify-center gap-10 mb-10 md:mb-40'>
            <div className='w-3/4 md:w-3/6 flex  justify-center gap-10'>
                <div className='flex flex-col gap-4 '>
                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>03.</span> Some Things I’ve Built</h2>
                    <div className='flex flex-col md:gap-10'>

                        <CardRight
                            image={AutoflowLanding}
                            title={"Autoflow Dashboard"}
                            description={"Redesigned landing page to improve user experience and boost conversions. Crafted compelling copy to showcase Autoflow's benefits and encourage platform trial. Implemented new calls to action for enhanced user engagement."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Docker", "AWS", "Github"]}
                            git={""}
                            page={"https://www.autoflow.com.ar/"}
                        />

                        <CardLeft
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"Enhanced UI for easier navigation and usage. Added features for comprehensive workflow performance overview. Created detailed reports for valuable insights into Autoflow usage, supporting strategic decision-making."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Docker", "AWS", "GitLab"]}
                            git={""}
                            page={"https://app.autoflow.com.ar/"}
                        />

                        <CardRight
                            image={smlapp}
                            title={"Autoflow Dashboard"}
                            description={"Developed web app for efficient employee management. Implemented key functionalities including onboarding, offboarding, permissions management, and communication tools. Designed intuitive interface for quick access to necessary information."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardLeft
                            image={vendedores}
                            title={"Autoflow Dashboard"}
                            description={"Built communication tool for efficient lead interaction. Implemented sales logging system for recording interactions and completed sales. Generated custom reports for insights into sales reps' performance, aiding strategic decision-making by managers."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardRight
                            image={corredores}
                            title={"Autoflow Dashboard"}
                            description={"Created system for categorizing leads and automated assignment to sales reps. Developed progress tracking system for monitoring leads throughout the sales process."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />
                        <CardMobile
                            image={AutoflowLanding}
                            title={"Autoflow Dashboard"}
                            description={"Redesigned landing page to improve user experience and boost conversions. Crafted compelling copy to showcase Autoflow's benefits and encourage platform trial. Implemented new calls to action for enhanced user engagement."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Docker", "AWS", "Github"]}
                            git={""}
                            page={"https://www.autoflow.com.ar/"}
                        />

                        <CardMobile
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"Enhanced UI for easier navigation and usage. Added features for comprehensive workflow performance overview. Created detailed reports for valuable insights into Autoflow usage, supporting strategic decision-making."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Docker", "AWS", "GitLab"]}
                            git={""}
                            page={"https://app.autoflow.com.ar/"}
                        />

                        <CardMobile
                            image={smlapp}
                            title={"Autoflow Dashboard"}
                            description={"Developed web app for efficient employee management. Implemented key functionalities including onboarding, offboarding, permissions management, and communication tools. Designed intuitive interface for quick access to necessary information."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardMobile
                            image={vendedores}
                            title={"Autoflow Dashboard"}
                            description={"Built communication tool for efficient lead interaction. Implemented sales logging system for recording interactions and completed sales. Generated custom reports for insights into sales reps' performance, aiding strategic decision-making by managers."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardMobile
                            image={corredores}
                            title={"Autoflow Dashboard"}
                            description={"Created system for categorizing leads and automated assignment to sales reps. Developed progress tracking system for monitoring leads throughout the sales process."}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
