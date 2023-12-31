import {
  Container,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Heading,
  Box,
  useDisclosure
} from "@chakra-ui/react";
import ModalUser from "../../common/modal/ModalUser";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

function UsersTable({ data }) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [toggleModal,setToggleModal] = useState(false);
  const [userId,setUserId] = useState(null);
  const { setSendNewRequest } = useContext(AuthContext);

  const handleActionUser = (toggleAction,id) => {
    setToggleModal(toggleAction)
    id && setUserId(id)
    onOpen()
  }

  const handleDeleteUser = async(userId) => {
    try {
      await axios.delete
      (`${import.meta.env.VITE_SERVER_URL}/users/delete-user-for-managers/${userId}`);
      setSendNewRequest(prev => !prev)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Container maxW="container.xl">
    <Heading>
      Users
    </Heading>
    <Box textAlign="right">
    <Button
    onClick={() => handleActionUser(true)}
    >Create User</Button>
    </Box>
    <Table variant="striped">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((user) => (
          <Tr key={user._id}>
            <Td>{user.user_name}</Td>
            <Td>{user.user_email}</Td>
            <Td maxW={150}>{user.user_phone}</Td>
            <Td>
              <Button
                mx={2}
                colorScheme="teal"
                onClick={() => handleActionUser(false,user._id) }
              >
                Edit
              </Button>
              <Button
                mx={2}
                colorScheme="red"
                onClick={() => handleDeleteUser(user._id)}
              >
                Delete
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <ModalUser
    isOpen={isOpen}
    onClose={onClose}
    toggleModal={toggleModal}
    userId={userId}
    />
  </Container>
  )
}

export default UsersTable