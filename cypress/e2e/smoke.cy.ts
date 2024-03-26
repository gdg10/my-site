describe("smoke tests", () => {
  it("should show a homepage", () => {
    cy.visitAndCheck("/");
  });
});
