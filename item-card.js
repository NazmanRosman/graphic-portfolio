/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `item-card`
 * 
 * @demo index.html
 * @element item-card
 */
export class ItemCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "item-card";
  }

  constructor() {
    super();
    this.title = "Title";
    this.thumbnail = new URL(`/lib/thumbnail.avif`, import.meta.url),
    this.link = "https://google.com",
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",

      
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/item-card.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      thumbnail: {type: String},
      link: {type: URL},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        font-family: var(--ddd-font-navigation);
      }
      .thumbnail, .container{
        width:584px;
        height:448px; 
        border-radius: 1.5%;
      }
      .thumbnail{
        transition: 0.3s ease-out;
        object-fit: cover;
      }
      .container{
        position: relative;
        background-color: black;
        overflow: hidden
      }
      .title{
        transition: opacity 0.3s ease-out;
        /* content: "aaas"; */
        position: absolute;
        bottom: 36px;
        left: 36px;
        font-family: "Manrope", "Manrope Placeholder", sans-serif;
        font-size: 22px;
        color: white;
        opacity: 0;
        font-weight: 500;
        
      }
      .arrow{
        transition: .3s ease-out;
        position: absolute;

        width: 60px;
        height: 60px;
        bottom: 25px;
        right: 100px;
      }
      .arrow-shape{

        opacity: 0;
        transform:scale(0.3) rotate(-135deg);
      }
      .arrow-box{        
        background-color: #ffffff99;
        opacity:0;
        border-radius: 6%
      }
      .container:hover{
        .title{
          opacity: 1;
        }
        .thumbnail{
          opacity: 0.5;
          transform: scale(1.1)
        }
        .arrow-shape{
          opacity: 1;
          transform: scale(0.3) rotate(0);
          right:36px;
        }
        .arrow-box{
          opacity: 0.3;
          right:36px;
        }
      }

    

    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="container">
  <img src=${this.getThumbnailUrl()} class="thumbnail">
  <div class="title">${this.title}</div>
  <div class="arrow arrow-box">
  </div>    <img src="lib/arrow.png" class="arrow arrow-shape">


</div>
`;
  }

  getThumbnailUrl(){
    let url=new URL(`/lib/${this.thumbnail}`, import.meta.url)
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

globalThis.customElements.define(ItemCard.tag, ItemCard);