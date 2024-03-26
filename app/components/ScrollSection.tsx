import { Heading, Text } from "@radix-ui/themes";
import { Variants, motion } from "framer-motion";

interface Props {
  title: string;
  paragraph: string;
  pictures: string[];
}

const cardVariants: Variants = {
  offscreen: {
    // y: 300,
    rotate: 0,
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    y: 300,
    rotate: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 2,
    },
  },
};

function ScrollSection({ title, paragraph }: Props) {
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="w-full h-screen text-center"
        variants={cardVariants}
      >
        <Heading>{title}</Heading>
        <Text>{paragraph}</Text>
      </motion.div>
    </motion.div>
  );
}

export default ScrollSection;
