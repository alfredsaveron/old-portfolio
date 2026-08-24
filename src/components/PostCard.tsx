import {
  Box,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

type Props = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
};

const PostCard = ({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: Props) => (
  <LinkBox mb="4">
    <Box
      bg="#f4f4f5"
      p="5"
      borderRadius="xl"
      transition="all 0.2s ease-in-out"
      _hover={{
        bg: "#ebebec",
      }}
      cursor="pointer"
    >
      <VStack spacing="3" align="flex-start">
        <LinkOverlay href={slug}>
          <Heading size="md" color="#1a1a1a">
            {title}
          </Heading>
        </LinkOverlay>
        <Text noOfLines={2} color="#6b6b6b">
          {description}
        </Text>
        <HStack spacing="2" fontSize="sm" color="#6b6b6b" align="center">
          <FaBookOpen size="14" color="#6b6b6b" />
          <Text>Posted on {date}</Text>
          <Text>•</Text>
          <Text>{readingTime}</Text>
          {tags && tags.length > 0 && (
            <>
              <Text>•</Text>
              <HStack spacing="1">
                {tags.map((x) => (
                  <Text key={x}>{x}</Text>
                ))}
              </HStack>
            </>
          )}
        </HStack>
      </VStack>
    </Box>
  </LinkBox>
);

export default PostCard;
