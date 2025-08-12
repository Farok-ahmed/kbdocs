export interface BlogGridAuthor {
  name: string;
  avatar: any;
}

export interface BlogGridPost {
  id: number;
  image: any;
  readTime: string;
  categories: string[];
  title: string;
  excerpt: string;
  author: BlogGridAuthor;
  date: string;
  delay: string;
}
