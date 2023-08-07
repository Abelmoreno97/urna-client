import { useRef } from "react";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import User from "../../repositories/User";

function AlertDialogExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const navigate = useNavigate();
  const logout = () => {
    User.logout()
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Logout
      </Button>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent bg={"gray.800"}>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Log Out
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={logout} ml={3}>
                Confirm
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AlertDialogExample;
