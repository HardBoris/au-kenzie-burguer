export interface LoginData {
  email: string;
  password: string;
}

export class Login {
  loginMsg = "login";
  data: LoginData;
  errorList = [];
  isError = false;

  dataValidator() {
    if (!this.data) {
      this.errorList = ["email", "senha"];
    }
    if (this.data) {
      this.errorList = [];
      Object.keys(this.data).forEach((key) => {
        if (this.data[key] === undefined || this.data[key].length === 0) {
          this.errorList.push(key);
        }
      });
    }
    return this.errorList;
  }

  dataSender() {
    if (this.dataValidator().length !== 0) {
      this.isError = true;
      this.errorList = this.dataValidator();
    }
    console.log(this.errorList);
  }
}
