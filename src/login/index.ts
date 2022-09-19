import { api } from "api";
// import "fetch";
import { HttpClient, json } from "aurelia-fetch-client";

export interface LoginData {
  email: string;
  password: string;
}

const httpClient = new HttpClient();
export class Login {
  loginMsg = "login";
  data: LoginData;
  errorList = [];
  isError = false;

  postData(data: LoginData = this.data) {
    console.log(data);
    httpClient
      .fetch("http://127.0.0.1:3335/login", {
        method: "POST",
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  dataValidator(data) {
    if (!data) {
      this.errorList = ["email", "senha"];
    }
    if (data) {
      this.errorList = [];
      Object.keys(data).forEach((key) => {
        if (data[key] === undefined || data[key].length === 0) {
          this.errorList.push(key);
        }
      });
    }
    return this.errorList;
  }

  dataSender(data) {
    if (this.dataValidator(data).length !== 0) {
      this.isError = true;
      this.errorList = this.dataValidator(data);
    }
    console.log(this.errorList);
  }

  signIn = async (data: LoginData = this.data) => {
    this.dataSender(data);
    console.log(data);
    const { email, password } = data;
    // console.log(password);
    await api
      .post("/login", { email, password })
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@Burguer:accessToken", accessToken);
        localStorage.setItem("@Burguer:user", JSON.stringify(user));

        console.log({ accessToken, user });
      })
      .catch((error) => {
        // setMensaje(error.response.data);
        console.log(error.response.data);
      });
  };
}
