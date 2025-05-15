/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ItemCard } from "./item-card";
import { HeaderBar } from "./header-bar";
import { ProjectPage } from "./project-page";
/**
 * `graphic-portfolio`
 * 
 * @demo index.html
 * @element graphic-portfolio
 */
export class GraphicPortfolio extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "graphic-portfolio";
  }

  constructor() {
    super();
    this.title = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/graphic-portfolio.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host{
        --bg-color: #111111;
        --main-font: "Manrope", "Manrope Placeholder", sans-serif;
        --max-width: 1200px;
        --page-padding: 0 30px;
      }
      
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--bg-color);
        font-family: var(--main-font);
        margin: auto;
        /* margin: 100px; */
        box-sizing: border-box;
        overflow: visible;

      }
      .wrapper {
        display: flex;
        flex-direction: column;
        
        max-width: var(--max-width); 

        margin: 0 auto ;
        padding: var(--page-padding);
        overflow: visible;

        /* gap: 24px; */
      }

      .background{
        /* background-image: url("lib/thumbnails/impactra.png"); */
        /* background-color: gray; */
      }

      .title{
       
       /* top: 30%; */
        font-family: "Inter", "Inter Placeholder", sans-serif;
        font-size: 50px;
        font-weight: 600;
        /* color: #dcdcdc; */
        color: var(--main-bg-color);
        z-index: 0;
        
        position: fixed;
        top: 50%;
        /* left: 50%;   */
        transform: translate(0, -50%);
        max-width: 1000px; 
        width: 70%;
        letter-spacing: -0.5px;
      }

      .title em{
        font-weight: 100; 
        font-size: 55px;
        font-family: 'DM Serif Display';
        /* font-style: normal; */
      }

      .title-container{
      height: 100vh;
     }

      .container-background{
        width: 100%;
        max-width: var(--max-width); 

        /* left: 0; */
        /* top: 100%; */
        /* position: absolute; */
        background-color: var(--bg-color);
        z-index: 1;
        /* background-color: #ffffff; */
       
      }
      .projects-header{
        display: flex;
        justify-content: space-between;
        margin: 50px 0;
      }
      .latest-projects{
        font-size: 18px;
        font-weight: 600;
      }
      .filters{
        display: flex;
        gap: 16px;

      }

      .filter{
        font-family: "Inter", "Inter Placeholder", sans-serif;
        font-size: 16px;
        color: rgb(153, 153, 153);
      }
      .card-container {
        z-index: 1;
        display: grid;
        /* border: 1px solid red; */
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        gap: 45px;
        justify-content: center;
        max-width: var(--max-width); 

        
      }

      item-card{
        height: auto;
        z-index: 1;

      }
      .item{
        padding: 2em;
      }

      h3 span {
        font-size: var(--graphic-portfolio-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="background">
  <div class="wrapper">
    <header-bar> </header-bar>

    <div class="title-container">
      <div class="title">
      Garima is a <em>product designer </em> who leverages her background in tech and UX to design experiences that are <em>inclusive</em> and  <em>playful</em>
      </div>  
    </div>  
  </div>  
</div>
<div class="wrapper">

  <div class = "container-background">
    <!-- <div class="projects-header"> -->

      <div class="latest-projects">LATEST PROJECTS</div>
      <div class="filters">
        <div class="filter">All</div>
        <div class="filter">Technology</div>
        <div class="filter">Grr</div>
        <div class="filter">Videos</div>
      </div>
    </div>
      <div class="card-container">
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Impactra" thumbnail="impactra.png">aa</item-card></a>
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Splitem" thumbnail="splitem.png"></item-card></a>
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Hangin" thumbnail="hangin.png">aa</item-card></a>
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif"></item-card></a>
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif"></item-card></a>
        <a href="https://google.com"  target="_blank" rel="noopener"><item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif"></item-card></a>
      </div>
  </div>  

</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(GraphicPortfolio.tag, GraphicPortfolio);