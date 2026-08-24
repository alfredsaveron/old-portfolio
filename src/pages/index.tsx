import * as React from "react";
import {
  Box,
  GridItem,
  Heading,
  HStack,
  Img,
  Link,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { graphql } from "gatsby";
import { BsTypescript, BsJavascript } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import { SiPython, SiNextdotjs } from "react-icons/si";
import { FaReact, FaGithub, FaDiscord, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PostCard from "../components/PostCard";
import ProjectItem from "../components/ProjectItem";
import Layout from "../components/Layout";
import { WorkItem } from "../components/WorkItem";

const IndexPage = ({ data }) => {
  return (
    <Layout hideNav>
      <SimpleGrid templateColumns={["1fr", null, null, "1fr 2fr"]} spacing="24">
        <VStack minW="33%" align="flex-start" spacing="8">
          <VStack align="flex-start" spacing="4" w="full">
            <Link href="/" _hover={{ textDecoration: "none" }}>
              <HStack align="center" spacing="4">
                <Img src="/alf.jpg" w="10" h="10" borderRadius="lg" objectFit="cover" />
                <Heading size="lg">Alf S.</Heading>
              </HStack>
            </Link>
            <Text size="md">
              21 years old CE student interested in Internet culture, technologies.
            </Text>
          </VStack>

          <VStack align="flex-start" spacing="4" w="full">
            <Heading fontSize="3xl">Working at</Heading>
            <Wrap w="full" spacing="3">
              <ProjectItem
                title="Discords.com"
                role={{
                  full: "Community & Product Coordinator",
                  short: "Project Coordinator",
                }}
                iconSquare="/images/discords.jpg"
                href="https://discords.com"
                description="Find Discord Servers using the most advanced public index."
                placement="bottom-start"
              />
              <ProjectItem
                title="Discord Templates"
                role={{
                  full: "Community & Product Manager",
                  short: "Project Manager",
                }}
                iconSquare="/images/templates.jpg"
                href="https://discords.com/templates"
                description="Check out the templates from our diverse collection and find the one you'll love!"
                placement="bottom"
              />
            </Wrap>
          </VStack>

          <VStack align="flex-start" spacing="4" w="full">
            <Heading fontSize="3xl">Technologies</Heading>
            <Wrap w="full" spacing="3">
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <BsTypescript size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">TypeScript</Text>
              </HStack>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <BsJavascript size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">JavaScript</Text>
              </HStack>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <BiLogoVisualStudio size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">Visual Studio Code</Text>
              </HStack>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <SiPython size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">Python</Text>
              </HStack>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <FaReact size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">React</Text>
              </HStack>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="2"
                borderRadius="lg"
                spacing="2"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec" }}
                cursor="default"
              >
                <SiNextdotjs size="18" color="#1a1a1a" />
                <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">Next.js</Text>
              </HStack>
            </Wrap>
          </VStack>

          <VStack align="flex-start" spacing="4" w="full">
            <Heading fontSize="3xl">Let's meet</Heading>
            <Wrap w="full" spacing="3">
              <Link
                href="https://github.com/alfredsaveron"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  bg="#f4f4f5"
                  px="3"
                  py="2"
                  borderRadius="lg"
                  spacing="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{ bg: "#ebebec" }}
                >
                  <FaGithub size="18" color="#1a1a1a" />
                  <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">GitHub</Text>
                </HStack>
              </Link>
              <Link
                href="https://discordapp.com/users/408005465423872001"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  bg="#f4f4f5"
                  px="3"
                  py="2"
                  borderRadius="lg"
                  spacing="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{ bg: "#ebebec" }}
                >
                  <FaDiscord size="18" color="#1a1a1a" />
                  <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">Discord</Text>
                </HStack>
              </Link>
              <Link
                href="https://twitter.com/alfredsaveron"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  bg="#f4f4f5"
                  px="3"
                  py="2"
                  borderRadius="lg"
                  spacing="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{ bg: "#ebebec" }}
                >
                  <FaXTwitter size="18" color="#1a1a1a" />
                  <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">X</Text>
                </HStack>
              </Link>
              <Link
                href="https://instagram.com/alfredsaveron"
                isExternal
                _hover={{ textDecoration: "none" }}
              >
                <HStack
                  bg="#f4f4f5"
                  px="3"
                  py="2"
                  borderRadius="lg"
                  spacing="2"
                  transition="all 0.2s ease-in-out"
                  _hover={{ bg: "#ebebec" }}
                >
                  <FaInstagramSquare size="18" color="#1a1a1a" />
                  <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">Instagram</Text>
                </HStack>
              </Link>
            </Wrap>
          </VStack>
        </VStack>
        <Box>
          <Tabs variant="unstyled">
            <TabList pb="2" gap="4">
              <Tab
                px="0"
                py="1"
                color="#6b6b6b"
                fontWeight="medium"
                borderBottom="2px solid transparent"
                _selected={{
                  color: "#1a1a1a",
                  borderBottomColor: "#f4f4f5",
                }}
                _focus={{ boxShadow: "none" }}
              >
                Blog ({data.allMarkdownRemark.nodes.length})
              </Tab>
              <Tab
                px="0"
                py="1"
                color="#6b6b6b"
                fontWeight="medium"
                borderBottom="2px solid transparent"
                _selected={{
                  color: "#1a1a1a",
                  borderBottomColor: "#f4f4f5",
                }}
                _focus={{ boxShadow: "none" }}
              >
                Projects
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel px="0" pt="4">
                {data.allMarkdownRemark.nodes.map((node) => (
                  <PostCard
                    slug={node.fields.slug}
                    title={node.frontmatter.title}
                    description={node.excerpt}
                    date={node.frontmatter.date}
                    key={node.fields.slug}
                    readingTime={node.fields.readingTime.text}
                    tags={node.frontmatter.tags}
                  />
                ))}
              </TabPanel>
              <TabPanel px="0">
                <SimpleGrid columns={[1, null, null, 2]} spacing="8">
                  <WorkItem
                    link="https://github.com/alfredsaveron/findee"
                    src="/images/findee.png"
                    gridColumn="span 2"
                  />
                  <WorkItem
                    link="https://github.com/alfredsaveron/habbo-concept"
                    src="/images/habboconcept.png"
                  />
                  <WorkItem
                    link="https://github.com/alfredsaveron/scrollbars"
                    src="/images/scrollbars.png"
                  />
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Alf S.</title>
    <meta name="description" content="Student interested in Internet culture, games, technologies and frontend development with loves of open-source." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
  </>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      nodes {
        excerpt(pruneLength: 400)
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
