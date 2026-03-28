import { Orbitron, Funnel_Display} from "next/font/google";

export const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron", // Creates the CSS variable
  display: "swap",
});

export const funnel_display = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel", // Creates the CSS variable
  display: "swap",
});
