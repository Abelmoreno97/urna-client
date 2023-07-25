import { useEffect, useState } from "react";
import {
  Input,
  Button,
  Stack,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { cookie } from "../../utils";

const ProfileComplete = () => {
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    email: "",
    avatar: "",
    region_id: "",
  });
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/regions")
      .then((res) => res.json())
      .then((res) => setRegions(res.data))
      .catch((err) => console.log(err));

    const emailFromCookies = cookie.get("email");
    const usernameFromCookies = cookie.get("username");
    setProfileInfo((prev) => {
      return { ...prev, email: emailFromCookies, username: usernameFromCookies };
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, for example, send it to a server.
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ profileInfo }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Process the response from the server if needed
        console.log("Server response:", data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <h1>UserComplete</h1>
      <form onSubmit={handleSubmit}>
        <RadioGroup onChange={(e) => handleChange({ target: { name: "avatar", value: e } })}>
          <Stack direction="row">
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f1">First</Radio>
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f2">Second</Radio>
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f3">Third</Radio>
          </Stack>
        </RadioGroup>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input type="text" name="username" value={profileInfo.username} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={profileInfo.email} disabled />
        </FormControl>
        <Select placeholder="Select option" name="region_id" onChange={handleChange}>
          {regions?.map((region, index) => (
            <option key={index} value={region._id}>
              {region.name}
            </option>
          ))}
        </Select>
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ProfileComplete;
