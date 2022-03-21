import React from 'react';
import styled from 'styled-components';
import { CgSearch } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetSelectList,
  setSearchValue,
  setSelectList,
} from '../modules/searchList';
import { css } from 'styled-components';
import { limit } from './SearchInput';

export default function AutoCompleteList() {
  const autoCompleteArr = useSelector((state) => state.searchList.data);
  const topSevenList = autoCompleteArr.slice(0, 7);
  const isLoading = useSelector((state) => state.searchList.isLoading);
  const selectList = useSelector((state) => state.searchList.selectList);
  const dispatch = useDispatch();

  const clickHandler = (value) => {
    dispatch(setSearchValue(value));
    window.open(`https://clinicaltrialskorea.com/studies?condition=${value}`);
  };

  const mouseEnterHandler = (idx) => {
    dispatch(setSelectList(idx));
  };
  return (
    <Container>
      <SubContainer>
        {topSevenList.length > 0 ? (
          <>
            <SubContent>추천 검색어</SubContent>
            <ContentWrapper>
              {topSevenList.map((el, idx) => (
                <Content
                  key={el.id}
                  onClick={() => clickHandler(el.name)}
                  onMouseEnter={() => mouseEnterHandler(idx)}
                  onMouseLeave={() => dispatch(resetSelectList())}
                  idx={idx}
                  selectList={selectList}
                >
                  <CgSearch className="icon" />
                  {el.name}
                </Content>
              ))}
            </ContentWrapper>
          </>
        ) : isLoading ? (
          <SubContent>검색중...</SubContent>
        ) : (
          <SubContent> 검색어 없음</SubContent>
        )}
      </SubContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 660px;
  margin: auto;
  @media ${limit} {
    width: 100%;
    padding: 0 20px;
  }
`;
const SubContainer = styled.div`
  padding: 24px 0 16px 0;
  background-color: #fff;
  border-radius: 20px;
  margin: 8px auto 0;
  font-size: 1rem;
  width: 100%;
`;

const SubContent = styled.div`
  font-size: 0.8rem;
  color: #a1a6ab;
  padding: 0 24px;
  margin-bottom: 8px;
`;
const ContentWrapper = styled.ul``;
const Content = styled.li`
  height: 2.5rem;
  line-height: 2.5rem;
  transition: 0.3s;
  padding: 0 24px;
  .icon {
    margin-right: 8px;
  }
  :hover {
    cursor: pointer;
  }
  ${({ idx, selectList }) => {
    if (idx === selectList) {
      return css`
        background-color: #efefef;
      `;
    }
  }}
`;
