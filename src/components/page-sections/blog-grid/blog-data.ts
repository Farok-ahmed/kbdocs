import author1 from "@/assets/img/blog-grid/author_1.jpg";
import author2 from "@/assets/img/blog-grid/author_2.jpg";
import author3 from "@/assets/img/blog-grid/author_3.jpg";
import author4 from "@/assets/img/blog-grid/author_4.jpg";
import author5 from "@/assets/img/blog-grid/author_5.jpg";
import author6 from "@/assets/img/blog-grid/author_6.jpg";
import blogGridPost1 from "@/assets/img/blog-grid/blog_grid_post1.jpg";
import blogGridPost2 from "@/assets/img/blog-grid/blog_grid_post2.jpg";
import blogGridPost3 from "@/assets/img/blog-grid/blog_grid_post3.jpg";
import blogGridPost4 from "@/assets/img/blog-grid/blog_grid_post4.jpg";
import blogGridPost5 from "@/assets/img/blog-grid/blog_grid_post5.jpg";
import blogGridPost6 from "@/assets/img/blog-grid/blog_grid_post6.jpg";
import type { BlogGridPost } from "@/types/blog-grid";

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
// Typed blog data list
export const BlogData: BlogGridPost[] = [
  {
    id: 1,
    image: blogGridPost1,
    readTime: "18 Min Read",
    categories: ["WordPress", "Magento", "Startups", "KbDoc"],
    title: "Is Your Store Safe From Magento Killer?",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Jason Response",
      avatar: author1,
    },
    date: "Sep 14, 2020",
    delay: "0s",
  },
  {
    id: 2,
    image: blogGridPost2,
    readTime: "18 Min Read",
    categories: ["WordPress", "WooCommerce", "Magento", "Startups"],
    title: "70 Best Startups You Need to Watch Out for",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Druid Wensleydale",
      avatar: author2,
    },
    date: "Sep 14, 2020",
    delay: "0.2s",
  },
  {
    id: 3,
    image: blogGridPost3,
    readTime: "10 Min Read",
    categories: ["WordPress", "WooCommerce", "Laravel", "Startups", "KbDoc"],
    title: "Create Conditional Logic Forms & Publish",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Douglas Lyphe",
      avatar: author3,
    },
    date: "Nov 10, 2020",
    delay: "0.4s",
  },
  {
    id: 4,
    image: blogGridPost4,
    readTime: "18 Min Read",
    categories: ["WordPress", "WooCommerce", "DocAll", "Startups"],
    title: "How to Use Forms for Enhancing UX In WordPress",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Indigo Violet",
      avatar: author4,
    },
    date: "March 23, 2020",
    delay: "0.6s",
  },
  {
    id: 5,
    image: blogGridPost5,
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
      avatar: author5,
    },
    date: "Oct 12, 2020",
    delay: "0.2s",
  },
  {
    id: 6,
    image: blogGridPost6,
    readTime: "14 Min Read",
    categories: ["WordPress", "WooCommerce", "Magento", "Startups"],
    title: "The Grand Ecommerce Giveaway Worth",
    excerpt:
      "Cup of char brilliant horse play bro bread sloshed lavatory only...",
    author: {
      name: "Hanson Deck",
      avatar: author6,
    },
    date: "Sep 17, 2020",
    delay: "0.4s",
  },
];
