import PostsRepository from '../../dal/posts/posts.repository';
import { Post, CreatedPost } from '../../types/posts.interface';
import Params from '../../types/params.interface';
import { Service } from 'typedi';
import nanoid from 'nanoid';
// const nanoid = require('nanoid')
@Service()
class PostsService {
  constructor(private postsRepository: PostsRepository) {}

  getAllPosts = () => {
    return this.postsRepository.getAllPosts();
  };

  getById = (id: string) => {
    const finded = this.postsRepository.getById(id);
    if (!finded) {
      return {
        statusCode: 404,
        message: `We dont have post with this id - ${id}`,
      };
    }
    return finded;
  };

  createAPost = (post: Post) => {
    const id = nanoid.nanoid();
    const dateCreate = new Date();
    const updated = {
      ...post,
      id,
      createdAt: dateCreate,
      updatedAt: dateCreate,
    };
    return this.postsRepository.createAPost(updated);
  };

  updateAPost = (post: CreatedPost, id: string) => {
    const finded = this.postsRepository.getById(id);
    if (!finded) {
      return {
        statusCode: 404,
        message: `We dont have post with this id - ${id}`,
      };
    }
    const updateDate = new Date();
    const updated = this.postsRepository.updateAPost(
      { ...post, updatedAt: updateDate },
      id,
    );
    return updated;
  };

  deleteAPost = (id: string) => {
    const finded = this.postsRepository.getById(id);
    if (!finded) {
      return {
        statusCode: 404,
        message: `We dont have post with this id - ${id}`,
      };
    }
    const deleted = this.postsRepository.deleteAPost(id)
    return deleted;
  };
}

export default PostsService;
