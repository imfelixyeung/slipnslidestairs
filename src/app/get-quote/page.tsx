/**
 * v0 by Vercel.
 * @see https://v0.dev/t/g6ssxhg1UNa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { typographyVariants } from "@/components/ui/typography";
import { Metadata } from "next";

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

export default function Component() {
  return (
    <div className="w-full py-8 space-y-6">
      <div className="mx-auto max-w-2xl px-4 space-y-6">
        <div className="space-y-2">
          <h1 className={typographyVariants({ variant: "h1" })}>Get a quote</h1>
          <p className="text-muted-foreground">
            {`Fill out the form below and we'll get back to you with a
            personalized quote.`}
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg shadow-sm dark:border-gray-800">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Enter your first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Enter your last name" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="query">Your query</Label>
              <Textarea
                className="min-h-[100px]"
                id="query"
                placeholder="Enter your query"
              />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By submitting this form, you agree to our{" "}
                <Link className="hover:underline" href="#">
                  terms and conditions
                </Link>{" "}
                and{" "}
                <Link className="hover:underline" href="#">
                  privacy policy
                </Link>
                .
              </p>
            </div>
            <Button className="w-full">Get a quote</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
