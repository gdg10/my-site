import type { MetaFunction } from "@remix-run/node";
import { Flex, Text, Button, Heading, Avatar, Card, Box, Container, Link, Code } from '@radix-ui/themes';
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { useNavigate } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Garrett Grube" }];

export default function Index() {
  const navigate = useNavigate();
  return (
    <Box className="h-screen">
      <Container size="1">
        <Flex direction="column" gap="6" align="center" py='8' px="4">
          <Avatar fallback="GG" size="9" />
          <Heading align='center' size='9'>Garrett Grube</Heading>
          <Text align='center' size='6'>Welcome to my personal website</Text>
          <Button size='4' onClick={() => navigate('/engineer')}>Story: Full-Stack Engineer <ArrowRightIcon /></Button>
          <Button size='4' onClick={() => navigate('/drums')}>Story: Rock Drummer <ArrowRightIcon /></Button>
          <Link size='2' target='_blank' href="https://github.com/gdg10">Show me the code!</Link>
        </Flex>
      </Container>
    </Box>
  );
}
