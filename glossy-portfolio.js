/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { GlossyPortflioCard } from "./src/glossy-portflio-card";
import { GlossyPortfolioHeader } from "./src/glossy-portfolio-header";
import { GlossyPortflioPage } from "./src/glossy-portfolio-page";
import { GlossyPortflioHome } from "./src/glossy-portfolio-home";
import { GlossyPortflioGrid } from "./src/glossy-portfolio-grid";
import { GlossyPortfolioAbout } from "./src/glossy-portfolio-about";
/**
 * `glossy-portfolio`
 * 
 * @demo index.html
 * @element glossy-portfolio
 */
export class GlossyPortfolio extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "glossy-portfolio";
  }

  constructor() {
    super();
    this.title = "";
    this.currentView = "home";


    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/glossy-portfolio.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      currentView: { type: String },
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
        --page-padding: 0 25px;
        --mobile-page-padding: 0 15px;
        
    
      }
 
      
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--bg-color);
        font-family: var(--main-font);
        margin: auto;
        box-sizing: border-box;
        overflow: visible;
        min-height: 100vh;
      }
    `];
  }

  // Lit render the HTML
  
  render() {
    if(this.currentView==="home"){
      return html`
      <glossy-portflio-home></glossy-portflio-home>
      <!-- <glossy-portfolio-about></glossy-portfolio-about> -->
      <!-- <glossy-portflio-page></glossy-portflio-page> -->
      <!-- <glossy-portflio-grid class="projects"></glossy-portflio-grid> -->

      `;
    } 

  } 

  //changes currentview to project page when card is clicked


  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(GlossyPortfolio.tag, GlossyPortfolio);