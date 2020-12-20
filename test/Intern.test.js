const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("getSchool should return interns's school name", () => {
    const intern = new Intern("Pavel", "pd@yahoo.com", "CSCC");

    expect(intern.getSchool()).toEqual("CSCC");
  });

  it("getRole should return Intern", () => {
    const intern = new Intern("Pavel", "pd@yahoo.com", "CSCC");

    expect(intern.getRole()).toEqual("Intern");
  });
});
