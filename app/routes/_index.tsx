import type { MetaFunction } from "@remix-run/node";
import { Flex, Text, Button, Heading, Avatar, Card, Box, Container, Link, Code } from '@radix-ui/themes';
import { ArrowRightIcon, DownloadIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Garrett Grube" }];

export default function Index() {
  const navigate = useNavigate();
  return (
    <Box className="h-screen">
      <Container size="1">
        <Flex direction="column" gap="6" align="center" py='8' px="4">
          <Avatar fallback="GG" size="9" />
          <Heading align='center'>Garrett Grube</Heading>
          <Text align='center'>Senior Full-Stack Engineer</Text>
          {/* <Flex gap='6' align="center"> */}
          <Button><DownloadIcon /> Resume Download</Button>
          <Button><GitHubLogoIcon /> This site on Github</Button>
          <Button><LinkedInLogoIcon /> Linkedin Profile</Button>
          {/* </Flex> */}
          {/* <Button size='4' onClick={() => navigate('/engineer')}>Software Engineer <ArrowRightIcon /></Button> */}
          {/* TODO: <Button size='4' onClick={() => navigate('/drums')}>Drummer <ArrowRightIcon /></Button>          */}
          {/* <Link size='2' target='_blank' href="https://github.com/gdg10" className="mt-auto m-auto text-center">I hand-coded this website using React, Remix, & Radix UI. See the source on Github.</Link> */}
        </Flex>
      </Container>
    </Box>
  );
}
