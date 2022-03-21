import React from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../modules/searchList';

export default function AutoCompleteList() {
  const autoCompleteArr = useSelector((state) => state.searchList.data);
  const topSevenList = autoCompleteArr.slice(0, 7);
  const dispatch = useDispatch();
  const clickHandler = (value) => {
    dispatch(setSearchValue(value));
    window.open(`https://clinicaltrialskorea.com/studies?condition=${value}`);
  };
  return (
    <Container>
      {topSevenList.length > 0 ? (
        <>
          <SubContent>추천 검색어</SubContent>
          <ContentWrapper>
            {topSevenList.map((el) => (
              <Content key={el.id} onClick={() => clickHandler(el.name)}>
                <CgSearch className="icon" />
                {el.name}
              </Content>
            ))}
          </ContentWrapper>
        </>
      ) : (
        <SubContent>검색어 없음</SubContent>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 660px;
  margin: 8px auto 0;
  padding: 24px 24px 16px 24px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 1rem;
`;

const SubContent = styled.div`
  font-size: 0.8rem;
  color: #a1a6ab;
  margin-bottom: 8px;
`;
const ContentWrapper = styled.ul``;
const Content = styled.li`
  height: 2.5rem;
  line-height: 2.5rem;
  .icon {
    margin-right: 8px;
  }
  :hover {
    cursor: pointer;
  }
`;
