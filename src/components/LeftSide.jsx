import {TextComponent} from "./TextComponent";
import React from "react";

export const LeftSide = function () {
    const text = {
        about: {
            title:'ABOUT ME',
            details: `<i>"I owe my success to having listened respectfully to the very best advice, and then going 
                       away and doing the exact opposite."</i><br/>
              -- G. K. Chesterton `
        },

        soft_skills: {
            title: 'SOFT SKILLS',
            details:` 
            <b> Creative : </b><br/><br/>
            I use a creative approach to problem solve.
            </b><br/><br/>
            <b> Dependable: </b><br/><br/>
            I am a dependable person who is great at time management.
            <br/>    <br/>
            <b> Energetic: </b><br/><br/>
            I am always energetic and eager to learn new skills.
            <br/>    <br/>
            <b> Able : </b><br/><br/>
            I am able to handle multiple tasks on a daily basis.`
        },

    }
    return (
        <section className='left-side'>
            <p className='contact-details'>
                Call: +4077431660 or
                <br />
                Email: biancabuzatu@gmail.com
            </p>

            {
                Object.keys(text).map(key => (
                    <TextComponent key={key} title={ text[key].title } details={ text[key].details } />
                ))
            }
        </section>
    )
}