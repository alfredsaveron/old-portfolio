import React from "react";
import { Box, BoxProps, Img, Text, VStack } from "@chakra-ui/react";

type Props = BoxProps & {
  src: string;
  title: string;
  subtitle: string;
  link: string;
};

export const WorkItem = ({ src, link, ...props }: Omit<Props, "title" | "subtitle"> & Partial<Pick<Props, "title" | "subtitle">>) => {
  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      position="relative"
      w="full"
      className="group"
      overflow="hidden"
      borderRadius="lg"
      cursor="pointer"
      {...props}
    >
      <Img w="full" src={src} />
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="#f4f4f5"
        opacity="0"
        transition="all 0.2s ease-in-out"
        _groupHover={{
          opacity: "0.4",
        }}
      />
    </Box>
  );
};
