<br />

# β¨ &nbsp; wanted-codestates-project-10

## π &nbsp; [λ°°ν¬λ§ν¬] https://friendly-swartz-e77c8e.netlify.app

## κΈ°λ₯ μμ°
<div align="center">
<img width="600px" src="https://user-images.githubusercontent.com/87487161/159296437-44a9f2c4-774a-4331-967d-48ca102089db.gif"/>
</div>

## λ°μν μμ°
<div align="center">
<img width="600px" src="https://user-images.githubusercontent.com/87487161/159296459-ceb09a6f-28a4-42f9-99db-8d16991d9cd9.gif"/>
</div>

<br />

## μ¬μ©λ°©λ²
1. κ²μμ°½μ νμΈνκ³ μΆμ μμμ€ν λ³λͺμ μλ ΅νλ€.
2. κ²μνλλμ€ μλμμ±κΈ°λ₯μΌλ‘ μΆμ² κ²μμ΄κ° λμ€κ²λλ©΄ λ§μΌμλ‘ μ ννκ±°λ ν€λ³΄λλ‘ μ νν  μμλ€.
3. μλμμ±μ μ ννμ§ μκ³  κ²μμλλ¬λ ν΄λΉ κ²μκ²°κ³Όλ₯Ό νμΈν  μ μλ€.
4. μλμμ± κ²°κ³Όλ₯Ό μ ννλ©΄ μ νκ³Όλμμ ν΄λΉ κ²μκ²°κ³Όλ₯Ό μμ°½μΌλ‘ νμΈ ν  μ μλ€.

## π€© &nbsp; κΈ°λ₯ κ΅¬ν λͺ©λ‘
### 1. μ§νλͺμ μλ ₯νλ©΄ μλμμ± κΈ°λ₯μΌλ‘ κ²μμ΄ μΆμ²κΈ°λ₯.
> `Lodash` λΌμ΄λΈλ¬λ¦¬μ `debounce` ν¨μλ₯Ό μ¬μ©ν΄, κ²μμ΄ μλ ₯μ API μμ²­μ 0.5μ΄μ νλ²λ§ νλλ‘ κ΅¬ν.<br/>
> μ μ΄μ μλμμ±μ μν΄ APIμμ²­μ΄ νμνλ `onChange` μ΄λ²€νΈκ° μμ, λͺ¨μ νλνλ μλ ₯μλ§λ€ μ€νλλ©΄ λΆνμν API μμ²­μ΄ λκΈ°λλ¬Έμ μμ²­ νμλ₯Ό μ μν¨. <br/>
> μΈνμ°½μ κ°μ΄ μμ κ²½μ° μλμμ± λ¦¬μ€νΈ λͺ¨λ¬μ΄ λ«νλλ‘ κ΅¬ν.
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

### 2. κ²μλ²νΌμ ν΄λ¦­νκ±°λ μν°λ₯Όμ²μ κ²μκ°λ₯.
> κ²μ λ²νΌμ λλΏμλ λ°μνλ μ΄λ²€νΈ ν¨μλ₯Ό κ²μλ²νΌμ λλΏμκ²½μ°μ, μλμμ± λ¦¬μ€νΈλ₯Ό λλ μ κ²½μ° μ€νλλ‘λ‘ κ΅¬ν.<br/>
> μλμμ±κ²°κ³Όλ₯Ό μ ννλ€λκ±΄ μ νν κ²°κ³Όμ λν κ²μμ νκ³ μ ν¨μ΄κΈ°λλ¬Έμ μ μ κ²½νμ΄ ν₯μ λ  μ μλλ‘ λ°λ‘ κ²μ κ²°κ³Όκ° λμ€λλ‘ ν¨.<br/>
> κ²μ μ΄λ²€νΈ μ€νμ νκ΅­μμμ λ³΄μ¬μ΄νΈμ κ²μ κ²°κ³Όκ° μμ°½μ λμ€λλ‘ κ΅¬ν.
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
### 3. μλ μμ± λ¦¬μ€νΈλ₯Ό ν€λ³΄λ μ,μλ νμ΄νλ₯Ό μ΄μ©νμ¬ μ΄λκ°λ₯ λ° μν°μλ ₯μΌλ‘ λ°λ‘ κ²μ μ΄λ²€νΈμ€ν.
> μλμ° μ΄λ²€νΈ λ¦¬μ€λλ₯Ό μ¬μ©νμ¬ ν€λ³΄λ νμ΄ν μ΄λ²€νΈ λ°μμ μ μ­μνμΈ `selectList` μνκ° λ³κ²½λλλ‘ κ΅¬ν.<br/>
> μλ μμ±λ¦¬μ€νΈμ λ§μ°μ€λ₯Ό μ¬λ¦¬κ±°λ μμλ νμ΄νλ₯Ό νμλ μ νλ ν­λͺ©μ μμλ³Όμ μλλ‘ ν¬μ»€μ€ κΈ°λ₯κ΅¬ν.
> νμ΄νλ₯Ό μ΄μ©νμ¬ μ΄λμ λ¦¬μ€νΈ μ²«λ²μ§Έλ λ§μ§λ§ μ΄μμΌλ‘ μΈλ±μ€ κ°μ΄ λ³νμ§ μλλ‘ κ΅¬ν.
```jsx
//main.js μΌλΆ
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
  
//autoCompleteList.js μΌλΆ
 <ContentWrapper>
  {topSevenList.map((el, idx) => (
    <Content
      key={el.id}
      onClick={() => clickHandler(el.name)}
      onMouseEnter={() => mouseEnterHandler(idx)}
      onMouseLeave={() => dispatch(resetSelectList())}
      idx={idx} //μΈλ±μ€ κ°κ³Ό
      selectList={selectList}//μ νλ μΈλ±μ€ κ°μ λΉκ΅νλ€.
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
  ${({ idx, selectList }) => { //νλ‘­μ€λ‘ μ λ¬λ idxμ, selectListλ₯Ό λΉκ΅νμ¬ λ°°κ²½μμ λ³κ²½νμ¬ ν¬μ»€μ€ ν¨κ³Όλ₯Ό μ€λ€.
    if (idx === selectList) {
      return css`
        background-color: #efefef;
      `;
    }
  }}
`;

