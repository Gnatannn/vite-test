import { useState, useEffect } from "react";
import users from "../../data/users.json";
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
  Background,
} from "./UserCard.styled";

import goitlogo from "../../images/goitlogo.svg";
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
      setFollowers(followers + 1);
    } else {
      setFollowers(followers - 1);
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
            <Logo src={goitlogo} alt="Logo GOIT"></Logo>
          </LogoWrap>
          <Background></Background>
        </HeadWrap>
        <Avatar src={avatar} alt="User avatar"></Avatar>
        <Text>777 tweets</Text>
        <Text>{normilizedFollowers} Followers</Text>
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
