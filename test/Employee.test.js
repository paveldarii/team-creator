const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("getName should return the name of the employee", () => {
    const employee = new Employee("Pavel", 1, "pd@yahoo.com");

    expect(employee.getName()).toBe("Pavel");
  });

  it("getId should return the id of the employee", () => {
    const employee = new Employee("Pavel", 1, "pd@yahoo.com");

    expect(employee.getId()).toEqual(1);
  });

  it("getEmployee should return the email of the employee", () => {
    const employee = new Employee("Pavel", 1, "pd@yahoo.com");

    expect(employee.getEmail()).toBe("pd@yahoo.com");
  });

  it("getName should return Employee", () => {
    const employee = new Employee("Pavel", 1, "pd@yahoo.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
