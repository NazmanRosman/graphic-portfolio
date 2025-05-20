/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `about-page`
 * 
 * @demo index.html
 * @element about-page
 */
export class AboutPage extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-page";
  }

  constructor() {
    super();
    this.title = "Title";
    
    
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
      :host {
        display: block;
        /* line-height: 2rem; */
        margin: 0;
        --project-title-font-size: 28px;
        --project-header-font-size: 64px;
        --body-font-size: 20px;
        font-size: var(--body-font-size);
      }
      h1, p{
        margin: 0;
        padding: 0;
      }

      .hero {
        padding: var(--page-padding);
        max-width: 1000px; 
        margin: 0 auto ;
        position: relative;
        top: 50vh;
        transform: translateY(-50%);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        gap: 50px;
      }
      .text{
        display: flex;
        flex-direction: column;
      }

      img{
        height: 300px;
        width: 300px;
        border-radius: 50%;
        /* overflow: hidden; */
        object-fit: cover;
      }
      h1{
        font-size: 40px;
        margin-bottom: 15px;
      }
      p{
        font-size: 20px;
        letter-spacing: 0.6px;
        color: #FFFFFF;
        opacity: 0.8;
        line-height: 150%;
      }

      .links{
        margin: 20px 0;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        
      }

      .links p{
        color: white;
        opacity: 0.9;
        font-weight: 700;
        font-size: 20px;
      }


      .socials{
        margin-bottom: 5px;
        display: flex;
        flex-wrap: wrap;
        column-gap: 35px;

      }




    `];
  }

  // Lit render the HTML
  render() {
    return html`
<header-bar></header-bar>
<div class="hero">
    <div class="image">
      <img src="../lib/components/headshot.webp">
    </div>
    <div class="text">  
      <div class="header">
        <h1>Hi, I'm Mortiz</h1>
      </div>
      <div class="description">
        <p>I‘m a UX/UI Designer with over six years experience conceptualizing and crafting digital products, helping businesses and non-profits expand their capacity for impact 🚀 As a tutor at CareerFoundry*, I help aspiring UX design students build a career they love by giving feedback and sharing my knowledge and passion for design, technology, and the field of education 🎓</p>
      </div>
      <div class="links">
        <div class="socials">
          <p>LinkedIn</p>
          <p>Github</p>
          <p>Instagram</p>
          <p>Facebook</p>
       
        </div>
        <p>mortiz.doe@gmail.com</p>

     
      </div>
    </div>
</div>
 

`;
  }

  getThumbnailUrl(){
    let url=new URL(`/lib/thumbnails/${this.thumbnail}`, import.meta.url)
    return url;
    
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(AboutPage.tag, AboutPage);