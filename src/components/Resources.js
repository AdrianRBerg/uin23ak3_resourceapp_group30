import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Tekst from './Tekst.js';


function Resources(prop) {
    const navigate = useNavigate();
    function HandleClick(route) {
        navigate(route);
    }
    return(
        <div class="content">
        <header>
            <h1>Ressursarkiv</h1>
        </header>
        <button onClick={() => HandleClick('/HTML')}>HTML</button>
        <button onClick={() => HandleClick('/CSS')}>CSS</button>
        <button onClick={() => HandleClick('/JavaScript')}>JavaScript</button>
        <button onClick={() => HandleClick('/React')}>React</button>
        <button onClick={() => HandleClick('/Sanity')}>Sanity & headless CMS</button>
        <section id="startpage">
           <Tekst category={prop.category}/>
        </section>
    </div>
    );
}

export default Resources