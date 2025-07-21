export const blogCategories = [
  "Updates",
  "WooCommerce",
  "Startups",
  "Laravel",
  "WordPress",
  "Magento",
  "KbDoc",
  "Others",
];

// Color mapping for categories
export const categoryColors = {
  WordPress: "c_blue",
  KbDoc: "orange",
  Laravel: "green",
  WooCommerce: "purple",
  Startups: "red",
  Magento: "teal",
  Others: "gray",
};
import type { BlogGridPost } from "@/types/blog-grid";
// Typed blog data list
export const BlogData: BlogGridPost[] = [
  {
    id: 1,
    image: "/img/blog-grid/blog_grid_post1.jpg",
    readTime: "18 Min Read",
    categories: ["WordPress", "Magento", "Startups", "KbDoc"],
    title: "Is Your Store Safe From Magento Killer?",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Jason Response",
      avatar: "/img/blog-grid/author_1.jpg",
    },
    date: "Sep 14, 2020",
    delay: "0s",
  },
  {
    id: 2,
    image: "/img/blog-grid/blog_grid_post2.jpg",
    readTime: "18 Min Read",
    categories: ["WordPress", "WooCommerce", "Magento", "Startups"],
    title: "70 Best Startups You Need to Watch Out for",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Druid Wensleydale",
      avatar: "/img/blog-grid/author_2.jpg",
    },
    date: "Sep 14, 2020",
    delay: "0.2s",
  },
  {
    id: 3,
    image: "/img/blog-grid/blog_grid_post3.jpg",
    readTime: "10 Min Read",
    categories: ["WordPress", "WooCommerce", "Laravel", "Startups", "KbDoc"],
    title: "Create Conditional Logic Forms & Publish",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Douglas Lyphe",
      avatar: "/img/blog-grid/author_3.jpg",
    },
    date: "Nov 10, 2020",
    delay: "0.4s",
  },
  {
    id: 4,
    image: "/img/blog-grid/blog_grid_post4.jpg",
    readTime: "18 Min Read",
    categories: ["WordPress", "WooCommerce", "DocAll", "Startups"],
    title: "How to Use Forms for Enhancing UX In WordPress",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Indigo Violet",
      avatar: "/img/blog-grid/author_4.jpg",
    },
    date: "March 23, 2020",
    delay: "0.6s",
  },
  {
    id: 5,
    image: "/img/blog-grid/blog_grid_post5.jpg",
    readTime: "10 Min Read",
    categories: [
      "WordPress",
      "WooCommerce",
      "Laravel",
      "Startups",
      "KbDoc",
      "Others",
    ],
    title: "Create A WordPress Multi Step Form With weForms",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Niles Peppertrout",
      avatar: "/img/blog-grid/author_5.jpg",
    },
    date: "Oct 12, 2020",
    delay: "0.2s",
  },
  {
    id: 6,
    image: "/img/blog-grid/blog_grid_post6.jpg",
    readTime: "14 Min Read",
    categories: ["WordPress", "WooCommerce", "Magento", "Startups"],
    title: "The Grand Ecommerce Giveaway Worth",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Hanson Deck",
      avatar: "/img/blog-grid/author_6.jpg",
    },
    date: "Sep 17, 2020",
    delay: "0.4s",
  },
];
