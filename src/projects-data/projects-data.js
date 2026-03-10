import altimeterImage from "../images/altimeter.com.png";
import bumlistImage from "../images/bumlist.jpg";
import footbookingImage from "../images/footbooking.jpg";
import aiTravelerImage from '../images/aitravel.jpg';
import terraceshopImage from '../images/terrace.jpg';
import connect4Image from '../images/connect-4.jpg';
import grubmarketImage from '../images/grubmarket.png';
import skileoImage from '../images/skileo.png';

export const projects = [
  {
    id: 0,
    title: "GrubMarket",
    img: grubmarketImage,
    stack: "React | Node | WordPress",
    about: [
      "Food technology company digitizing the American food supply chain. B2B eCommerce, ERP software, enterprise AI solutions, and farm-fresh delivery across the U.S. and Canada."
    ],
    link: "https://www.grubmarket.com/",
    page: "/grubmarket",
  },
  {
    id: 11,
    title: "Skileo",
    img: skileoImage,
    stack: "React | Tailwind CSS | Spring Boot",
    about: [
      "All-in-one cloud software for employee management, vacation and leave tracking, recruiting, invoicing, and expense management. GDPR compliant, secure, and designed to help companies manage operations effortlessly."
    ],
    link: "https://www.skileo.com/",
    page: "/skileo",
  },
  {
    id: 1,
    title: "Altimeter.co",
    img: altimeterImage,
    stack: "React | React-Flow",
    about: [
      "Company Webpage for Node-Based Animated Single-Screen Fully Responsible"
    ],
    link: "https://altimeter-site-102125.vercel.app/",
    page: "/altimeter.co",
  },
  {
    id: 3,
    title: "Bumlist management",
    img: bumlistImage,
    stack: "Next.js | Supabase",
    about: [
      "Event creation and management (baby showers, birthdays, weddings, etc.)", 
      "Gift list management with priority marking Public registry sharing via unique URLs and QR codes.",
    ],
    link: "https://bumlist-management.vercel.app/",
    page: "/bumlist-management",
  },
  {
    id: 2,
    title: "FootBooking",
    img: footbookingImage,
    stack: "Vue.js | .NET | PHP",
    about: [
      "Football pitch reservation app built with Next.js, Shadcn UI, Prisma, and Better Auth.", 
    ],
    link: "https://footbookr.vercel.app/",
    page: "/foot-pitch-booking",
  },
  {
    id: 6,
    title: "AI Travel Planner",
    img: aiTravelerImage,
    stack: "Next.js | OpenAI | Python",
    about: [
      "A modern travel planner using Next.js, TailwindCSS, Prisma, Open AI, and Python.", 
    ],
    link: "https://travelplan-sm.vercel.app/",
    page: "/travel-planner",
  },
  {
    id: 4,
    title: "Terrace Shop",
    img: terraceshopImage,
    stack: "Next.js | Shopify API",
    about: [
      "A custom online store built with Next.js and Shopify. It lets users browse products, add items to a cart, and log in to see their orders."
    ],
    link: "https://terraceshop.vercel.app/",
    page: "/terrace-shop",
  },
  // {
  //   id: 5,
  //   title: "Tesla Clone",
  //   img: teslaImage,
  //   stack: "React | Styled Components",
  //   about: [
  //     "A tesla home page clone showing Styled Components usage."
  //   ],
  //   link: "https://tesla-clone-roimalka.netlify.app",
  //   page: "/tesla-clone",
  // },
  {
    id: 15,
    title: "4 Connection",
    img: connect4Image,
    stack: "React | Styled Components",
    about: [
      "A Fancy game connecting 4 balls.",
      "Human VS Human",
      "Human VS Bot",
    ],
    link: "https://connection4-react.vercel.app/",
    page: "/connect-4",
  },
];
