import type { MetaFunction } from "@remix-run/node";
import { Flex, Text, Button } from '@radix-ui/themes';

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <Flex direction="column" gap="2">
      <Text>Hello from Radix Themes</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
