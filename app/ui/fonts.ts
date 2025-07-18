import { Inter } from "next/font/google";
import { Lusitana } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";
import { Turret_Road } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const turretRoad = Turret_Road({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
