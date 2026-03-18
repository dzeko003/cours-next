import React from "react";
type Props = {
  params: {
    slug: string;
  };
};
async function CategoriesPage({ params }: Props) {
  const { slug } = await params;

  return <div>CategoriesPage : {slug} </div>;
}

export default CategoriesPage;
