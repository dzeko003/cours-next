"use client";

import { usePost } from "@/app/hooks/usePost";
import PageContainer from "@/components/PageContainer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Post } from "@/types";
import { Eye, MessageCircle } from "lucide-react";
import React from "react";

export default function SinglePostPage({
  params,
}: {
  params: Promise<{ slug: string }>; // ⚠️ Notez que params est une Promise
}) {
  // ✅ Utiliser React.use() pour résoudre la Promise
  const { slug } = React.use(params);

  const { data: post, isFetching, error } = usePost(slug);

  // Vous pouvez supprimer l'objet POST factice si vous utilisez les données réelles
  if (isFetching) return <p>Loading</p>;
  if (error) return <p>Error</p>;

  return (
    <PageContainer>
      <div className="p-8">
        <div
          style={{ backgroundImage: "url(/img/hero.webp)" }}
          className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        >
          <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded">
              <h1 className="text-center font-bold text-3xl sm:text-5xl ">
                {post?.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{post?.author}</AvatarFallback>
            </Avatar>
            <div>
              <p>{post?.author}</p>
              <p className="text-slate-500 text-md">
                Posted on{" "}
                {post?.date && new Date(post.date).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={24} className="text-slate-500" />
              <p className="text-slate-400">{post?.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={24} className="text-slate-500" />
              <p className="text-slate-400">{post?.nbViews}</p>
            </div>
          </div>
        </div>

        <Separator />

        <div
          className="mt-6"
          dangerouslySetInnerHTML={{
            __html: post?.content as string,
          }}
        />
      </div>
    </PageContainer>
  );
}
