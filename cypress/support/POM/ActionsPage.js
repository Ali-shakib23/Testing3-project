class ActionsPage {
    visit() {
      cy.visit("https://www.webdriveruniversity.com/Actions/index.html#");
    }
  
    getDraggableElement() {
      return cy.get('#draggable');
    }
  
    getDroppableElement() {
      return cy.get('#droppable');
    }
  
    getDoubleClickElement() {
      return cy.get('#double-click');
    }
  
    getDropdownContent() {
      return cy.get('div.dropdown-content');
    }
  
    getClickBox() {
      return cy.get('#click-box');
    }
  }
  
  export default ActionsPage;
  