import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-framework";

export class App {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Kenzie Burguer";
    config.map([
      {
        route: "home",
        name: "home",
        moduleId: PLATFORM.moduleName("./home/home"),
        nav: true,
        title: "Home",
      },
      {
        route: ["", "login"],
        name: "login",
        moduleId: PLATFORM.moduleName("./login/index"),
        nav: true,
        title: "Login",
      },
      {
        route: "register",
        name: "register",
        moduleId: PLATFORM.moduleName("./cadastro/cadastro"),
        nav: true,
        title: "Register",
      },
    ]);
    this.router = router;
  }
}
