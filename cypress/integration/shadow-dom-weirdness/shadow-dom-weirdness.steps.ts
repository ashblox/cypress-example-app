import { Then, When } from "cypress-cucumber-preprocessor/steps";

When("I use cy.get and cy.find", () => cy.get("shadow-view").find("button").click());

When("I use one query", () => cy.get("shadow-view button").click());

Then("I get the element successfully", () => {});
