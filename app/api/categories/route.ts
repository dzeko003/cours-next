import { Category } from "@/types";
import { NextResponse } from "next/server";

export const CATEGORIES: Category[] = [
  { id: 1, name: "React", slug: "react" },
  { id: 2, name: "Laravel", slug: "laravel" },
  { id: 3, name: "TypeScript", slug: "typescript" },
  { id: 4, name: "Docker", slug: "docker" },
  { id: 5, name: "DevOps", slug: "devops" },
  { id: 6, name: "Node.js", slug: "nodejs" },
  { id: 7, name: "UI/UX", slug: "ui-ux" },
];

export const GET = async () => {
  return NextResponse.json(CATEGORIES, { status: 200 });
};
