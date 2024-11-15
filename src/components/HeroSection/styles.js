// ProfileSection.styles.js
import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: #fff;
  background-color: transparent;
  padding: 0 16px;
  position: relative;

  border-radius: 0 0 60px 60px;
  display: flex;


  height: auto;
  max-height: 690px;

  @media (min-width: 768px) {
    max-height: 80vh;
  }
`;

export const Content = styled.div`
  max-width: 988px;

  margin: auto;
  justify-content: center;
  align-items: normal;
  padding: 50px 0;
`;
export const Section = styled.div`
  padding: 15px 0;
`;
export const SectionDev = styled.div`
  flex: 1;
  text-align: left;
`;
export const SectionUX = styled.div`
  flex: 1;
  text-align: right;
`;

export const Title = styled.h1`
  font-size: clamp(48px, 5vw + 1rem, 128px);
  font-weight: 600;
  margin: 0;
  background: linear-gradient(268deg, #24A1CA 2.38%, #8764D4 98.75%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;

export const Subtitle = styled.p`
  font-size: 1.2wv;
  line-height: normal;
  font-weight: 800;
  margin: 10px 0;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  color: #888;
  font-size: 1em;
`;

export const ProfileImage = styled.img`
  max-width: 240px;
  height: auto;
  border-radius: 10%;
  margin: 0 auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 280px;
    height: auto;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  .icon-gh {
    font-size: 2em;

    border-radius: 20px;
    color: #fff;
    cursor: pointer;
  }
  .icon {
    font-size: 2em;
    padding: 7px 0;
    border-radius: 16px;
    color: #fff;
    cursor: pointer;
  }
`;

export const Description = styled.p`
  margin-top: 20px;
  color: #999;
  max-width: 400px;
  font-size: 0.9em;
  line-height: 1.4;
`;
