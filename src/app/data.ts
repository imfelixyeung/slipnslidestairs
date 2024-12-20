export type CallToAction = {
  text: string;
  href: string;
};

export const callToActions = {
  shopNow: {
    text: "Shop Now",
    href: "/shop",
  },
  getQuote: {
    text: "Get a Quote",
    href: "/get-quote",
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

export const products = [
  {
    title: "Classic Joyful Descent",
    description:
      "Experience the pure thrill with our Classic Joyful Descent! Specially designed for maximum excitement, this Slip n Slide Stairs model guarantees endless laughter and joy for the whole family.",
    price: 799.99,
    image:
      "/assets/images/products/Classic 3D Realism_KYAhTU27TOCwB2MDjz84FQ_Product Placement Image, Classic Joyful Descent_Experience the pure thrill with our Classic Joyful Descent! Specially designed for maximum excitement, this Slip n Slide Stairs model guarantees endle.png",
  },
  {
    title: "Fitness Challenge Ascend",
    description:
      "Turn your staircase into a fitness haven with our Fitness Challenge Ascend! The slip-resistant surface ensures a challenging climb, making it the perfect choice for those looking to add a fun workout element to their daily routine.",
    price: 899.99,
    image:
      "/assets/images/products/Classic 3D Realism_FDXmohjdSYmVt03-NaKEdQ_Product Placement Image, Fitness Challenge Ascend_Turn your staircase into a fitness haven with our Fitness Challenge Ascend! The slip-resistant surface ensures a challenging climb, making it the pe.png",
  },
  {
    title: "Sleek Modern Elegance",
    description:
      "Elevate your home decor with our Sleek Modern Elegance design. Choose from a variety of contemporary styles and colors to seamlessly integrate Slip n Slide Stairs into your living space while adding a touch of sophistication.",
    price: 899.99,
    image:
      "/assets/images/products/Classic 3D Realism_Z7non40cS-CzrDB49LMTzQ_Product Placement Image, Sleek Modern Elegance_Elevate your home decor with our Sleek Modern Elegance design. Choose from a variety of contemporary styles and colors to seamlessly integrate Slip n S.png",
  },
  {
    title: "Kids' Adventure Zone",
    description:
      "Create a wonderland for your little ones with our Kids' Adventure Zone Slip n Slide Stairs. Designed with safety in mind, this model offers a thrilling descent for children while ensuring parents have peace of mind.",
    price: 699.99,
    image:
      "/assets/images/products/Classic 3D Realism_Aqk_9o8iSSWNLGhhFY9qCw_Product Placement Image, Kids' Adventure Zone_Create a wonderland for your little ones with our Kids' Adventure Zone Slip n Slide Stairs. Designed with safety in mind, this model offers a thrilling .png",
  },
  {
    title: "Extreme Thrill Seeker",
    description:
      "For the adrenaline junkies, our Extreme Thrill Seeker Slip n Slide Stairs takes excitement to new heights. With steeper slopes and twists, this model is perfect for those seeking an exhilarating staircase adventure.",
    price: 999.99,
    image:
      "/assets/images/products/Classic 3D Realism_JaqzCsROQBmgajuvZAOCUg_Product Placement Image, Extreme Thrill Seeker, For the adrenaline junkies, our Extreme Thrill Seeker Slip n Slide Stairs takes excitement to new heights. With steeper slopes and twists, this model .png",
  },
  {
    title: "Holiday Special Edition",
    description:
      "Celebrate the festive season with our Holiday Special Edition Slip n Slide Stairs. Featuring festive designs and colors, this limited edition model adds a touch of holiday cheer to your home.",
    price: 849.99,
    image:
      "/assets/images/products/Classic 3D Realism_ZYBc5jMWRVa7FBLgqpENdQ_Product Placement Image, Holiday Special Edition, Celebrate the festive season with our Holiday Special Edition Slip n Slide Stairs. Featuring festive designs and colors, this limited edition model .png",
  },
  {
    title: "Outdoor Adventure Set",
    description:
      "Bring the excitement outdoors with our Outdoor Adventure Set. Perfect for decks and patios, this Slip n Slide Stairs model is weather-resistant, allowing you to enjoy the thrill in the fresh air.",
    price: 1199.99,
    image:
      "/assets/images/products/Classic 3D Realism_dd7w1gFLQ3-1ho1NRzgj3g_Product Placement Image, Outdoor Adventure Set, Bring the excitement outdoors with our Outdoor Adventure Set. Perfect for decks and patios, this Slip n Slide Stairs model is weather-resistant, allow.png",
  },
  {
    title: "Custom Wonderland",
    description:
      "Unleash your creativity with our Custom Wonderland Slip n Slide Stairs. Work with our design team to create a personalized staircase adventure that perfectly fits your style and preferences.",
    price: 1299.99,
    image:
      "/assets/images/products/Classic 3D Realism_SWO7QHWgSW-AOYdqbXD11w_Product Placement Image, Custom Wonderland, Unleash your creativity with our Custom Wonderland Slip n Slide Stairs. Work with our design team to create a personalized staircase adventure that perfec.png",
  },
  {
    title: "Coming Soon",
    description:
      "We're constantly innovating to bring you the latest in staircase excitement. Stay tuned for our upcoming models, designed to take your home adventure to the next level.",
    price: null,
    image: "/assets/images/undraw/undraw_Questions_re_1fy7.png",
  },
];
