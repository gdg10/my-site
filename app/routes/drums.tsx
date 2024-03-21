import type { MetaFunction } from "@remix-run/node";
import { Heading, Box } from '@radix-ui/themes';

export const meta: MetaFunction = () => [{ title: "Drums" }];

export default function Drums() {
    return (
        <Box className="h-screen">
            <Heading align='center' size='9'>Drums</Heading>
        </Box>
    );
}
