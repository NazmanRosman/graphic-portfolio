/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ItemCard } from "./src/item-card";
import { HeaderBar } from "./src/header-bar";
import { ProjectPage } from "./src/project-page";
import { LandingPage } from "./src/landing-page";
import { ProjectsView } from "./src/projects-view";
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
    this.currentView = "home";
    this._handleItemClick = this._handleItemClick.bind(this); // Bind the handler


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
      currentView: { type: String },
    };
  }
  updated(changedProperties){
    
    //add event listener to home page and landing page to change views
    if (this.shadowRoot.querySelector('landing-page')){
      const landingPage = this.shadowRoot.querySelector('landing-page');
      // console.log(landingPage);
      landingPage.addEventListener('item-click', this._handleItemClick);
    } else if (this.shadowRoot.querySelector('project-page')){
      const projectPage = this.shadowRoot.querySelector('project-page');
      projectPage.addEventListener('item-click', this._handleItemClick);
    }
    
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
    `];
  }

  // Lit render the HTML
  
  render() {
    console.log(this.currentView);
    if(this.currentView==="home"){
      return html`
      <!-- <landing-page></landing-page> -->
      <projects-view></projects-view>
      `;
    } else if(this.currentView==="project"){
      return html`
        <project-page></project-page>
      `;
    }

  } 

  //changes currentview to project page when card is clicked
  _handleItemClick(event){
    console.log(event.detail.currentView);
    if(event.detail.currentView){
      this.currentView=event.detail.currentView;
      // this.requestUpdate();
    }

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