# 📝 **스튜디오 메이트 과제**

- React & Typescript를 이용하여 프로젝트를 진행
- Styled Component를 이용하여 CSS 작업
- Recoil을 활용하여 Clent State를 글로벌로 관리
- React-query를 활용하여 Server State를 관리
- React-query와 react-intersection-observer를 이용하여 무한스크롤 paginate을 구현
<br />

## 🔑 **프로젝트 실행방법**

```
1. package 설치
npm i

2. 실행
npm start
```
<br />

## 🌈 기술 스택

- **React 18**
- **Typescript**
- **Recoil**
- **React-query**
- **Styled-components**
- **React-intersection-observer**
- **React-snap**

<br />

## ✳️ 참고사항 

- [x] 포켓몬의 순서에 맞게 나오는 리스트 화면 구현
- [x] 포켓몬 번호 검색 기능
- [x] 무한스크롤 paginate
- [x] 해당 포켓몬을 눌렀을 때 디테일 화면으로 이동
- [x] 디테일 화면에는 포켓몬 정보가 있고, 진화단계가 있으면 그 진화단계도 표시
- [x] 상태 관리 라이브러리는 리덕스, **recoil**, mobx 중 사용
<br />

## ✅ 작업 내용

### **기본 설정**
- prettier / eslint 설정
- recoil / react-query provider 설정
### **홈 페이지(`/`) 페이지**
- 포켓몬의 번호 순서로 PokemonCard 리스트 화면 구현
- 포켓몬 번호 검색 기능이 가능한 SearchInput 구현
- 해당 포켓몬을 눌렀을 때 디테일 화면으로 이동
- react-query와 React-intersection-observer를 이용하여 무한스크롤 구현
### **포켓몬 디테일(`/pokemon/:id`) 페이지**
- 포켓몬 디테일 정보 및 해당 포켓몬의 진화단계를 표시
### **SEO 최적화**
- react-snap, react-helmet-async 라이브러리 사용 및 각 페이지별 Seo 컴포넌트를 이용하여 제목, 설명, og 속성 등을 이용한 SEO 최적화

<br />

## ⚠️ Note
- react-snap, react-helmet-async를 이용하여 SEO 최적화 작업을 진행했습니다.

<br />

## 🏠 Lighthouse SEO 점수 향상
<img width="400" alt="image" src="https://github.com/bellmin9321/pokemon/assets/49411767/a19fa8c7-b030-4d27-b093-37d1b8670cf2">

<img width="400" alt="image" src="https://github.com/bellmin9321/pokemon/assets/49411767/9d036eb9-2c3e-495f-8c70-a89824c30a36">



## 📸 Screenshot
### - Home 페이지('/')
<img width="500" alt="image" src="https://github.com/bellmin9321/pokemon/assets/49411767/1d47d0ef-a457-4312-b9ea-f210378a2baa">

### - Pokemon 디테일 페이지('/pokemon/:id')
<img width="1275" alt="image" src="https://github.com/bellmin9321/pokemon/assets/49411767/4988d002-c836-4d6c-b60f-2a408eb1db0b">

## 📹 Video

<video src="https://github.com/bellmin9321/pokemon/assets/49411767/9bc9ec6b-dcc1-4639-a91b-1417de3a8179" />

