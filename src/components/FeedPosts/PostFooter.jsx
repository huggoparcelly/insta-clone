import { Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";

const PostFooter = () => {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if(liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return <>
    <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={"auto"}>

      <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
        {!liked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
      </Box>
      <Box cursor={"pointer"} fontSize={18}>
        <CommentLogo />
      </Box>
    </Flex>

    <Text fontWeight={6000} fontSize={"sm"}>
      {likes} likes
    </Text>
    <Text fontWeight={700} fontSize={"sm"}>
      hparcelly {" "}
      <Text as='span' fontWeight={400}>
        Feeling good today! 😊 👍
      </Text>
    </Text>
    <Text fontSize={"sm"} color={"gray"}>
      View all 1,000 comments
    </Text>
  </>
}

export default PostFooter