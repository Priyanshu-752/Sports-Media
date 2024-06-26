import { Avatar, Box, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const ProfileLink = () => {
	return (
		<Tooltip
			hasArrow
			label={"Profile"}
			placement='right'
			// ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
			>
			<Link
			bg={{base:"black", md:"inherit"}}
				display={"flex"}
				to="/profile"
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={4}
				w={{ base: 20, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<Avatar size={"sm"} />
				<Box display={{ base: "none", md: "block" }}>Profile</Box>
			</Link>
		</Tooltip>
	);
};

export default ProfileLink;
