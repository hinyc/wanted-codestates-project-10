<br />

# ✨ &nbsp; wanted-codestates-project-10

## 📎 &nbsp; [배포링크] https://friendly-swartz-e77c8e.netlify.app

<div align="center">
<img width="600px" src=""/>
</div>

<br />

## 🤩 &nbsp; 기능 구현 목록
### 1. 질환명을 입력하면 자동완성 기능으로 검색어 추천기능.
> `Lodash` 라이브러리의 `debounce` 함수를 사용해, 검색어 입력시 API 요청을 0.5초에 한번만 하도록 구현.<br/>
> 애초에 자동완성을 위해 API요청이 필요한대 `onChange` 이벤트가 자음, 모음 하나하나 입력시마다 실행되면 불필요한 API 요청이 되기때문에 요청 횟수를 제안함. <br/>
> 인풋창에 값이 없을 경우 자동완성 리스트 모달이 닫히도록 구현.
```jsx
const inputHandler = _.debounce(() => {
    const inputValue = inputRef.current.value;
    if (inputValue.length > 0) {
      dispatch(showTrue());
      dispatch(loadingTrue());
      axios
        .get(
          `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputValue}`,
        )
        .then((res) => {
          dispatch(setSearchList(res.data));
          dispatch(loadingFalse());
          dispatch(resetSelectList());
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, 500);
  ```

### 2. 검색버튼을 클릭하거나 엔터를처서 검색가능.
> 검색 버튼을 눌럿을때 발생하는 이벤트 함수를 검색버튼을 눌럿을경우와, 자동완성 리스트를 눌렀을 경우 실행되로록 구현.<br/>
> 자동완성결과를 선택한다는건 선택한 결과에 대한 검색을 하고자 함이기때문에 유저경험이 향상 될 수 있도록 바로 검색 결과가 나오도록 함.<br/>
> 검색 이벤트 실행시 한국임상정보사이트의 검색 결과가 새창에 나오도록 구현.
``` jsx
const buttonHandler = (e) => {
    const inputValue = inputRef.current.value;
    if (e.type === 'click' || e.key === 'Enter') {
      window.open(
        `https://clinicaltrialskorea.com/studies?condition=${inputValue}`,
      );
    }
  };
 ```
### 3. 자동 완성 리스트를 키보드 위,아래 화살표를 이용하여 이동가능 및 엔터입력으로 바로 검색 이벤트실행.
> 윈도우 이벤트 리스너를 사용하여 키도드 화살표 이벤트 발생시 리스트 인덱스 변경되도록 구현.<br/>
> 자동 완성리스트에 마우스를 올리거나 위아래 화살표를 했을때 선택된 항목을 알아볼수 있도록 포커스 기능구현.
```jsx
//main.js 일부
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
  
//autoCompleteList.js 일부
 <ContentWrapper>
  {topSevenList.map((el, idx) => (
    <Content
      key={el.id}
      onClick={() => clickHandler(el.name)}
      onMouseEnter={() => mouseEnterHandler(idx)}
      onMouseLeave={() => dispatch(resetSelectList())}
      idx={idx} //인덱스 값과
      selectList={selectList}//선택된 인덱스 값을 비교한다.
    >
    <CgSearch className="icon" />
      {el.name}
    </Content>
  ))}
</ContentWrapper>

//css
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
  ${({ idx, selectList }) => { //프롭스로 전달된 idx와, selectList를 비교하여 배경색을 변경하여 포커스 효과를 준다.
    if (idx === selectList) {
      return css`
        background-color: #efefef;
      `;
    }
  }}
`;

```

 
### 4. 브라우저의 가로픽셀 `1040px`을 기준으로 반응형 디자인 구현.
>미디어쿼리를 이용하여 브라우저 사이즈별로 css 속성을 달리하여 반응형을 구현.
```jsx

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

```


## 🤔 어려웠던점
### 화살표를 이용하여 자동완성 목록 선택하는 부분
> 먼저 화살표를 눌렀을 때 이벤트를 누가 받아야하는지에 대해서부터 고민을 시작. <br/>
> ➪ 검색을하면서 루트객체인 `window`가 이벤트를 받도록 하면된다는 실마리를 얻음.
> ➪ `window` 객체에 `addEventListener`를 사용하여 키보드 화살표 이벤트를 받도록 구현.<br/>
> ➪ 또 다른 문제로 키보트 화살표를 눌렀을때 이벤트가 여러번 실행되는 문제가 발생.<br/>
> ➪ 이부분은 useEffect를 이용하여 리액트랜더링 직전 1회만 실행되도록 하여 해결.


### ️⚙️ &nbsp; 기술 스텍 

<p>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>  &nbsp;  <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
  </a> &nbsp;  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> &nbsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
  </a> &nbsp;  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>  &nbsp; 
  </p>


<br />
