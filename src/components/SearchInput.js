import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetSearchValue,
  setSearchList,
  setSearchValue,
} from '../modules/searchList';
import _ from 'lodash';
export default function SearchInput() {
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const searchValue = useSelector((state) => state.searchList.searchValue);
  // const setInputValue = (e) => {
  //   dispatch(setSearchValue(e.target.value));
  // };
  const inputHandler = _.throttle(() => {
    const inputValue = inputRef.current.value;
    axios
      .get(
        `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputValue}`,
      )
      .then((res) => {
        dispatch(setSearchList(res.data));
        console.log('a');
      })
      .catch((err) => console.error(err));
  }, 500);

  const focusHandler = () => {
    dispatch(resetSearchValue());
  };
  const buttonHandler = (e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      const inputValue = inputRef.current.value;
      window.open(
        `https://clinicaltrialskorea.com/studies?condition=${inputValue}`,
      );
    }
  };
  return (
    <Wrapper>
      <InputContainer>
        <CgSearch className="icon" />
        <Input
          ref={inputRef}
          placeholder="질환명을 입력해 주세요"
          onChange={inputHandler}
          onFocus={focusHandler}
          onKeyDown={buttonHandler}
          value={searchValue ? searchValue : null}
        />
      </InputContainer>
      <Button onClick={buttonHandler}>검색</Button>
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
  width: 100%;
  font-size: 1.125rem;
  padding: 0 12px;
  outline: none;
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
