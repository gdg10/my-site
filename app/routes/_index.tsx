import type { MetaFunction } from "@remix-run/node";
import { Flex, Text, Button, Heading, Avatar, Box, Container } from '@radix-ui/themes';
import { DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { GITHUB_REPOSITORY_URL, HEADSHOT_PATH, LINKEDIN_PROFILE_URL, RESUME_PDF_PATH } from "~/constants";
import { motion } from "framer-motion";

export const meta: MetaFunction = () => [{ title: "Garrett Grube" }];

export default function Index() {
  return (
    <Box className="h-screen bg-[var(--accent-1)]">
      <motion.div
        initial={{ rotate: 0, scaleY: 0 }}
        animate={{ rotate: 0, scaleY: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
      >
        <Container size="1">
          <Flex direction="column" gap="3" align="center" justify='between' py='8' px="4">
            <Flex direction="column" align='center' gap="1" mb="3">
              <Avatar src={HEADSHOT_PATH} fallback="GG" size="9" className="w-full rounded"/>
              <Heading size='9' align='center'>Garrett Grube</Heading>
              <Text size='5' align='center'>Senior Full-Stack Engineer, Scrum Master</Text>
            </Flex>
            <Button size='4' onClick={() => window.open(RESUME_PDF_PATH)} className="w-full"><DownloadIcon /> Resume download</Button>
            <Button size='4' onClick={() => window.open(LINKEDIN_PROFILE_URL)} className="w-full"><LinkedInLogoIcon /> Linkedin profile</Button>
            <Button size='4' onClick={() => window.open(GITHUB_REPOSITORY_URL)} className="w-full"><GitHubLogoIcon /> This website's source code</Button>
          </Flex>
        </Container>
      </motion.div>
    </Box>
  );
}
