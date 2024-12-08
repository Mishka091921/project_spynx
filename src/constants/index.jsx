import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "HOME", href: "#hero" },
  { label: "TEAM", href: "#feature" },
  { label: "ROADMAP", href: "#roadmap" },
  { label: "TOKENOMICS", href: "#tokenomics" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "CryptoVibes",
    description:
      "A visionary in the crypto space, CryptoVibes is always on the lookout for the latest trends and opportunities in blockchain technology. Known for their deep insights into market shifts and innovative thinking.",
  },
  {
    icon: <BotMessageSquare />,
    text: "NFTWizard",
    description:
      "A master of all things NFT, NFTWizard has a flair for creating and curating unique digital art that resonates in the metaverse. Known for their magical touch in transforming concepts into valuable assets.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Web3Warrior",
    description:
      "A true soldier of the decentralized web, Web3Warrior fights to expand the boundaries of blockchain technology and advocate for the rights of users in the growing Web3 ecosystem.",
  },
  {
    icon: <BotMessageSquare />,
    text: "PixelPhantom",
    description:
      "Specializing in cyberpunk-inspired art, PixelPhantom uses advanced design tools and blockchain technology to craft immersive, one-of-a-kind pieces that speak to the soul of the digital age. Their art often explores themes of digital dystopia and innovation.",
  },

];

export const checklistItems = [
  {
    title: "Story Telling",
    description:
      "Share the vision of KSPHNX. Introduce the lore, themes, and why this meme coin is different. Build an emotional connection by explaining its roots in the Kaspa network and its futuristic cyberpunk-inspired world.",
  },
  {
    title: "Launching",
    description:
      "Officially launch KSPHNX. Highlight the advantages of using the fast and efficient Kaspa network.",
  },
  {
    title: " Creating a Digital Hub",
    description:
      "Develop and launch the official KSPHNX website. This will serve as the central hub for updates, tokenomics, whitepaper access, NFT information, and community links",
  },
  {
    title: "Establishing Social Channels",
    description:
      "Build a presence on Twitter, Discord, Telegram, and Instagram. Use these platforms to engage with the community, share updates, and host fun activities like memes contests and giveaways to grow the audience.",
  },
  {
    title: "Future Expansion",
    description:
      "Unveil Roadmap 2.0 focusing on cross-chain compatibility, further utility development, and scaling KSPHNX into a global meme coin phenomenon",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "TOTAL SUPPLY:",
    price: "1000000000",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "100 % FAIR LAUNCH",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
  
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
