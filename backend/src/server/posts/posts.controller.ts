import PostsService from '../../bll/posts/posts.service';
import { Service } from 'typedi';
import * as express from 'express';
import { Post } from '../../types/posts.interface';
import PostsRepository from '../../dal/posts/posts.repository';
@Service()
class PostsController {
  public path = '/api/posts';
  public router = express.Router();

  constructor(private postsService: PostsService) {
    this.postsService = new PostsService(new PostsRepository());
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.get('/:id', this.getById);
    this.router.get('/', this.getAllPosts);
    this.router.post('/', this.createAPost);
    this.router.put('/:id', this.updateAPost);
    this.router.delete('/:id', this.deleteAPost);
  }

  getAllPosts = (req: express.Request, res: express.Response) => {
    try {
      const posts = this.postsService.getAllPosts();
      res.json(posts);
    } catch (e) {
      console.log(e);
    }
  };

  getById = (req: express.Request, res: express.Response) => {
    try {
      const post = this.postsService.getById(req.params.id);
      console.log(post);
      
      res.json(post);
    } catch (e) {
      console.log(e);
    }
  };

  createAPost = (req: express.Request, res: express.Response) => {
    const post: Post = req.body;
    try {
      const createdPost = this.postsService.createAPost(post);
      res.json(createdPost);
    } catch (e) {
      console.log(e);
    }
  };

  updateAPost = (req: express.Request, res: express.Response) => {
    const post: Post = req.body;
    const id: string = req.params.id    
    try {
      const updatedPost = this.postsService.updateAPost({...post,id}, id);
      res.json(updatedPost);
    } catch (e) {
      console.log(e);
    }
    
  };
  
  deleteAPost = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id
    try {
      const deletedPost = this.postsService.deleteAPost(id);
      res.json(deletedPost);
    } catch (e) {
      console.log(e);
    }
  };
}

export default PostsController;
