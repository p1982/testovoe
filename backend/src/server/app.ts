// import * as express from "express";
const express = require('express')

class App {
  // public app: express.Application;
  public app: any;
  public port: number;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  private initializeMiddlewares() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
  }

  private initializeControllers(controllers:any) {
    controllers.forEach((controller:any) => {
      this.app.use(controller.path, controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
