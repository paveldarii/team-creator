const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("getGithub should return managers's office number", () => {
    const manager = new Manager("Pavel", 1, "pd@yahoo.com", 2);

    expect(manager.getOfficeNumber()).toBe(2);
  });

  it("getRole should return Manager", () => {
    const manager = new Manager("Pavel", 1, "pd@yahoo.com", "pd");

    expect(manager.getRole()).toEqual("Manager");
  });
});
