/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `header-bar`
 * 
 * @demo index.html
 * @element header-bar
 */
export class HeaderBar extends DDDSuper(LitElement) {

  static get tag() {
    return "header-bar";
  }

  constructor() {
    super();
    this.title = "Title";
    this.thumbnail = "impactra.png";
    this.link = "https://google.com";
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
        

      }
      *{
        box-sizing: border-box;
      }


      ul{
        margin: 0;
        padding: 0;
      }

      .container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 10;
        position: fixed;
        top: 0px;
        width: 100vw;
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        padding: 10px 50px 10px 50px;
        height: 80px;
        /* background-color: #11111150; */
        font-family: var(--main-font);

        
        /* position: relative; */
      }
      .right-side-item{
        color: white;
        display: flex;
        justify-content: center; /* centers horizontally */
        align-items: center;     /* centers vertically */
        border-radius: 30px;
        font-size: 18px;
        font-weight: 500;
        right: 0;
        font-family: var(--main-font);
      }
      
      .hamburger{
        width: 40px;
        height: 40px;
        display: none;
      }

      .logo{
        /* background-color: blue; */
        width: 70px;
        position: relative;
        z-index: 10;
      }

      ul{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 50px;
        font-size: 18px;
      }
      .nav-links{
        transition: all 0.3s ease-in-out;

      }

      /* Extra small devices (phones) */
      @media (max-width: 575.98px) {
        /* Styles for phones */
        .container{
          font-size: 9px;
          padding: 15px 0px;

          background: var(--bg-color);

        } 
        .container{
          flex-wrap: wrap;
          height: auto;
        }
        .nav-links.active{
          display: flex;
        }
        .nav-links{
          display: none;
          flex-direction: column;

          padding: 1rem;
          width: 100vw;
          padding: 20px 0;
          border-radius: 10px;
        }
        
        .nav-links li{
          font-size: 16px;

        }
        .hamburger{
          display: block;
          padding-right: 15px;

        }
        .logo{
          width: 60px;
          padding-left: 15px;
        }
        
      }

      /* Small devices (landscape phones, large phones) */
      @media (min-width: 576px) and (max-width: 767.98px) {
        /* Styles for small devices */
      }

      /* Medium devices (tablets) */
      @media (min-width: 768px) and (max-width: 991.98px) {
        /* Styles for tablets */
      }
      


    `];
  }

openHamburger(){
  const navLinks = this.renderRoot.querySelector('.nav-links');
  navLinks.classList.toggle('active');
  console.log(navLinks.classList);
}

  // Lit render the HTML
  render() {
    return html`
<div class="container">
  <img @click="${this._handleClick}" class="logo" src="lib/components/logo.svg" >
  <img @click="${this.openHamburger}" class="hamburger" src="../lib/components/hamburger.svg" width="70px">

  <ul class="nav-links">
    <li class="right-side-item">Work</li>
    <li class="right-side-item">Play</li>
    <li class="right-side-item">About</li>
    <li class="right-side-item">Resume</li>
  </ul>
  
    
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
    let url=new URL(`/lib/thumbnails/${this.thumbnail}`, import.meta.url).href;
    return url;
  }
  
}

globalThis.customElements.define(HeaderBar.tag, HeaderBar);