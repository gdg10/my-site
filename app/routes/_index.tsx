import {
  DownloadIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  Flex,
  Text,
  Button,
  Heading,
  Avatar,
  Box,
  Container,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";

import {
  GITHUB_REPOSITORY_URL,
  HEADSHOT_PATH,
  LINKEDIN_PROFILE_URL,
  RESUME_PDF_PATH,
} from "~/constants";

export const meta: MetaFunction = () => [{ title: "Garrett Grube" }];

export default function Index() {
  return (
    <Box className="h-screen bg-[var(--accent-4)] md:flex md:items-center md:justify-center">
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 2
        }}
      >
        <Container size="1" p="3">
          <Flex direction="column" gap="3" align="center" py="4" px="3">
            <Flex direction="column" align="center" gap="1" mb="3">
              <Avatar
                src={HEADSHOT_PATH}
                fallback="GG"
                size="9"
                className="w-full rounded shadow-md"
              />
              <Heading size="9" align="center">
                Garrett Grube
              </Heading>
              <Text size="5" align="center">
                Senior Full-Stack Engineer, Scrum Master
              </Text>
            </Flex>
            <Button
              size="4"
              onClick={() => window.open(RESUME_PDF_PATH)}
              className="w-full"
            >
              <DownloadIcon /> Resume
            </Button>
            <Button
              size="4"
              onClick={() => window.open(LINKEDIN_PROFILE_URL)}
              className="w-full"
              variant="surface"
            >
              <LinkedInLogoIcon /> Linkedin profile
            </Button>
            <Button
              size="4"
              onClick={() => window.open(GITHUB_REPOSITORY_URL)}
              className="w-full"
              variant="surface"
            >
              <GitHubLogoIcon /> Code for this website
            </Button>
          </Flex>
        </Container>
      </motion.div>
    </Box>
  );
}
