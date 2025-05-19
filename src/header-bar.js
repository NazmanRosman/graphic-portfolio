/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `header-bar`
 * 
 * @demo index.html
 * @element header-bar
 */
export class HeaderBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "header-bar";
  }

  constructor() {
    super();
    this.title = "Title";
    this.thumbnail = "impactra.png",
    this.link = "https://google.com",
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",

      
    };

  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      thumbnail: {type: String},
      link: {type: String},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        
        font-family: var(--ddd-font-navigation);
        /* min-width: 400px; */
        height: auto;
        margin: 0;

      }

      *{
        margin: 0;
      }

      .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
        position: fixed;
        top: 0px;
        max-width: var(--max-width);
        width: auto;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        margin: auto;
        padding: 20px 30px 20px 30px;
        /* background-color: #11111150; */
        font-family: var(--main-font);
        /* background-color:rgba(0, 0, 0, 0.7) */


        
        /* position: relative; */
      }
      .contact{
        padding: 10px 30px;
        height: 30px;
        background: white;
        color: black;
        display: flex;
        justify-content: center; /* centers horizontally */
        align-items: center;     /* centers vertically */
        border-radius: 30px;
        font-size: 16px;
        font-weight: 700;
        right: 0;
      }

      .logo{
        /* background-color: blue; */
        height: 50px;
        position: relative;
        z-index: 10;
      }
      


    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="container">
  <img @click="${this._handleClick}" class="logo" src="lib/components/man.png">
  <div class="contact"> Contact</div>
</div>
`;
  }

  //update page to home when logo clicked
  _handleClick() {
    const event = new CustomEvent('item-click', {
      detail: { message: 'logo clicked!', currentView: "home"},
      bubbles: true,   // Makes the event bubble up to the parent
      composed: true,  // Allows the event to pass through shadow DOM boundaries
    });
    this.dispatchEvent(event);  // Dispatch the event
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

globalThis.customElements.define(HeaderBar.tag, HeaderBar);