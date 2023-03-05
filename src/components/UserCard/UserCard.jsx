import { useState, useEffect } from "react";
import {
  Container,
  Box,
  HeadWrap,
  LogoWrap,
  Logo,
  MainImg,
  Avatar,
  AvatarWrap,
  Text,
  BtnText,
  FollowButton,
  FollowButtonActive,
} from "./UserCard.styled";

import goitlogo from "../../images/goitlogo.svg";
import mainimg from "../../images/mainimg.svg";
import avatar from "../../images/hansel.png";

export const UserCard = () => {
  const [followers, setFollowers] = useState(() => {
    return JSON.parse(localStorage.getItem("followers")) || 100500;
  });

  const [isFollowing, setIsfollowing] = useState(() => {
    return JSON.parse(localStorage.getItem("isFollowing")) || false;
  });

  useEffect(() => {
    localStorage.setItem("isFollowing", JSON.stringify(isFollowing));
    localStorage.setItem("followers", JSON.stringify(followers));
  }, [isFollowing, followers]);

  const handleClick = () => {
    setIsfollowing(!isFollowing);
    if (!isFollowing) {
      setFollowers(100501);
    } else {
      setFollowers(100500);
    }
  };

  const normilizedFollowers = followers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Container>
      <Box>
        <HeadWrap>
          <LogoWrap>
            <Logo src={goitlogo}></Logo>
          </LogoWrap>
          <MainImg src={mainimg}></MainImg>
        </HeadWrap>
        <Avatar src={avatar}></Avatar>
        <Text>777 tweets</Text>
        <Text>{normilizedFollowers}</Text>
        {!isFollowing ? (
          <FollowButton onClick={handleClick} type="button">
            Follow
          </FollowButton>
        ) : (
          <FollowButtonActive onClick={handleClick} type="button">
            Following
          </FollowButtonActive>
        )}
      </Box>
    </Container>
  );
};
