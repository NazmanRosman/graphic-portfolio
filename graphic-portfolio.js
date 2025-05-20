/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./lib/item-card.js";
import "./lib/header-bar.js";
import "./lib/project-page.js";
import "./lib/landing-page.js";
import "./lib/projects-view.js";
import "./lib/about-page.js";
/**
 * `graphic-portfolio`
 * 
 * @demo index.html
 * @element graphic-portfolio
 */
export class GraphicPortfolio extends DDDSuper(LitElement) {

  static get tag() {
    return "graphic-portfolio";
  }

  constructor() {
    super();
    this.title = "";
    this.currentView = "home";
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
        --page-padding: 0 15px;
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
    if(this.currentView === "home"){
      return html`
      <landing-page @item-click="${this._handleItemClick}"></landing-page>
      <!-- <about-page></about-page> -->
      <!-- <project-page></project-page> -->
      <!-- <projects-view class="projects"></projects-view> -->

      `;
    } else if(this.currentView === "project"){
      return html`
        <project-page @item-click="${this._handleItemClick}"></project-page>
      `;
    }

  } 

  //changes currentview to project page when card is clicked
  _handleItemClick(e){
    // console.log(e.detail.currentView);
    if(e.detail.currentView){
      this.currentView=e.detail.currentView;
    }

  }
}

globalThis.customElements.define(GraphicPortfolio.tag, GraphicPortfolio);