import "reflect-metadata";
import App from "./server/app";
import PostsController from "./server/posts/posts.controller";
import Container from "typedi";
import config from "./config/config";
const hostname = config.get("HOST");
const port = config.get("PORT");

const app = new App([Container.get(PostsController)], port);

app.listen();
