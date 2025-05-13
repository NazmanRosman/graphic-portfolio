import { html, fixture, expect } from '@open-wc/testing';
import "../graphic-portfolio.js";

describe("GraphicPortfolio test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <graphic-portfolio
        title="title"
      ></graphic-portfolio>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
