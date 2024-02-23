import React from "react";
import { faker } from "@faker-js/faker";
import AboutMarkdown from "./content.mdx";

const Page = () => {
  faker.seed(0);

  return (
    <div className="container my-16">
      <article className="prose max-w-none prose-lg">
        <AboutMarkdown />
      </article>
    </div>
  );
};

export default Page;
