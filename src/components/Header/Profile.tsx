import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData &&  (
        <Box mr="4" textAlign="right">
          <Text>Paulo Beckman</Text>
          <Text color="gray.300" fontSize="small">
            beckmam.paulo@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Paulo Beckman" src="https://github.com/paulobeckman.png"/>
    </Flex>
  ); 
};