class User {
  constructor(name, email) {
    this.name = name;
    this.email = email; this.password = password;
    this.email = email.toLowerCase();
  }
}
  validate() {
    return this.name && this.email.includes('@');
  }
