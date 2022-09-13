import {
  Router,
  RouterConfiguration,
  NavigationInstruction,
  Next,
  PipelineStep,
  Redirect,
} from "aurelia-router";
import { PLATFORM } from "aurelia-framework";
export class App {
  // router: Router;
  configureRouter(config: RouterConfiguration /* router: Router */): void {
    config.title = "Kenzie Burguer";
    config.addAuthorizeStep(AuthorizeStep);
    config.map([
      {
        route: ["", "home"],
        name: "home",
        moduleId: PLATFORM.moduleName("./home/home"),
        nav: true,
        title: "Home",
        settings: {
          roles: [],
        },
      },
      {
        route: "login",
        moduleId: PLATFORM.moduleName("./login/login"),
        title: "Login",
        settings: {
          roles: ["login"],
        },
      },
    ]);
    // this.router = router;
  }
}

class AuthorizeStep implements PipelineStep {
  public run(
    navigationInstruction: NavigationInstruction,
    next: Next
  ): Promise<any> {
    if (
      navigationInstruction
        .getAllInstructions()
        .some((i) => i.config.settings.roles.indexOf("login") !== -1)
    ) {
      const isAdmin = false;
      if (!isAdmin) {
        return next.cancel(new Redirect("home"));
      }
    }
    return next();
  }
}
