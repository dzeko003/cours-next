import { Post } from "@/types";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ton post factice
const POST: Post = {
  id: 1,
  category: "React",
  title: "React State Management: Choosing the Right Solution",
  image: "/react-state-management.jpg",
  caption:
    "Explore different state management solutions in React and choose the one that fits your needs.",
  date: "2023-01-15",
  minutesToRead: 10,
  author: "John ReactDev",
  nbViews: 25,
  nbComments: 8,
  slug: "react-state-management-choosing-right-solution",
  content: "Hello",
};

export const GET = async (
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }, // ✅ Note le Promise ici
) => {
  const { slug } = await context.params; // ✅ on attend le Promise

  // tu peux filtrer ton POST si tu veux correspondre au slug
  if (slug !== POST.slug) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  return NextResponse.json(POST, { status: 200 });
};
