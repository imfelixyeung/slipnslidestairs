import { QuoteIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import { Balancer } from "react-wrap-balancer";
import { CallToAction, callToActions, features, testimonials } from "./data";
import { typographyVariants } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/images/hero.png";
import Image from "next/image";
import Link from "next/link";
import { SiFacebook, SiInstagram, SiX } from "@icons-pack/react-simple-icons";

const CallToActions = ({ actions }: { actions: CallToAction[] }) => {
  return (
    <div className="flex gap-3">
      {actions.map((cta, index) => (
        <Button key={index} size="lg">
          {cta.text}
        </Button>
      ))}
    </div>
  );
};

const Page = () => {
  return (
    <div id="app">
      <header className="container bg-primary text-primary-foreground rounded-b-3xl">
        <div className="py-6">
          <p className="font-semibold text-xl">Slip n Slide Stairs</p>
        </div>
      </header>
      <main>
        <header className="">
          <div className="container min-h-[80svh] py-24 flex gap-16 items-center sm:items-start lg:items-center justify-center flex-col-reverse lg:flex-row">
            <div className="flex flex-col justify-center items-center sm:items-start gap-8">
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
              className="object-cover rounded-3xl max-w-xs sm:max-w-md h-full"
              src={heroImage}
              alt="Hero Image"
            />
          </div>
        </header>
        <section className="even:bg-primary/[0.025] odd:bg-primary/5">
          <div className="container min-h-[50svh] py-24 flex flex-col justify-center items-center gap-8">
            <h2 className={typographyVariants({ variant: "h2" })}>About Us</h2>
            <p className="text-2xl">
              At Slip n Slide Stairs, we believe in turning everyday moments
              into extraordinary memories. Our patented technology ensures a
              perfect blend of safety and excitement, making every journey up
              and down the stairs a joyous adventure. With years of research and
              innovation, we bring you the future of staircase experiences.
            </p>
          </div>
        </section>
        <section className="even:bg-primary/[0.025] odd:bg-primary/5">
          <div className="container min-h-[50svh] py-24 flex flex-col justify-center items-center gap-8">
            <h2 className={typographyVariants({ variant: "h2" })}>Features</h2>
            <ul className="grid grid-cols-2 gap-6">
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
          <div className="container min-h-[50svh] py-24 flex flex-col justify-center items-center gap-8">
            <h2 className={typographyVariants({ variant: "h2" })}>
              Testimonials
            </h2>
            <ul className="grid grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <li
                  key={index}
                  className="border-2 rounded-2xl flex flex-col gap-3 group"
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
                      <p className="text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="even:bg-primary/[0.025] odd:bg-primary/5">
          <div className="container min-h-[50svh] py-24 flex flex-col justify-center items-center gap-8">
            <h2 className={typographyVariants({ variant: "h2" })}>
              Get a Quote
            </h2>
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
          <div className="container min-h-[50svh] flex flex-col justify-center items-center gap-8">
            <h2 className={typographyVariants({ variant: "h2" })}>Shop Now</h2>
            <p className="text-xl">
              Explore our collection and order your Slip n Slide Stairs today.
              Elevate your staircase experience to new heights!
            </p>
            <CallToActions actions={[callToActions.shopNow]} />
          </div>
        </section>
        <footer>
          <div className="container min-h-[30svh] flex flex-col justify-center items-center gap-8">
            <p className="text-3xl font-light">
              Join the Slip n Slide Stairs revolution - Where every step is a
              celebration!
            </p>
            <CallToActions
              actions={[callToActions.shopNow, callToActions.getQuote]}
            />
          </div>
        </footer>
      </main>
      <footer className="container bg-primary text-primary-foreground rounded-t-3xl">
        <div className="pt-8 pb-3">
          <p className="font-semibold text-3xl">Slip n Slide Stairs</p>
        </div>
        <nav className="py-3">
          <ul className="flex flex-wrap gap-3">
            <li>About Us</li>
            <li>Get a Quote</li>
            <li>Shop Now</li>
          </ul>
          <ul className="flex flex-wrap gap-3">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact us</li>
          </ul>
        </nav>
        <nav className="py-3 flex flex-wrap gap-1">
          <p className="sr-only">Social Media Links</p>
          <Link
            href="#https://x.com"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <SiX size={24} />
          </Link>
          <Link
            href="#https://instagram.com"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <SiInstagram size={24} />
          </Link>
          <Link
            href="#https://facebook.com"
            className={buttonVariants({ variant: "ghost", size: "icon" })}
          >
            <SiFacebook size={24} />
          </Link>
        </nav>
        <p className="text-muted-foreground py-2">
          &copy; 2023 Slip n Slide Stairs. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Page;
