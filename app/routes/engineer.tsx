import type { MetaFunction } from "@remix-run/node";
import { Heading, Text } from '@radix-ui/themes';
import { Variants, motion } from "framer-motion";

export const meta: MetaFunction = () => [{ title: "Engineer" }];

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
        opacity: 0
    },
    onscreen: {
        y: 300,
        rotate: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 0.8
        }
    }
};

function ScrollSection({ title, paragraph, pictures }: Props) {
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >
            <motion.div className="w-full h-screen text-center" variants={cardVariants}>
                <Heading>{title}</Heading>
                <Text>{paragraph}</Text>
                {pictures.map(p => p)}
            </motion.div>
        </motion.div>
    );
}

const scrollSections: [string, string, string[]][] = [
    ["College", 'I studied computer engineering', []],
    ["College1", 'I studied computer engineering', []],
    ["College2", 'I studied computer engineering', []],
];

export default function Drums() {
    return (
        scrollSections.map(([title, paragraph, pictures]) =>
            <ScrollSection title={title} paragraph={paragraph} pictures={pictures} key={title}/>
        ));
}
