import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
  loadingFalse,
  loadingTrue,
  resetSearchValue,
  resetSelectList,
  setSearchList,
  showFalse,
  showTrue,
} from '../modules/searchList';

export default function SearchInput() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const searchValue = useSelector((state) => state.searchList.searchValue);

  const inputHandler = _.debounce(() => {
    const inputValue = inputRef.current.value;
    getCookie(inputValue);
    if (inputValue.length > 0) {
      dispatch(showTrue());
      dispatch(loadingTrue());
      axios
        .get(
          `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputValue}`,
        )
        .then((res) => {
          dispatch(setSearchList(res.data));
          setCookie(inputValue, res.data, 7);
          dispatch(loadingFalse());
          dispatch(resetSelectList());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, 500);

  const setCookie = (key, value, expiredDays) => {
    let today = new Date();
    today.setDate(today.getDate() + expiredDays);
    document.cookie =
      key +
      '=' +
      JSON.stringify(value) +
      '; path=/; expires=' +
      today.toGMTString() +
      ';';
  };
  const getCookie = (key) => {
    key = new RegExp(key + '=([^;]*)'); // 쿠키들을 세미콘론으로 구분하는 정규표현식 정의
    console.log(document.cookie);

    const cookies = document.cookie.split(`; `).map((el) => el.split('='));
    let getItem = [];
    for (let arr of cookies) {
      if (arr[0] === key) {
        getItem = arr[1];
      }
    }

    // console.log(key.test(document.cookie) ? document.cookie(key) : '');
    return key.test(document.cookie) ? cookies : ''; // 인자로 받은 키에 해당하는 키가 있으면 값을 반환
  };
  const focusHandler = () => {
    dispatch(resetSearchValue());
  };

  const buttonHandler = (e) => {
    const inputValue = inputRef.current.value;
    if (e.type === 'click' || e.key === 'Enter') {
      window.open(
        `https://clinicaltrialskorea.com/studies?condition=${inputValue}`,
      );
    }
  };

  const lengthCheckHandler = (e) => {
    const inputValue = inputRef.current.value;
    if (e.key === 'Backspace') {
      if (!inputValue.length) {
        dispatch(showFalse());
      }
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
          onKeyUp={lengthCheckHandler}
          value={searchValue}
        />
      </InputContainer>
      <Button onClick={buttonHandler}>검색</Button>
    </Wrapper>
  );
}

export const limit = `(max-width:1040px)`;

const Wrapper = styled.div`
  width: 660px;
  height: 64.8px;
  display: flex;
  margin: auto;
  padding: 0px;
  @media ${limit} {
    width: 100%;
    padding: 0 20px;
    height: 46.4px;
  }
`;

const InputContainer = styled.div`
  width: 85.38%;
  height: 100%;
  background-color: #fff;
  display: flex;
  border-radius: 42px 0 0 42px;
  align-items: center;
  padding: 20px 24px;
  position: relative;
  .icon {
    font-size: 1.125rem;
  }
  @media ${limit} {
    width: 100%;
    padding: 12px 20px;
    border-radius: 42px;
    .icon {
      position: absolute;
      right: 20px;
    }
  }
`;

const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0 12px;
  font-size: 1.125rem;
  ::placeholder {
    font-size: 1.125rem;
    font-size: 100%;
    color: #abb3bb;
  }
  @media ${limit} {
    font-size: 0.875rem;
    padding: 0;
  }
`;

const Button = styled.button`
  width: 14.62%;
  height: 100%;
  font-size: 1.125rem;
  border-radius: 0 42px 42px 0;
  background-color: #027be8;
  color: #fff;
  transition: 0.3s;
  :hover {
    opacity: 0.65;
  }
  :active {
    opacity: 0.95;
  }
  @media ${limit} {
    display: none;
  }
`;
