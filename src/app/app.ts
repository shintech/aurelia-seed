import { Router, RouterConfiguration } from 'aurelia-router'
import {PLATFORM} from 'aurelia-pal'
import '../../public/less/index.less'

export class App {
  router: Router

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Demo'
    config.map([
      { route: '', moduleId: PLATFORM.moduleName('components/home'), title: 'Home' },
      { route: '/about', moduleId: PLATFORM.moduleName('components/about'), title: 'About' },
      { route: '/models', moduleId: PLATFORM.moduleName('components/models'), title: 'Models' },
      { route: '/models/new', moduleId: PLATFORM.moduleName('components/form'), title: 'New Model...' }
    ])

    this.router = router
  }
}
