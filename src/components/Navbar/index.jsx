/* eslint-disable no-unused-vars */
import {
  Box,
  Flex,
  Stack,
  Text,
  Icon,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsFillTelephoneFill, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { EmailIcon } from "@chakra-ui/icons";
import Logo from "../../assets/images/logo.svg";

function Navbar() {
  const align = {
    align: "center",
    gap: 2,
  };
  return (
    <Box mx="10%">
      <Flex h="60px" justify="space-between">
        <Stack direction="row" gap={5}>
          <Flex {...align}>
            <Icon as={BsFillTelephoneFill} />
            <Text>+49 172 2762328</Text>
          </Flex>
          <Flex {...align}>
            <EmailIcon />
            <Box as="a" href="mailto:info@arturundhelden.de">
              Email: info@arturundhelden.de
            </Box>
          </Flex>
        </Stack>
        <Stack direction="row" {...align}>
          <Icon as={BsFacebook} />
          <Icon as={BsInstagram} />
          <Icon as={AiFillLinkedin} />
          <Icon as={AiOutlineTwitter} />
        </Stack>
      </Flex>
      <Divider />
      <Flex justify="space-between" align="center">
        <Box>
          <img src={Logo} alt="" />
        </Box>
        <Stack direction="row" align="center" gap={5}>
          <Text>Startseite</Text>
          <Text>Über Uns</Text>
          <Text>Leistungen</Text>
          <Text>Kontakt</Text>
          <Button>Angebot anfordern</Button>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Navbar;
