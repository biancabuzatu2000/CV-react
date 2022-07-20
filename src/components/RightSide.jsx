import './css/right-side.scss'
import avatar from '../assets/avatar.png'
import {TextComponent} from "./TextComponent"
import {RatingLevel} from "./RatingLevel";
import React from "react";


export const RightSide = function () {
    const skills = [
        {
            name: 'HTML',
            value:8
        },
        {
            name: 'CSS',
            value:8
        },
        {
            name: 'C++/C',
            value:5
        },
        {
            name: 'Python',
            value:9
        },
        {
            name: 'Image processing',
            value:7
        },
        {
            name: 'OpenGl ',
            value:5
        },
        {
            name: 'Vue.js',
            value:4
        }
    ]

    const sections = {
        education: {
            title:'EDUCATION',
            details:`I graduated the University of Mathematics and Computer Science in Timisoara`
        },

        personal_projects: {
            title:'PERSONAL PROJECTS',
            details:`Authentication system based on facial detection and recognition,
            3D bedroom design with OpenGL/Jogl/C++,
            Creating a To-Do aplication with C,
            Creating a digital store console gaming with C++`
        }
    }
    return (
        <section className='right-side'>
        <header>
            <figure>
                <img src={ avatar } alt="my picture avatar" />
            </figure>
            <h1>
                BUZATU <br/> <b> BIANCA LILIANA </b>
            </h1>
            <h2>
                frontend developer
            </h2>
        </header>
            <TextComponent index='01' title='SKILLS'>
                {
                    skills.map(({name,value}) => (
                        <RatingLevel name={name} value={value}/>
                    ))
                }
            </TextComponent>
            {
                Object.keys(sections).map((key,index) => (
                    <TextComponent index={`0`+`${index+2}`} title={sections[key].title}
                    details={sections[key].details} />
                ))
            }
        </section>
    )
}