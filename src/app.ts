import { Router, RouteConfig } from "aurelia-router";
export class App {
  router: Router;
  configureRouter(config: RouteConfig, router: Router) {
    config.title = "Aurelia";
    config.map([
      {
        route: "",
        name: "home",
        moduleId: "./home/home",
        nav: true,
        title: "Home",
      },
    ]);
    this.router = router;
  }
}
