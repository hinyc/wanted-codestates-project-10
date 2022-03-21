import React from 'react';
import styled from 'styled-components';
import { limit } from './SearchInput';

export default function Content() {
  return (
    <Wrapper>
      <p>
        국대 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto 20px;
  font-size: 2.125rem;
  p {
    text-align: center;
    font-weight: 700;
    letter-spacing: -0.018em;
    line-height: 1.6;
    @media ${limit} {
      font-size: 1.25rem;
    }
  }
`;
