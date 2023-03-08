import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Tekst from './tekst.js';


function Resources(prop) {
    const navigate = useNavigate();
    function HandleClick(route) {
    navigate(route);
    console.log(route);
    }
    console.log(prop);
    return(
        <div class="content">
        <header>
            <h1>Ressursarkiv</h1>
        </header>
        <button id="button1" onClick={() => HandleClick('HTML')}>HTML</button>
        <button id="button2" onClick={() => HandleClick('CSS')}>CSS</button>
        <button id="button3" onClick={() => HandleClick('JavaScript')}>JavaScript</button>
        <button id="button4" onClick={() => HandleClick('React')}>React</button>
        <button id="button5" onClick={() => HandleClick('Sanity')}>Sanity & headless CMS</button>

        <section id="startpage">
           <Tekst name={prop.category}/>
        </section>
    </div>
    );
}

export default Resources