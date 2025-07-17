export interface Category {
  name: string;
  className: string;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface BlogPost {
  id: number;
  image: string;
  readTime: string;
  category: Category;
  title: string;
  excerpt: string;
  author: Author;
  date: string;
  delay: string;
}
