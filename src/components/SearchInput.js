import React from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
export default function SearchInput() {
  return (
    <Wrapper>
      <InputContainer>
        <CgSearch className="icon" />
        <Input placeholder="질환명을 입력해 주세요" />
      </InputContainer>
      <Button>검색</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 660px;
  height: 64.8px;
  margin: auto;
  display: flex;
`;

const InputContainer = styled.div`
  width: 85.38%;
  height: 100%;
  background-color: #fff;
  display: flex;
  border-radius: 42px 0 0 42px;
  align-items: center;
  padding: 20px 24px;
  .icon {
    font-size: 1.125rem;
  }
`;
const Input = styled.input`
  font-size: 1.125rem;
  padding-left: 12px;
  ::placeholder {
    font-size: 1.125rem;
    font-size: 100%;
    color: #abb3bb;
  }
`;

const Button = styled.button`
  width: 14.62%;
  height: 100%;
  font-size: 1.125rem;
  border-radius: 0 42px 42px 0;
  background-color: #027be8;
  color: #fff;
`;
