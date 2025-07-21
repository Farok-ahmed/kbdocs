export interface BlogGridAuthor {
  name: string;
  avatar: string;
}

export interface BlogGridPost {
  id: number;
  image: string;
  readTime: string;
  categories: string[];
  title: string;
  excerpt: string;
  author: BlogGridAuthor;
  date: string;
  delay: string;
}
