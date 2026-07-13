import type { MetadataRoute } from "next";

const SITE_URL = "https://sdwaffles.vercel.app";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SD Waffles & Shakes",
    short_name: "SD Waffles",
    description:
      "Where waffles get wild & shakes get thick! Premium waffles, thick shakes & desserts in Miryalaguda.",
    start_url: "/",
    display: "standalone",
    background_color: "#2A1609",
    theme_color: "#2A1609",
    orientation: "portrait-primary",
    categories: ["food", "lifestyle", "shopping"],
    icons: [
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "View Menu",
        url: `${SITE_URL}/#menu`,
      },
      {
        name: "Call to Order",
        url: "tel:+917093258864",
      },
    ],
  };
}
