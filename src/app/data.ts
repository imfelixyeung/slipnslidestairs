export type CallToAction = {
  text: string;
};

export const callToActions = {
  shopNow: {
    text: "Shop Now",
  },
  getQuote: {
    text: "Get a Quote",
  },
} satisfies { [key: string]: CallToAction };

export const features = [
  {
    title: "Thrilling Descents",
    description:
      "Experience the adrenaline rush as you slide down our specially designed slippery stairs. Perfect for kids and adults alike, Slip n Slide Stairs adds an element of fun to your home.",
  },
  {
    title: "Challenging Ascents",
    description:
      "Turn climbing stairs into a fun workout. Our slip-resistant surface ensures a challenging climb, providing an engaging exercise for a healthier lifestyle.",
  },
  {
    title: "Safety First",
    description:
      "Crafted with premium materials, our Slip n Slide Stairs prioritize safety. The non-slip technology guarantees a secure grip, making it safe for the entire family.",
  },
  {
    title: "Customizable Design",
    description:
      "Choose from a variety of designs and colors to match your home decor. Our customization options ensure that Slip n Slide Stairs seamlessly integrates into your living space.",
  },
];

export const testimonials = [
  {
    name: "Johnson",
    title: "Homeowner",
    quote:
      "Slip n Slide Stairs brought a whole new level of fun to our home! Not only are the kids entertained for hours, but it's also a great icebreaker when we have guests over. The laughter and excitement that echo through our staircase are priceless!",
    image: "/assets/images/testimonials/johnsons.png",
  },
  {
    name: "The Smiths",
    title: "Happy Customer",
    quote:
      "Slip n Slide Stairs transformed our home! Our kids can't get enough, and it's become the centerpiece of family gatherings. The perfect blend of safety and excitement, making every journey up and down the stairs a joyous adventure.",
    image: "/assets/images/testimonials/smiths.png",
  },
  {
    name: "Sarah T",
    title: "Fitness Enthusiast",
    quote:
      "As a fitness enthusiast, Slip n Slide Stairs has been a game-changer for my daily routine. The challenging ascent gives me a fantastic workout without having to hit the gym. It's like having a personal staircase trainer at home! Plus, the sleek design seamlessly integrates into our modern living space.",
    image: "/assets/images/testimonials/sarah-t.png",
  },
];
