const Employee = require("../lib/employee");

describe("Employee class", () => {
  it("getName should return the name of the employee", () => {
    const employee = new Employee("Pavel", "pd@yahoo.com");

    expect(employee.getName()).toBe("Pavel");
  });

  it("getEmployee should return the email of the employee", () => {
    const employee = new Employee("Pavel", "pd@yahoo.com");

    expect(employee.getEmail()).toBe("pd@yahoo.com");
  });
  it("getId should return a value for the object id different from previous object id", () => {
    const employeeOne = new Employee("Pavel", "pd@yahoo.com");
    const employeeTwo = new Employee("Mike", "mk@yahoo.com");

    expect(employeeOne.getId()).toBeLessThan(employeeTwo.getId());
  });

  it("getRole should return Employee", () => {
    const employee = new Employee("Pavel", "pd@yahoo.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
