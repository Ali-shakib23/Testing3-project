class ScrollingPage {
    visit() {
      cy.visit("https://www.webdriveruniversity.com/Scrolling/index.html");
    }
  
    getZone1() {
      return cy.get('#zone1');
    }
  
    getZone2() {
      return cy.get('#zone2');
    }
  
    getZone3() {
      return cy.get('#zone3');
    }
  
    getZone4() {
      return cy.get('#zone4');
    }
  }
  
  export default ScrollingPage;
  