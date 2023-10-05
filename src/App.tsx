import {
  Center,
  Card,
  Image,
  Stack,
  Flex,
  Text,
  Avatar,
  Button,
  fr,
  usePrismaneTheme,
} from "@prismane/core";

function App() {
  const { toggleThemeMode } = usePrismaneTheme();

  return (
    <Center
      w="100vw"
      h="100vh"
      direction="column"
      gap={fr(6)}
      bg={["base", 300]}
    >
      <Card w={720} h={400} direction="row" gap={fr(6)}>
        <Image
          src="https://www.teahub.io/photos/full/66-664490_coffee-cup-minimal-hd-wallpaper-aesthetic-coffee-cup.jpg"
          w={360}
          h="100%"
          br="md"
          fit="cover"
        />
        <Stack>
          <Text
            as="h2"
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 100] : ["base", 900]
            }
          >
            How to make the perfect morning coffee, according to science
          </Text>
          <Text
            cl={(theme) =>
              theme.mode === "dark" ? ["base", 300] : ["base", 700]
            }
          >
            Brewing the perfect cup of coffee is both an art and a science, and
            understanding the scientific principles behind it can lead to a
            consistently satisfying morning ritual. The journey begins with
            selecting high-quality coffee beans, as the flavor profile is
            greatly influenced by factors like origin and roast level.
          </Text>
          <Flex gap={fr(4)} mt="auto">
            <Avatar size="sm" color="teal">
              MP
            </Avatar>
            <Flex direction="column">
              <Text
                cl={(theme) =>
                  theme.mode === "dark" ? ["base", 100] : ["base", 900]
                }
              >
                Martin Petrov
              </Text>
              <Text
                cl={(theme) =>
                  theme.mode === "dark" ? ["base", 300] : ["base", 700]
                }
              >
                Aug 29 2023
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Card>
      <Button onClick={() => toggleThemeMode()}>Toggle Theme Mode</Button>
    </Center>
  );
}

export default App;
