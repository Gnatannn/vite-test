import styled from 'styled-components';

export const Container = styled.div`
  margin: auto;
  /* background: red; */
  padding: 50px;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  text-align: center;
`;

export const HeadWrap = styled.div`
  border-bottom: 8px solid #ebd8ff;
  height: 214px;
  margin-bottom: 62px;
`;

export const Logo = styled.img``;

export const LogoWrap = styled.div`
  text-align: left;
  margin: 20px 0 0 20px;
`;

export const MainImg = styled.img`
  width: 308px;
  height: 168px;
`;

export const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  /* border-radius: 13.1749px; */
  border: 8px solid #ebd8ff;
  /* box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff; */
  position: absolute;
  top: 245px;
  left: 300px;
  z-index: 99;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const AvatarWrap = styled.div``;

export const Text = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const FollowButton = styled.button`
  /* display: flex; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;

export const BtnText = styled.p``;

export const FollowButtonActive = styled.button`
  /* display: flex; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  background: #5cd3a8;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
`;
