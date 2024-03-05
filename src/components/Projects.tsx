import React from 'react'
import AutoflowDesktop from "../assets/AutoflowDesktop.png"
import CardRight from './CardRight'
import CardLeft from './CardLeft'
export default function Projects() {

    return (
        <div id='projects' className='flex justify-center gap-10  mb-40'>
            <div className='w-3/4 md:w-3/6 flex  justify-center gap-10'>
                <div className='flex flex-col gap-4 '>
                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>03.</span> Some Things I’ve Built</h2>
                    <div className='flex flex-col gap-10'>

                        <CardRight
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"i work in upgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading"}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={""}
                            page={""}
                        />

                        <CardLeft
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"i work in upgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading"}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={""}
                            page={""}
                        />

                        <CardRight
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"i work in upgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading"}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={""}
                            page={""}
                        />

                        <CardLeft
                            image={AutoflowDesktop}
                            title={"Autoflow Dashboard"}
                            description={"i work in upgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading in the aplicationupgrading"}
                            technologies={["ReactJs", "NextJs", "Docker", "AWS", "GitLab", "CICD"]}
                            git={""}
                            page={""}
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}
