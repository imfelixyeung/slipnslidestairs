import { QuoteIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import { CallToAction, callToActions, features, testimonials } from "./data";
import { typographyVariants } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/images/hero.png";
import Image from "next/image";
import Link from "next/link";

const CallToActions = ({ actions }: { actions: CallToAction[] }) => {
  return (
    <div className="flex gap-3">
      {actions.map((cta, index) => (
        <Link
          key={index}
          className={buttonVariants({ size: "lg" })}
          href={cta.href}
        >
          {cta.text}
        </Link>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <>
      <header className="">
        <div className="container min-h-[80svh] py-24 flex gap-16 items-center sm:items-start lg:items-center justify-center flex-col-reverse lg:flex-row relative">
          <div className="flex flex-col justify-center items-center sm:items-start gap-8 text-gray-100">
            <div className="flex flex-col items-center sm:items-start">
              <h1>
                <Balancer
                  className={cn(
                    typographyVariants({ variant: "h1" }),
                    "text-center sm:text-left"
                  )}
                >
                  Slip n Slide Stairs
                </Balancer>
              </h1>
              <br />
              <h2>
                <Balancer
                  className={cn(
                    typographyVariants({ variant: "h2" }),
                    "text-center sm:text-left"
                  )}
                >
                  Where Everyday Stairs Become Extraordinary Adventures!
                </Balancer>
              </h2>
            </div>
            <p className="text-xl text-center sm:text-left">
              <Balancer>
                Transform the mundane act of climbing stairs into a thrilling
                and unforgettable experience. Unleash the excitement in your
                home with Slip n Slide Stairs.
              </Balancer>
            </p>
            <CallToActions
              actions={[callToActions.shopNow, callToActions.getQuote]}
            />
          </div>
          <Image
            className="object-cover h-[calc(100%-3rem)] rounded-3xl absolute inset-x-0 inset-y-6 -z-[1] brightness-50"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </header>
      <section className="even:bg-primary/[0.025] odd:bg-primary/5">
        <div className="container min-h-[50svh] py-24 flex flex-col justify-center md:items-center gap-8">
          <h2 className={typographyVariants({ variant: "h2" })}>About Us</h2>
          <p className="text-2xl">
            At Slip n Slide Stairs, we believe in turning everyday moments into
            extraordinary memories. Our patented technology ensures a perfect
            blend of safety and excitement, making every journey up and down the
            stairs a joyous adventure. With years of research and innovation, we
            bring you the future of staircase experiences.
          </p>
        </div>
      </section>
      <section className="even:bg-primary/[0.025] odd:bg-primary/5">
        <div className="container min-h-[50svh] py-24 flex flex-col justify-center md:items-center gap-8">
          <h2 className={typographyVariants({ variant: "h2" })}>Features</h2>
          <ul className="grid lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="block p-6 border-2 bg-primary-foreground rounded-2xl"
              >
                <h3 className={typographyVariants({ variant: "h3" })}>
                  {feature.title}
                </h3>
                <p className="text-lg">{feature.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="even:bg-primary/[0.025] odd:bg-primary/5">
        <div className="container min-h-[50svh] py-24 flex flex-col justify-center md:items-center gap-8">
          <h2 className={typographyVariants({ variant: "h2" })}>
            Testimonials
          </h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <li
                key={index}
                className="border-2 rounded-2xl flex flex-col gap-6 group"
              >
                <div className="p-6 pb-0 flex flex-col gap-6 grow">
                  <QuoteIcon
                    size={32}
                    className="rotate-[200deg] group-hover:rotate-[220deg] transition-transform"
                  />
                  <p className="text-lg">{testimonial.quote}</p>
                  <Image
                    className="rounded-2xl grow object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={1024}
                    height={1024}
                  />
                </div>
                <div className="bg-primary/[0.025] p-6 flex items-center gap-3">
                  <div className="flex flex-col">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="even:bg-primary/[0.025] odd:bg-primary/5">
        <div className="container min-h-[50svh] py-24 flex flex-col justify-center md:items-center gap-8">
          <h2 className={typographyVariants({ variant: "h2" })}>Get a Quote</h2>
          <p className="text-xl">
            Fill out the form below to receive a personalized quote for Slip n
            Slide Stairs installation at your property. Our team will get back
            to you with all the details you need to turn your stairs into a
            thrilling adventure.
          </p>
          <CallToActions actions={[callToActions.getQuote]} />
        </div>
      </section>
      <section className="even:bg-primary/[0.025] odd:bg-primary/5">
        <div className="container min-h-[50svh] flex flex-col justify-center md:items-center gap-8">
          <h2 className={typographyVariants({ variant: "h2" })}>Shop Now</h2>
          <p className="text-xl">
            Explore our collection and order your Slip n Slide Stairs today.
            Elevate your staircase experience to new heights!
          </p>
          <CallToActions actions={[callToActions.shopNow]} />
        </div>
      </section>
      <footer>
        <div className="container min-h-[30svh] py-24 flex flex-col justify-center md:items-center gap-8">
          <p className="text-3xl font-light">
            Join the Slip n Slide Stairs revolution - Where every step is a
            celebration!
          </p>
          <CallToActions
            actions={[callToActions.shopNow, callToActions.getQuote]}
          />
        </div>
      </footer>
    </>
  );
};

export default Page;
