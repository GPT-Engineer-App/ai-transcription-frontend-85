import React, { useState, useEffect } from "react";
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Tag, Spinner, Flex, Text } from "@chakra-ui/react";

const Index = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating fetching data from Google Cloud Storage
    const fetchFiles = async () => {
      // Replace this with your actual API call to fetch files from Google Cloud Storage
      const response = await fetch("https://api.example.com/files");
      const data = await response.json();
      setFiles(data);
      setIsLoading(false);
    };

    fetchFiles();
  }, []);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        AI Transcription Summary Tool
      </Heading>
      {isLoading ? (
        <Flex justify="center" align="center" height="200px">
          <Spinner size="xl" />
        </Flex>
      ) : (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>File Name</Th>
              <Th>Size</Th>
              <Th>Status</Th>
              <Th>Type</Th>
            </Tr>
          </Thead>
          <Tbody>
            {files.map((file) => (
              <Tr key={file.name}>
                <Td>{file.name}</Td>
                <Td>{file.size} bytes</Td>
                <Td>{file.size === 0 ? <Text color="red.500">Failed</Text> : <Text color="green.500">Success</Text>}</Td>
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
