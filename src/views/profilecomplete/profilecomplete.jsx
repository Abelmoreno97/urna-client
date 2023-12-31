import { useEffect, useState, useRef } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { cookie } from "../../utils";
// import { Redirect } from "react-router-dom";
import User from "../../repositories/User";
import Region from "../../repositories/Region";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../layout/PageLayout/PageLayout";

const ProfileComplete = () => {
  const [status, setStatus] = useState("");
  const [profileInfo, setProfileInfo] = useState({
    username: "",
    email: "",
    avatar: "",
    region_id: "",
  });
  const [regions, setRegions] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    Region.getAll()
      .then((res) => setRegions(res.data))
      .catch((err) => console.log(err));

    const emailFromCookies = cookie.get("email");
    const usernameFromCookies = cookie.get("username");
    const avatarFromCookies = cookie.get("avatar");
    setProfileInfo((prev) => {
      return {
        ...prev,
        email: emailFromCookies,
        username: usernameFromCookies,
        avatar: avatarFromCookies,
      };
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileInfo({ ...profileInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    User.postUser(profileInfo)
      .then((res) => {
        setStatus("");
        navigate("/votations");
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  };
  if (status == "loading") {
    return <h2>Loading....</h2>;
  }
  return (
    <PageLayout>
      <VStack>
      <h1>Bienvenido a Voto Libre App.</h1>
      <h2>Complete tu perfil con los siguientes datos para empezar</h2>
      <form onSubmit={handleSubmit}>
        {/* <RadioGroup onChange={(e) => handleChange({ target: { name: "avatar", value: e } })}>
          <Stack direction="row">
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f1">First</Radio>
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f2">Second</Radio>
            <Radio value="349e8669-c6da-4b28-9df3-ea51afaf05f3">Third</Radio>
          </Stack>
        </RadioGroup> */}
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={profileInfo.username}
            onChange={handleChange}
          />
        </FormControl>
        <br></br>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={profileInfo.email} disabled />
        </FormControl>
        <br></br>
        <FormLabel>Choose a region</FormLabel>
        <Select
          placeholder="Select option"
          name="region_id"
          onChange={handleChange}
          style={{ color: "black", backgroundColor: "white" }}
        >
          {regions?.map((region, index) => (
            <option key={index} value={region._id}>
              {region.name}
            </option>
          ))}
        </Select>
        <>
          <Button
            isDisabled={
              status == "loading" ||
              profileInfo.username == "" ||
              profileInfo.email == "" ||
              profileInfo.region_id == ""
            }
            mt={4}
            colorScheme="teal"
            onClick={onOpen}
          >
            Submit
          </Button>
          <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent bg={"gray.800"}>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Confirmar envio
                </AlertDialogHeader>

                <AlertDialogBody>esta seguro que desea enviar?</AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={handleSubmit} ml={3}>
                    Confirm
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </>
      </form>
      </VStack>
    </PageLayout>
  );
};

export default ProfileComplete;
