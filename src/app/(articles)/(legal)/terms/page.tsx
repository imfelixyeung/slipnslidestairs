import React from "react";
import { faker } from "@faker-js/faker";

const Page = () => {
  faker.seed(1);

  return (
    <div className="container my-16">
      <article className="prose max-w-none prose-lg">
        <h1>Terms & Conditions</h1>
        <p>{faker.lorem.paragraphs(3)}</p>
        <p>{faker.lorem.paragraphs(8)}</p>
        <p>{faker.lorem.paragraphs(6)}</p>
      </article>
    </div>
  );
};

export default Page;
