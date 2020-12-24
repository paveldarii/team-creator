const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it("getGithub should return engineer's github username", () => {
    const engineer = new Engineer("Pavel", "pd@yahoo.com", "pd");

    expect(engineer.getGithub()).toBe("pd");
  });

  it("getRole should return Engineer", () => {
    const engineer = new Engineer("Pavel", "pd@yahoo.com", "pd");

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
