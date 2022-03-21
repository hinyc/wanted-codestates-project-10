import React from 'react';
import styled from 'styled-components';
import AutoCompleteList from '../components/AutoCompleteList';
import Content from '../components/Content';
import SearchInput from '../components/SearchInput';

export default function Main() {
  return (
    <Container>
      <Content />
      <SearchInput />
      <AutoCompleteList />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 136px;
  background-color: #cbe9ff;
`;
