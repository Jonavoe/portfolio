import React from 'react'
import AutoflowLanding from "../assets/AutoflowLanding.png"
import AutoflowDesktop from "../assets/AutoflowDesktop.png"
import smlapp from "../assets/smlapp.png"
import vendedores from "../assets/vendedores.png"
import corredores from "../assets/corredores.png"
import CardRight from './CardRight'
import CardLeft from './CardLeft'
import CardMobile from './CardMobile'
export default function Projects({ es }) {

    return (
        <div id='work' className='flex justify-center gap-10 mb-10 md:mb-40'>
            <div className='w-3/4 md:w-3/6 flex  justify-center gap-10'>
                <div className='flex flex-col gap-4 '>
                    <h2 className='text-3xl font-bold text-[--lightest-slate]'><span className='text-[--green]'>03.</span> Some Things I’ve Built</h2>
                    <div className='flex flex-col md:gap-10'>

                        <CardRight
                            image={AutoflowLanding}
                            title={es ? "Autoflow Landing" : "Autoflow Landing"}
                            description={es ? "Rediseñé la página de aterrizaje para mejorar la experiencia del usuario e impulsar las conversiones. Creé contenido atractivo para mostrar los beneficios de Autoflow e incentivar la prueba de la plataforma. Implementé nuevos llamados a la acción para fomentar una mayor participación del usuario." : "Redesigned landing page to improve user experience and boost conversions. Crafted compelling copy to showcase Autoflow's benefits and encourage platform trial. Implemented new calls to action for enhanced user engagement."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Github", "TailwindCSS"]}
                            git={""}
                            page={"https://www.autoflow.com.ar/"}
                        />


                        <CardLeft
                            image={AutoflowDesktop}
                            title={es ? "Autoflow Dashboard" : "Autoflow Dashboard"}
                            description={es ? "Interfaz de usuario mejorada para una navegación y uso más sencillos. Se agregaron funciones para una visión general integral del rendimiento del flujo de trabajo. Se crearon informes detallados para obtener información valiosa sobre el uso de Autoflow, lo que respalda la toma de decisiones estratégicas." : "Enhanced UI for easier navigation and usage. Added features for comprehensive workflow performance overview. Created detailed reports for valuable insights into Autoflow usage, supporting strategic decision-making."}
                            technologies={["ReactJs", "NextJs", "TypeScript", "Docker", "AWS", "GitLab", "TailwindCSS"]}
                            git={""}
                            page={"https://app.autoflow.com.ar/"}
                        />

                        <CardRight
                            image={smlapp}
                            title={es ? "Social Media Lab Empleados" : "Social Media Lab Employees"}
                            description={es ? "Se desarrolló una aplicación web para una gestión eficiente de empleados. Se implementaron funcionalidades clave que incluyen la incorporación, la baja, la gestión de permisos y herramientas de comunicación. Se diseñó una interfaz intuitiva para un acceso rápido a la información necesaria." : "Developed web app for efficient employee management. Implemented key functionalities including onboarding, offboarding, permissions management, and communication tools. Designed intuitive interface for quick access to necessary information."}
                            technologies={["ReactJs", "NodeJs", "MongoDB", "TailwindCSS", "GitHub"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardLeft
                            image={vendedores}
                            title={es ? "Social Media Lab Vendedores" : "Social Media Lab  Sellers"}
                            description={es ? "Se desarrolló una herramienta de comunicación para una interacción eficiente con los leads (clientes potenciales). Se implementó un sistema de registro de ventas para grabar las interacciones y las ventas cerradas. Se generaron informes personalizados que brindan información valiosa sobre el desempeño de los representantes de ventas, lo que ayuda a los gerentes a tomar decisiones estratégicas." : "Built communication tool for efficient lead interaction. Implemented sales logging system for recording interactions and completed sales. Generated custom reports for insights into sales reps' performance, aiding strategic decision-making by managers."}
                            technologies={["ReactJs", "NodeJs", "MongoDB", "TailwindCSS", "GitHub"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />

                        <CardRight
                            image={corredores}
                            title={es ? "Social Media Lab Corredores" : "Social Media Lab Runners"}
                            description={es ? "Se creó un sistema para clasificar leads (clientes potenciales) y su asignación automatizada a representantes de ventas. Se desarrolló un sistema de seguimiento del progreso para monitorear a los leads a lo largo de todo el proceso de ventas." : "Created system for categorizing leads and automated assignment to sales reps. Developed progress tracking system for monitoring leads throughout the sales process."}
                            technologies={["ReactJs", "NodeJs", "MongoDB", "TailwindCSS", "GitHub"]}
                            git={"https://github.com/Jonavoe/Ventas"}
                            page={"https://ventas-jonavoe.vercel.app/"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
