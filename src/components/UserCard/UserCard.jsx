import { useState, useEffect } from 'react';
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
} from './UserCard.styled';

import goitlogo from '../../images/goitlogo.svg';
import mainimg from '../../images/mainimg.svg';
import avatar from '../../images/hansel.png';

export const UserCard = () => {
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });

  // const [isFollowing, setIsfollowing] = useState(false);
  const [isFollowing, setIsfollowing] = useState(() => {
    return JSON.parse(localStorage.getItem('isFollowing')) || false;
  });

  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [isFollowing]);

  const handleClick = () => {
    setIsfollowing(!isFollowing);
  };

  return (
    <Container>
      <Box>
        <HeadWrap>
          <LogoWrap>
            <Logo src={goitlogo}></Logo>
          </LogoWrap>
          <MainImg src={mainimg}></MainImg>
        </HeadWrap>
        {/* <AvatarWrap> */}
        <Avatar src={avatar}></Avatar>
        {/* </AvatarWrap> */}
        <Text>777 tweets</Text>
        {/* <Text>100,500 Followers</Text> */}
        {!isFollowing ? (
          <Text>100,500 Followers</Text>
        ) : (
          <Text>100,501 Followers</Text>
        )}
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
