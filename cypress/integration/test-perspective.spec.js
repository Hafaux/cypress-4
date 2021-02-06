context('cypres task 4', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('should hava a visible active readers element', () => {
    cy.get('[data-cy="reader-count"]').should('be.visible');
  });

  it('should have a mobile layout', () => {
    cy.viewport('iphone-6');
  });
  
  it('should have a hidden active readers element when in the iphone-6 viewport', () => {
    cy.viewport('iphone-6');
    cy.get('[data-cy="reader-count"]').should('be.hidden');
  });
  
  // I have no idea what the "logo link" is.
  it('should have a logo link with a width not greater than 100 or 120 when in landscape mode', () => {
    cy.viewport('iphone-6');
    // insert "logo link".width() to be below 100 pixel test here
    cy.viewport('iphone-6', 'landscape');
    // insert "logo link".width() to be below 120 pixel test here
  });

  it('should have a hidden hamburger button unless the page is 990x768px', () => {
    cy.get('.manu-btn').should('be.hidden');
    cy.viewport(990, 768);
    cy.get('.manu-btn').should('be.visible');
  });

  it('should have a hamburger btn that opens the sidebar when clicked', () => {
    cy.viewport(990, 768);
    cy.get('.manu-btn').click();
    cy.get('.manu-list').should('be.visible');
  });
  
  it('should have an X button on the sidebar that closes it', () => {
    cy.viewport(990, 768);
    cy.get('.manu-btn').click();
    cy.get('.manu-list').should('be.visible');
    cy.get('.close-btn').click();
    cy.get('.manu-list').should('be.hidden');
  });
});