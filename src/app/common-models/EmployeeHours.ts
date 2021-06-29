import { Employee } from "./Employee";
export class EmployeeHours {
  private employee: Employee = new Employee();
  private hours: number = 0;
  constructor() {
    
  }


  setHours(hours: number): void {
    this.hours = hours;
  }

  setEmployee(employee: Employee): void {
    this.employee = employee;
  }

  public getHours(): number {
    return this.hours;
  }

  public getEmployeeName(): string {
    return this.employee.name;
  }
}