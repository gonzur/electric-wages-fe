class EmployeeHours {
  private employee: Employee = new Employee();
  private hours: number = 0;
  constructor() {
    
  }

  public getHours(): number {
    return this.hours;
  }

  public getEmployeeName(): string {
    return this.employee.name;
  }
}