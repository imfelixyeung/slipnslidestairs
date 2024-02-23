"use client";

/**
 * modified
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
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  query: z.string().min(1, { message: "Please enter your query" }),
});

type FormValues = z.infer<typeof formSchema>;

const GetQuoteForm = () => {
  const router = useRouter();

  const form = useForm<FormValues>({
    mode: "onSubmit",
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    // do something with the form data
    router.push("/get-quote?success=true");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full py-8 space-y-6"
      >
        <div className="mx-auto max-w-2xl px-4 space-y-6">
          <div className="space-y-2">
            <h1 className={typographyVariants({ variant: "h1" })}>
              Get a quote
            </h1>
            <p className="text-muted-foreground">
              {`Fill out the form below and we'll get back to you with a
            personalized quote.`}
            </p>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-sm dark:border-gray-800">
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="query"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your query</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[100px]"
                        placeholder="Enter your query"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="space-y-2">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to our{" "}
                  <Link
                    className="hover:underline"
                    href="/terms"
                    target="_blank"
                  >
                    terms and conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    className="hover:underline"
                    href="/privacy"
                    target="_blank"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
              <Button className="w-full" type="submit">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default GetQuoteForm;
