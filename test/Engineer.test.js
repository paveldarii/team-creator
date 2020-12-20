const Engineer = require("../lib/engineer");

describe("Employee class", () => {
  it("getGithub should return engineer's github username", () => {
    const engineer = new Engineer("Pavel", 1, "pd@yahoo.com", "pd");

    expect(engineer.getGithub()).toBe("pd");
  });

  it("getName should return Engineer", () => {
    const engineer = new Engineer("Pavel", 1, "pd@yahoo.com", "pd");

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
