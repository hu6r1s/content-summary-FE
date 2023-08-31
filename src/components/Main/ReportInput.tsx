import React from 'react';
import { ReportWrap, TitleWrap, Title, SubTitle, TextArea, Button } from "@styles/Main";

const ReportInput = () => {
  return (
    <ReportWrap>
      <TitleWrap>
        <Title>카카오톡 회의록 입력</Title>
        <SubTitle>
          '카카오톡 채팅방 &gt; 메뉴 &gt; 채팅방 설정 &gt; 저장공간 관리 &gt; 대화 내용 저장' 기능으로 대화 내용을 텍스트 파일로 저장하여 내용을 아래에 붙여넣어 주세요.<br />
          * 현재는 카카오톡 윈도우PC 버전만 지원합니다.
        </SubTitle>
      </TitleWrap>
      <div>
        <TextArea placeholder="이곳에 붙여넣어 주세요." />
        <Button>요약하기</Button>
      </div>
    </ReportWrap>
  );
};

export default ReportInput;