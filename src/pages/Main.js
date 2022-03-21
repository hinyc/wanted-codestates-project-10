import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AutoCompleteList from '../components/AutoCompleteList';
import Content from '../components/Content';
import SearchInput from '../components/SearchInput';
import { downSelectList, upSelectList } from '../modules/searchList';

export default function Main() {
  const dispatch = useDispatch();
  const showAutoComplete = useSelector(
    (state) => state.searchList.showAutoComplete,
  );
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowDown':
          return dispatch(downSelectList());
        case 'ArrowUp':
          return dispatch(upSelectList());
        default:
          return;
      }
    });
  }, [dispatch]);

  return (
    <Container>
      <Content />
      <SearchInput />
      {showAutoComplete && <AutoCompleteList />}
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 136px;
  background-color: #cbe9ff;
`;
