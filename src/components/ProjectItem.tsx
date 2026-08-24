import {
  Heading,
  HStack,
  Img,
  LinkBox,
  LinkOverlay,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type StringWithShortVariant = {
  full: string;
  short: string;
};

type Props = {
  iconSquare?: string;
  title: string;
  role: string | StringWithShortVariant;
  description?: string;
  href: string;
  placement?: "bottom-start" | "bottom" | "bottom-end";
};

const ProjectItem = ({ iconSquare, title, role, description, href, placement = "bottom" }: Props) => {
  const roleText = typeof role === "string" ? role : role.full;

  return (
    <LinkBox>
      <Popover trigger="hover" placement={placement}>
        <PopoverTrigger>
          <HStack
            bg="#f4f4f5"
            px="3"
            py="2"
            borderRadius="lg"
            spacing="2"
            transition="all 0.2s ease-in-out"
            _hover={{ bg: "#ebebec" }}
            cursor="pointer"
            w="fit-content"
          >
            {iconSquare && (
              <Img
                w="5"
                h="5"
                borderRadius="md"
                src={iconSquare}
                objectFit="cover"
              />
            )}
            <Text fontSize="sm" fontWeight="medium" color="#1a1a1a">
              {title}
            </Text>
          </HStack>
        </PopoverTrigger>
        <PopoverContent
          p="4"
          bg="#f4f4f5"
          border="none"
          borderRadius="xl"
          boxShadow="none"
          _focus={{ boxShadow: "none", outline: "none" }}
          w="300px"
        >
          <VStack align="flex-start" spacing="1">
            <LinkOverlay href={href} isExternal _hover={{ textDecoration: "none" }}>
              <Text fontWeight="semibold" color="#1a1a1a">
                {roleText}
              </Text>
            </LinkOverlay>
            {description && (
              <Text color="#6b6b6b">
                {description}
              </Text>
            )}
          </VStack>
        </PopoverContent>
      </Popover>
    </LinkBox>
  );
};

export default ProjectItem;
