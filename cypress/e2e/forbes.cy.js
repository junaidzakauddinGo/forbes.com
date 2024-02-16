describe("check forbes website", () => {
  it("verify ads on website", () => {
    cy.visit("https://www.forbes.com/?sh=376dcbe72254");

    // Check if main ad cards exist and have href for navigating
    cy.step("CHECK MAIN AD CARDS EXIST AND HAVE HREF FOR NAVIGATING");
    cy.get(".preview")
      .should("be.visible")
      .and("have.attr", "href")
      .then(($ads) => {
        const adCount = $ads.length;
        if (adCount === 0) {
          cy.log("No main ad cards found.");
        } else {
          cy.log(`Found ${adCount} main ad cards.`);
        }
      });

    // Check if main headings exist and have href for navigating
    cy.step("CHECK MAIN HEADINGS EXIST AND HAVE HREF FOR NAVIGATING");
    cy.get(".h1--dense")
      .should("be.visible")
      .and("have.attr", "href")
      .then(($headings) => {
        const headingCount = $headings.length;
        if (headingCount === 0) {
          cy.log("No main headings found.");
        } else {
          cy.log(`Found ${headingCount} main headings.`);
        }
      });

    // Check if sub ads exist
    cy.step("CHECK SUB ADS EXIST");
    cy.get(".card--small")
      .should("be.visible")
      .then(($subAds) => {
        const subAdCount = $subAds.length;
        if (subAdCount === 0) {
          cy.log("No sub ads found.");
        } else {
          cy.log(`Found ${subAdCount} sub ads.`);
        }
      });
  });
});
