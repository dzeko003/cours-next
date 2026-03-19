import PageContainer from "@/components/PageContainer";
import PageTitle from "@/components/PageTitle";
import PostList from "@/components/PostList";
import { POSTS } from "@/utils/posts";
import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
async function CategoriesPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PageContainer>
      <div className="py-10 px-4">
        <PageTitle title={slug.replace("-", ".")} />
        <PostList posts={POSTS} />
      </div>
    </PageContainer>
  );
}

export default CategoriesPage;
