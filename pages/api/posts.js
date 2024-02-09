// pages/api/posts.js

import connectToDatabase from "../../utils/mongodb";
import Post from "../../models/Post";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Handle creating a new post
  } else if (req.method === "GET") {
    // Handle fetching all posts
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
