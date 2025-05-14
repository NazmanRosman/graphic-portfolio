/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ItemCard } from "./item-card";
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
      :host {
        display: flex;
        color: var(--ddd-theme-primary);
        background-color: #111111;
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: flex;
        gap: 24px;
      }
      h3 span {
        font-size: var(--graphic-portfolio-label-font-size, var(--ddd-font-size-s));
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3><span>${this.t.title}:</span> ${this.title}</h3>
  <a href="https://google.com"  target="_blank" rel="noopener"><item-card title="Shadow Work" thumbnail="thumbnail.avif"></item-card></a>
  <item-card title="Shadow Work" thumbnail="thumbnail.avif">aa</item-card>
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