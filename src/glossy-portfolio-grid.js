/**
 * Copyright 2025 NazmanRosman
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `glossy-portflio-grid`
 * 
 * @demo index.html
 * @element glossy-portflio-grid
 */
export class GlossyPortflioGrid extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "glossy-portflio-grid";
  }

  constructor() {
    super();
    this.title = "Title";
    this.thumbnail = "impactra.png",
    this.link = "https://google.com",
    this.filtersList = new Set(),
    this.filteredData = [];
    this.data = [];
    this.activeFilter = '';


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
      filteredData: { type: Array, reflect: true },


    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: white;
      }
      *{
        box-sizing: border-box;
      }
      button {
        all: unset;
        cursor: pointer;
      }

      .container-background{
        margin: auto;
        max-width: var(--max-width); 
        background-color: var(--bg-color);

        width: 100%;
        padding: var(--page-padding);
        min-height: 100vh;
      }
      .projects-header{
        display: flex;
        justify-content: space-between;
        padding: 50px 0;
        max-width: 100%;
      }
      .latest-projects{
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 1.7px;

      }
      .filters{
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

      }
      .filters:hover{
        cursor: pointer;

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
        /* width: 100vw; */
        overflow: hidden;
        max-width: var(--max-width); 
      }

      glossy-portflio-card{
        height: auto;
      }


      h3 span {
        font-size: var(--glossy-portfolio-label-font-size, var(--ddd-font-size-s));
      }
      .filter.active {
        font-weight: bold;
      }

      @media (max-width: 575.98px) {
        .projects-header{
          flex-direction: column;
          gap: 16px;
          padding: 50px 0 20px 0;
        }
        .card-container {
         grid-template-columns: 1fr;
         gap: 25px;

        }
        .container-background{
          padding: var(--mobile-page-padding);

        }
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
      <button class="filter active" name="all" @click="${this.updateFilter}">All</button>
      
        <!-- print filters -->
      ${Array.from(this.filtersList).map((filter) => html`
        <button @click="${this.updateFilter}" name="${filter}"  class="filter"> 
          ${this.capitalizeWords(filter)} 
      </button>
      `)}

    </div>

  </div>
  <div class="card-container">

    ${this.filteredData.map((item)=>{ return html`
        <glossy-portflio-card class="card" 
        title="${item.title}" 
        thumbnail=${item.thumbnail}>
      </glossy-portflio-card>
      `})}
    </div> 
</div> 

`;}

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

      //add tags to filters list (which is a *Set* to prevent dups)
      this.data.forEach((d) => {
        this.filtersList.add(d.tag);
      });          
      this.requestUpdate();
    })
    .catch(error => console.error('Error fetching the JSON:', error));

  }
    //update currentView to project when card is clicked

  


  firstUpdated(){
    super.firstUpdated();
    this.fetchData();
  }

  updateFilter(event){
    this.activeFilter = event.target.getAttribute("name");
    const filters = this.renderRoot.querySelectorAll('.filter');
    filters.forEach(el => el.classList.remove('active'));
    event.currentTarget.classList.add('active');

    this.filterData();
  }
  filterData(){

    if(this.activeFilter === 'all'){
      this.filteredData=this.data;
    } else{
      this.filteredData = [];
      this.data.forEach((item)=>{
        if(item.tag === this.activeFilter){ //check if filter includes item tag
          this.filteredData.push(item);
        }
    })
    
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

globalThis.customElements.define(GlossyPortflioGrid.tag, GlossyPortflioGrid);