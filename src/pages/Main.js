import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AutoCompleteList from '../components/AutoCompleteList';
import Content from '../components/Content';
import SearchInput from '../components/SearchInput';

export default function Main() {
  const showAutoComplete = useSelector(
    (state) => state.searchList.showAutoComplete,
  );
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
