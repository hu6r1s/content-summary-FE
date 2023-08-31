import React, { useState } from 'react';
import { BubbleWrap, ProfileWrap, ProfileImg, ProfileName, ContentWrap, ContentTitle } from "@styles/Main";

const Bubble = () => {
  const [tab, setTab] = useState<boolean>(true);

  return (
    <BubbleWrap>
      <ProfileWrap>
        <ProfileImg src="asd" alt="이미지1" />
        <ProfileName>홍길동</ProfileName>
      </ProfileWrap>
      <ContentWrap>
        <div style={{ display: "flex" }}>
          <ContentTitle>요약본</ContentTitle>
          <ContentTitle>원본</ContentTitle>
        </div>
      </ContentWrap>
    </BubbleWrap>
  );
};

export default Bubble;