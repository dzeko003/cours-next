import React from "react";
import PageContainer from "./PageContainer";

export default function Headers() {
  return (
    <header className="p-4 border-b">
      <PageContainer>
        {/* Responsive Menu */}
        <div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-400 to-blue-600">
            NextBlog
          </h1>
        </div>
      </PageContainer>
    </header>
  );
}
