import { Box } from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { motion, useScroll } from "framer-motion";

import ScrollSection from "~/components/ScrollSection";

export const meta: MetaFunction = () => [
  { title: "Garrett Grube: Software Engineer" },
];

//I've spent the last 5 years writing working in health-tech in nyc, and ten years of expierence...

const engineeringStory: [string, string, string[]][] = [
  [
    "I am a senior full-stack engineer",
    "with 10 years of experience & a passion for pixel-perfect UX...",
    [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  ],
  [
    "I began my career at Bombardier Transportation",
    "writing system software for New York City subway cars...",
    [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  ],
  [
    "I developed an interest in building web-apps",
    "and launched a small buisness offering freelance full-stack engeering...",
    [
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
      "https://placehold.co/600x400",
    ],
  ],
  ["I worked at Quartet Health", "I worked at Quartet Health", []],
  ["I worked Season Health", "I worked at Quartet Health", []],
  ["This is the conculsion", "follow these links", []],
];

export default function EngineeringStory() {
  const { scrollYProgress } = useScroll();
  return (
    <Box>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-1 bg-[var(--accent-9)] sticky top-0 left-0"
      />

      {engineeringStory.map(([title, paragraph, pictures]) => (
        <ScrollSection
          title={title}
          paragraph={paragraph}
          pictures={pictures}
          key={title}
        />
      ))}
    </Box>
  );
}

// function ReplayStoryButton() {
//   const navigate = useNavigate();
//   return (
//     <IconButton
//       onClick={() => {
//         window.scrollTo(0, 0);
//       }}
//     >
//       <SymbolIcon width="18" height="18" />
//     </IconButton>
//   );
// }
