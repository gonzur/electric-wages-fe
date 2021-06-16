export class User {
  
  private jwt: string = "";
  private username: string = "";
  private role: string = "";

  constructor(jwt: string, username: string, role: string) {
    this.jwt = jwt;
    this.username = username;
    this.role = role;
  }

  getJwt(): string {
    return this.jwt;
  }
  getUsername(): string {
    return this.username;
  }
  getRole(): string {
    return this.role;
  }
}