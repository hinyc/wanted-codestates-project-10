<br />

# 🌈 &nbsp; wanted-codestates-project-10

## 📎 &nbsp; [배포링크] https://friendly-swartz-e77c8e.netlify.app

<div align="center">
<img width="600px" src=""/>
</div>

<br />

 
## 😎 &nbsp; 기능 구현 목록
### 1. 질환명을 입력하면 자동완성 기능으로 검색어 추천기능.
> Lodash 라이브러리의 debounce 함수를 사용해, 검색어 입력시 API 요청을 0.5초에 한번만 하도록 구현.
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
> 검색 이벤트 실행시 한국임상정보사이트에 검색결과가 새창에 나오도록 구현.
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
### 3. 자동 완성 리스트를 키보드 위,아래 화살표를 이용하여 이동가능 및 엔터입력으로 바로 검색 기능 구현.
> 
- 자동 완성리스트에 마우스를 올리거나 위아래 화살표를 했을때 선택된 항목을 알아볼수 있도록 포커스 기능구현.
- 
- 
- 브라우저의 가로픽셀 `1040px`을 기준으로 반응형 디자인 구현


### 어려웠던점

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
