import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost"

const FeedPosts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost username="mariasilva" img='/img1.png' avatar='/img1.png' />
      <FeedPost username="joedown" img='/img2.png' avatar='/img2.png' />
      <FeedPost username="annabucket" img='/img3.png' avatar='/img3.png' />
      <FeedPost username="joshtamagosh" img='/img4.png' avatar='/img4.png' />

    </Container>
  )
}

export default FeedPosts