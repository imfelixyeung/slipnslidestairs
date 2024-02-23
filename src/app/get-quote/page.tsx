import { Metadata } from "next";
import GetQuoteForm from "./form";
import { typographyVariants } from "@/components/ui/typography";

const meta = {
  title:
    "Get a Personalized Quote - Custom Slip n Slide Stairs for Your Unique Space",
  description:
    "Transform your staircase into a customized adventure with Slip n Slide Stairs! Request a personalized quote for our Custom Wonderland or any tailor-made design that suits your unique space. Our design team is ready to bring your vision to life. Elevate your home with a one-of-a-kind Slip n Slide Stairs experience. Get started today!",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

const Page = (props: {
  searchParams: {
    success?: string;
  };
}) => {
  const isSuccessful = "success" in props.searchParams;

  if (isSuccessful) {
    return (
      <div className="container my-10">
        <h1 className={typographyVariants({ variant: "h2" })}>
          Thank you for your interest in Slip n Slide Stairs!
        </h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Your quote request has been submitted.
        </p>
      </div>
    );
  }

  return <GetQuoteForm />;
};

export default Page;
