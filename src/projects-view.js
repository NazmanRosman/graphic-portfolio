/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `projects-view`
 * 
 * @demo index.html
 * @element projects-view
 */
export class ProjectsView extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "projects-view";
  }

  constructor() {
    super();
    this.title = "Title";
    this.thumbnail = "impactra.png",
    this.link = "https://google.com",
    this.filtersList = new Set(),

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
        
        /* min-width: 400px; */
        height: auto;


      }
      .wrapper{
        background-color: white;

      }
      .container-background{
        margin: auto;
        width: 100%;
        max-width: var(--max-width); 
        /* left: 0; */
        /* top: 100%; */
        /* background-color: var(--bg-color); */

        
        position: relative

       
      }
      .projects-header{
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
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
        display: grid;
        /* border: 1px solid red; */
        grid-template-columns: repeat(2, minmax(200px, 1fr));
        gap: 45px;
        justify-content: center;
        max-width: var(--max-width); 

        
      }

      item-card{
        height: auto;

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
          
<div class = "container-background">
  <div class="projects-header">

    <div class="latest-projects">LATEST PROJECTS</div>
    <div class="filters">
      <div class="filter" name="all" @click="${this.updateFilter}">All</div>
      
        <!-- print filters -->
      ${Array.from(this.filtersList).map((filter) => html`
        <div @click="${this.updateFilter}" type="checkbox" name="filter" value="${filter}"  class="filter"> 
          ${this.capitalizeWords(filter)} 
        </div>
      `)}

    </div>

  </div>

  <div class="card-container">
    <item-card class="card" title="Impactra" thumbnail="impactra.png"></item-card>
    <item-card class="card" title="Splitem" thumbnail="splitem.png"></item-card>
    <item-card class="card" title="Hangin" thumbnail="hangin.png"></item-card>
    <item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif"></item-card>
    <item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif"></item-card>
    <item-card class="card" title="Shadow Work" thumbnail="shadow-work.avif" ></item-card>
  </div>
</div>  

`;
  }
//   render() {
//     return html`



// `;
//   }

  capitalizeWords(sentence) {
    return sentence
      .split(" ")                             
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(" ");                             
  }

  fetchData(){
    let jsonUrl = new URL('../lib/data.json', import.meta.url).href
    fetch(jsonUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      this.data = [...data.data]; 
      //sort alphabetically
      this.data.sort((a, b) => a.title.localeCompare(b.title));
      this.filteredData = this.data; 
      this.loading = false;

      //add tags to filters list (which is a *Set* to prevent dups)
      this.data.forEach((d) => {
        this.filtersList.add(d.tag);
      });          
      this.requestUpdate();
      // Array.from(this.filtersList).map((filter) => console.log(filter))
        // console.log(this.filtersList);
    })
    .catch(error => console.error('Error fetching the JSON:', error));

  }
    //update currentView to project when card is clicked
  _handleClick() {
    const event = new CustomEvent('item-click', {
      detail: { message: 'card clicked!', currentView: "project"  },
      bubbles: true,   // Makes the event bubble up to the parent
      composed: true,  // Allows the event to pass through shadow DOM boundaries
    });
    // console.log(event);
    
    this.dispatchEvent(event);  // Dispatch the event
  }
  

  getThumbnailUrl(){
    let url=new URL(`/lib/thumbnails/${this.thumbnail}`, import.meta.url)
    return url;
  }
  firstUpdated(){
    super.firstUpdated();
    this.fetchData();
  }

  updateFilter(){
    
  }



  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(ProjectsView.tag, ProjectsView);