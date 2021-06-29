import { EmployeeHours } from "./EmployeeHours";
export class Report {
  public reporter: string = "";
  public location: string = "";
  public employeeHours: Array<EmployeeHours> = new Array<EmployeeHours>();
  public date: string = "";
  constructor() {
    
  }
}
