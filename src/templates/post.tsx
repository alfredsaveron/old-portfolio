import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { RiQuillPenFill } from "react-icons/ri";
import { IoReturnUpBack } from "react-icons/io5";
import Content from "../components/Content";

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark;

  return (
    <Layout hideNav>
      <VStack
        as="article"
        itemScope
        itemType="http://schema.org/Article"
        spacing="6"
        align="flex-start"
        w="full"
      >
        <Box as="header" w="full">
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" w="full" mb="2">
            <Heading itemProp="headline">{post.frontmatter.title}</Heading>
            <Link to="/" style={{ textDecoration: "none" }}>
              <HStack
                bg="#f4f4f5"
                px="3"
                py="1.5"
                borderRadius="lg"
                spacing="2"
                color="#6b6b6b"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "#ebebec", color: "#1a1a1a" }}
                cursor="pointer"
                w="fit-content"
                flexShrink={0}
              >
                <IoReturnUpBack size="18" />
                <Text fontSize="sm" fontWeight="medium">Home</Text>
              </HStack>
            </Link>
          </Box>
          <HStack spacing="2" color="#6b6b6b" fontSize="sm" align="center">
            <RiQuillPenFill size="14" color="#6b6b6b" />
            <Text>Written on {post.frontmatter.date} by Alf</Text>
          </HStack>
        </Box>

        <section itemProp="articleBody">
          <Content>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </Content>
        </section>
      </VStack>
    </Layout>
  );
};

export default BlogPostTemplate;

export const Head = ({ data }) => (
  <>
    <title>{`${data.markdownRemark.frontmatter.title} | Alf S.`}</title>
    <meta
      name="description"
      content={data.markdownRemark.frontmatter.description || data.markdownRemark.excerpt}
    />
  </>
);

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
