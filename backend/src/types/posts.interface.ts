export interface Post {
  text: string;
  title: string;
  url: string;
}

export interface CreatedPost {
  id: string;
  text: string;
  title: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

