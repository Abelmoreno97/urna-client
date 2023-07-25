import { useState } from 'react';
import { Input, Button, Stack, Radio, RadioGroup, FormControl, FormLabel } from "@chakra-ui/react";

const ProfileComplete = () => {
  const [value, setValue] = useState('1');
  const [profileInfo, setProfileInfo] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Do something with the form data, for example, send it to a server.
    fetch('/api/save-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileInfo),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the server if needed
        console.log('Server response:', data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error('Error:', error);
      });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   console.log(profileInfo);
  // };

  return (
    <div>
      <h1>UserComplete</h1>
      <form onSubmit={handleSubmit}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="1">First</Radio>
            <Radio value="2">Second</Radio>
            <Radio value="3">Third</Radio>
          </Stack>
        </RadioGroup>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" value={profileInfo.username} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={profileInfo.email} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={profileInfo.password} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Repeat Password</FormLabel>
          <Input
            type="password"
            name="confirmPassword"
            value={profileInfo.confirmPassword}
            onChange={handleChange}
          />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileComplete;

