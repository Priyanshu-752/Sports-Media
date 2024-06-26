import { Box, Link, Tooltip, Icon } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
	return (
		<Tooltip
			hasArrow
			label={"Home"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				bg={{ base: "black", md: "inherit" }}
				display={"flex"}
				to={"/"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={5}
				w={{ base: 20, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<Icon as={AiFillHome} boxSize={6} />
				<Box display={{ base: "none", md: "block" }}>Home</Box>
			</Link>
		</Tooltip>
	);
};

export default Home;
