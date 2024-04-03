import React, { useState, useEffect } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Tag, Spinner, Flex, Text } from "@chakra-ui/react";

const Index = () => {
  const sampleData = [
    { name: "file1.txt", size: 1024, type: "summary" },
    { name: "file2.txt", size: 2048, type: "transcription" },
    { name: "file3.txt", size: 0, type: "summary" },
    { name: "file4.txt", size: 4096, type: "transcription" },
  ];

  const [files, setFiles] = useState(sampleData);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4} color="white">
        AI Transcription Summary Tool
      </Heading>
      {isLoading ? (
        <Flex justify="center" align="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Table variant="simple" rounded="lg" border="2px solid" borderColor="gray.100" borderCollapse="separate !important" sx={{ borderCollapse: "separate !important" }}>
          <Thead>
            <Tr>
              <Th>File Name</Th>
              <Th>Size</Th>
              <Th>Status</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {files.map((file, index) => (
              <Tr key={file.name} bg={index % 2 === 0 ? "gray.900" : "gray.800"} border="1px" borderColor="white" p={4} mb={4} boxShadow={index % 2 === 0 ? "lg" : "none"} rounded="lg">
                <Td color="white">{file.name}</Td>
                <Td color="white">{file.size} bytes</Td>
                <Td>
                  {file.size === 0 ? (
                    <Text color="red.500" bg="red.100" p={1} rounded="md">
                      Failed
                    </Text>
                  ) : (
                    <Text color="green.500" bg="green.100" p={1} rounded="md">
                      Success
                    </Text>
                  )}
                </Td>
                <Td>
                  <Tag colorScheme={file.type === "summary" ? "blue" : "purple"}>{file.type}</Tag>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default Index;
