import { styled } from "styled-components";

interface NavMenuProps {
  active: boolean;
}

export const MainWrap = styled.div`
display: flex;
margin-top: 5px;
`;

export const NavWrap = styled.div`
width: 330px;
height: 85px;
margin-left: 220px;
margin-right: 10px;
`;

export const NavMenu = styled.div<NavMenuProps>`
width: 300px;
height: 50px;
border-radius: 10px;
font-size: 13px;
font-weight: 500;
line-height: 15.93px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 5px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#FFB049' : 'transparent')};
  color: ${props => (props.active ? '#fff' : 'inherit')};
  
  &:hover {
    background-color: ${props => (props.active ? '#e39939' : "#F6F6F6")};
  }
  `;

  export const ReportWrap = styled.div`
    border-left: 1px #f6f6f6 solid;
    padding-left: 15px;
  `;
  
  export const TitleWrap = styled.div`
  width: 750px;
  height: 56px;
  margin-bottom: 15px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 20.27px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 11px;
  line-height: 15.93px;
  color: #969696;
`;

export const TextArea = styled.textarea`
  width: 710px !important;
  height: 200px;
  border-radius: 10px;
  border: 1px solid #EFEFEF;;
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  padding: 10px;
  text-align: left;
  resize: none;
  box-sizing: border-box;

  &::placeholder {
    color: #A5A5A5;
  }
  &:focus {
  animation-timing-function: ease-out;
  animation-duration: 100ms;
  }
`;

export const Button = styled.button`
  width: 710px;
  height: 40px;
  border-radius: 10px;
  background-color: #FFB049;
  font-weight: 500;
  font-size: 12px;
  line-height: 17.38px;
  color: #fff;
  border: 0;

  &:hover {
    background-color: #e39939;
  }
`;

export const BubbleWrap = styled.div`
  max-width: 710px;
`;

export const ProfileWrap = styled.div`
  height: 25px;
`;

export const ProfileImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const ProfileName = styled.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
`;

export const ContentWrap = styled.div`
  // width: 720px;
  // height: 81px;
  border-radius: 10px;
  background-color: #F6F6F6;
  padding: 10px;
`;

export const ContentTitle = styled.div`
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 0em;
  text-align: left;
  padding-right: 5px;
`;