```

 
### 4. λΈλΌμ°μ μ κ°λ‘ν½μ `1040px`μ κΈ°μ€μΌλ‘ λ°μν λμμΈ κ΅¬ν.
>λ―Έλμ΄μΏΌλ¦¬λ₯Ό μ΄μ©νμ¬ λΈλΌμ°μ  μ¬μ΄μ¦λ³λ‘ css μμ±μ λ¬λ¦¬νμ¬ λ°μνμ κ΅¬ν.
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
5. API μμ²­μλ§λ€ ν΄λΉ κ²μμ΄μ κ²°κ³Όλ₯Ό μΏ ν€μ μ μ₯νμ¬ λμΌ κ²μμ μ¬μμ²­νλ μΌμ΄ μλλ‘ κ΅¬ν.
```jsx
const inputHandler = _.debounce(() => {
    const inputValue = inputRef.current.value;
    const getValue = getCookie(inputValue);

    if (getValue) {
      dispatch(showTrue());
      dispatch(loadingTrue());
      dispatch(setSearchList(getValue));
      dispatch(loadingFalse());
      dispatch(resetSelectList());
      return;
    }

    if (inputValue.length > 0) {
      dispatch(showTrue());
      dispatch(loadingTrue());
      axios
        .get(
          `https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=${inputValue}`,
        )
        .then((res) => {
          console.log('API μμ²­');
          dispatch(setSearchList(res.data));
          // 1μΌν μ­μ 
          setCookie(inputValue, res.data, 1);
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
    const cookies = document.cookie.split(`; `).map((el) => el.split('='));
    let getItem = [];

    for (let i = 0; i < cookies.length; i++) {
      if (cookies[i][0] === key) {
        getItem.push(cookies[i][1]);
        break;
      }
    }
    if (getItem.length > 0) {
      return JSON.parse(getItem[0]);
    }
  };
```

## π€ μ΄λ €μ λμ 
### νμ΄νλ₯Ό μ΄μ©νμ¬ μλμμ± λͺ©λ‘ μ ννλ λΆλΆ
> λ¨Όμ  νμ΄νλ₯Ό λλ μ λ μ΄λ²€νΈλ₯Ό λκ° λ°μμΌνλμ§μ λν΄μλΆν° κ³ λ―Όμ μμ. <br/>
> βͺ κ²μμνλ©΄μ λ£¨νΈκ°μ²΄μΈ `window`κ° μ΄λ²€νΈλ₯Ό λ°λλ‘ νλ©΄λλ€λ μ€λ§λ¦¬λ₯Ό μ»μ.
> βͺ `window` κ°μ²΄μ `addEventListener`λ₯Ό μ¬μ©νμ¬ ν€λ³΄λ νμ΄ν μ΄λ²€νΈλ₯Ό λ°λλ‘ κ΅¬ν.<br/>
> βͺ λ λ€λ₯Έ λ¬Έμ λ‘ ν€λ³΄νΈ νμ΄νλ₯Ό λλ μλ μ΄λ²€νΈκ° μ¬λ¬λ² μ€νλλ λ¬Έμ κ° λ°μ.<br/>
> βͺ μ΄λΆλΆμ useEffectλ₯Ό μ΄μ©νμ¬ λ¦¬μ‘νΈλλλ§ μ§μ  1νλ§ μ€νλλλ‘ νμ¬ ν΄κ²°.


<br/>

### οΈβοΈ &nbsp; κΈ°μ  μ€ν 

<p>
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
  </a>  &nbsp;  <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> 
  </a> &nbsp;  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> &nbsp; <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> 
  </a> &nbsp;  <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
  </a>  &nbsp; 
  </p>


<br />
