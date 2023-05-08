import { Post, CreatedPost} from '../../types/posts.interface';
import { Service } from 'typedi';

@Service()
class PostsRepository {
  private posts: CreatedPost[] = [
    {
      id: '1',
      text: 'Dolor sit amet yo go the',
      title: 'Lorem Ipsum1',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '2',
      text: 'Me wara te la det',
      title: 'Lorem Ipsum2',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '3',
      text: 'Moroi cuma er tito',
      title: 'Lorem Ipsum3',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '4',
      text: 'Oper tuilo he ganet',
      title: 'Lorem Ipsum4',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '5',
      text: 'Joko le maste',
      title: 'Lorem Ipsum5',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: '6',
      text: 'Viva by ge toro',
      title: 'Lorem Ipsum6',
      url: 'https://img.freepik.com/free-photo/neon-tropical-monstera-leaf-banner_53876-138943.jpg?w=2000',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  constructor() {
  }
  

  getAllPosts = (): Post[] => {
    return this.posts;
  };

  getById = (id: string) => {
    const finded = this.posts.find(post => post.id === id);
    return finded;
  };

  createAPost = (post: CreatedPost) => {
    this.posts = [...this.posts, post];
    return post;
  };

  updateAPost = (post: CreatedPost, id: string) => {
    this.posts = this.posts.map(item => (id === item.id ? post : item));
    return post;
  };

  deleteAPost = (id: string) => {
    this.posts = this.posts.filter(item => id !== item.id);
    return {message: `Successful delete ${id}`, id}
  }
}

export default PostsRepository;
