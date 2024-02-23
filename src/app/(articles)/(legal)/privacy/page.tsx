import React from "react";
import { faker } from "@faker-js/faker";

const Page = () => {
  faker.seed(0);

  return (
    <div className="container my-16">
      <article className="prose max-w-none prose-lg">
        <h1>Privacy Policy</h1>
        <p>{faker.lorem.paragraphs(3)}</p>
        <p>{faker.lorem.paragraphs(6)}</p>
        <p>{faker.lorem.paragraphs(3)}</p>
        <p>{faker.lorem.paragraphs(3)}</p>
        <p>{faker.lorem.paragraphs(6)}</p>
      </article>
    </div>
  );
};

export default Page;
