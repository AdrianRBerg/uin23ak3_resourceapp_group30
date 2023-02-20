import React from 'react';
import { useState } from "react";
import Tekst from './tekst.js';

function Layout({}) {
    const [state, setState] = useState("HTML")

    function endreTekst(tekst) {
        setState(tekst)
    }


    return(
        <div class="content">
        <header>
            <h1>Ressursarkiv</h1>
        </header>
        <button id="button1" onClick={() => endreTekst('HTML')}>HTML</button>
        <button id="button2" onClick={() => endreTekst('CSS')}>CSS</button>
        <button id="button3" onClick={() => endreTekst('JavaScript')}>JavaScript</button>
        <button id="button4" onClick={() => endreTekst('React')}>React</button>
        <button id="button5" onClick={() => endreTekst('Sanity and headless CMS')}>Sanity & headless CMS</button>

        <section id="startpage">
           <Tekst name={state}/>
        </section>
    </div>
    );
}

export default Layout