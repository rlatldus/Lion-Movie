# LINE MOVIE
애정하는 영화 좋아요 및 문의 가능한 사이트<br />
- **`Team name` :** 라이언무비 ( 영화 찜하기 사이트 제작 )
- **`Project duration` :** 2023.03.13 - 2023.04.14
- **`Team members` :** 김시연(조장), 장영아, 복영헌
- **`Link` :** [라이언무비 웹사이트 ppt 발표자료](https://drive.google.com/file/d/1N76YKDWBmynJeWCUOlJKw-8rP5IU8ink/view)
- **`Link` :** [라이언무비 방문하기](https://movie-33ea4.web.app/)


![image](https://github.com/rlatldus/Movie/assets/122216298/4e39e8aa-cdfd-4750-a7e9-cd2a0e480a9b)


<br/>

## 핵심 기능
- **`프리뷰` :** 메인페이지에서 포스터 클릭 시, 프리뷰 모달을 통해 영화정보 및 최신 리뷰 확인 가능합니다.
- **`좋아요&북마크` :** 좋아요, 북마크 기능을 통해 마음에 드는 영화 목록을 저장할 수 있으며 마이페이지에서 확인 가능합니다.
- **`유저 페이지` :** 로그인, 회원가입, 로그아웃이 가능하고 구글로그인이 가능합니다.
- **`영화 검색` :** 영화 목록을 조회 하고 검색 할 수 있습니다.
- **`영화&회원&리뷰` :** 문의 사항을 작성하고 소식을 받을 수 있습니다.


<br/>
## 폴더구조
  
```
📦 src
├── 📂 assets
│   ├── 📂 images
├── 📂 components
│   ├── 📂 common
│   │   ├── 📂 Button
│   │   ├── 📂 contents
│   │   ├── 📂 favorite
│   │   ├── 📂 footer
│   │   ├── 📂 form
│   │   ├── 📂 kakaomap
│   │   ├── 📂 mail
│   │   ├── 📂 modal
│   │   ├── 📂 movieList
│   │   ├── 📂 pagination
│   │   └── 📂 tab
│   ├── 📂 hooks
│   │   └── 📄 useParseJwt.js
│   ├── 📂 views
│   │   ├── 📄 About.vue
│   │   ├── 📄 Favorite.vue
│   │   ├── 📄 Home.vue
│   │   ├── 📄 Login.vue
│   │   ├── 📄 Menu.vue
│   │   ├── 📄 Register.vue
│   │   ├── 📄 Search.vue
│   │   └── 📄 Setting.vue
│   └── 📄 Sidebar.vue
│   ├── 📂 firebase
│   ├── 📂 router 
│   ├── 📂 store 
│   │   ├── 📂 modules
│   │   │   ├── 📄 favorite.js
│   │   │   └── 📄 user.js
│   │   └── 📄 index.js
│   ├── 📂 util
│   │   ├── 📂 authguard
│   │   │   └── 📄 index.js
│   │   └── 📄 Loading.vue
├── 📄 App.vue
└── 📄 main.js
```

</div>


## Team members



|김시연<br>(FE, Team lead)|장영아<br>(FE)|복영헌<br>(FE)|                     
| :--: | :--: | :--: | 
| <p align="left">**Pages**<br/> - 유저페이지<br/> - 마이페이지 <br /><br/>**Features**<br/>-좋아요, 북마크 CRUD <br/> -Sign in/up 기능, 구글로그인</p> -firebase DB 관리 | <p align="left">**Pages**<br/> - 메인 홈페이지<br/>- 검색 페이지<br/> <br/>**Features**<br/>- framer-motion swiper 애니메이션 <br/> - 영화 api GET <br/> </p> | <p align="left">**Pages**<br/> - 서치페이지<br/><br/> - 메뉴바, 푸터<br/>  - 모달창 <br/> - 카카오맵api, 메일관리 <br/> |



<br/>

### Front-End

Vue|Scss|JavaScript|esLint|Prettier|
|  :--: | :--: | :--: | :--: | :--: |
| <img src="https://github.com/rlatldus/Movie/assets/122216298/8167513d-c43a-4c81-ad28-cc229b9b1ea9" alt="icon" width="65" height="65"/> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" />|  <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |


### Other

Firebase|
| :--: |
| ![image](https://github.com/rlatldus/Movie/assets/122216298/95630a87-0621-4bc2-b5fe-08a62da9a595)|

<br/>

<br/>

## 기능 미리보기( Front-end )


| |페이지 및 기능 |설명|담당개발자|
|:--:|:--:|:--:|:--:|
|Home| <img src="https://github.com/rlatldus/Movie/assets/122216298/d39b35e4-4012-41c4-b588-3d350e03618b" width="300px" /> | </br> - 모달 클릭 시<br/> 해당영화 프리뷰 | **FRONT-END** </br> `장영아` </br> |
| Search page | <img src= "https://github.com/rlatldus/Movie/assets/122216298/5cf491e0-c4db-4eea-a888-9fe11eaea4de" width="300px"/>|  - 영화 검색기능 구현<br/>  | **FRONT-END** </br> `장영아` </br> |
| Info page | <img src="https://github.com/rlatldus/Movie/assets/122216298/503501e3-742a-4a6d-a494-ead30841f979" width="300px"/> | - 문의 메일 기능, 카카오Map 구현 <br/>| **FRONT-END** </br> `복영헌` </br> |
|My Page|  <img src="https://github.com/rlatldus/Movie/assets/122216298/f82e0215-aec5-4e02-a4a6-40a4bfdd615b" width="300px"/> | - 호버 시 해당영화 정보 프리뷰 구현 <br /> - 좋아요 CRUD <br/> 기능 구현 |  **FRONT-END** </br> `김시연` </br> |
| User Page | <img src="https://github.com/rlatldus/Movie/assets/122216298/56edab3a-e69a-4a0a-8b46-fec50663fea8" width="300px"/> | - Sign in/up 기능 <br/> -구글로그인 | **FRONT-END** </br>`김시연` </br> |
<br/>



## Pages

| 페이지 | 기능 배치 구조| 설명 |
| :--: | :--: | :--: | 
|Home| <img src="https://github.com/rlatldus/Lion-Movie/assets/122216298/461ba91d-1fed-47a2-9431-6e3c17f06e99"  width="400" />| 'type'과 'series'에 따라 영화와 TV 정보를 각각의 데이터 속성에 저장|
|Search page| <img src="https://github.com/rlatldus/Lion-Movie/assets/122216298/be58dfca-8616-441a-a3c1-73264b079889" width="400"/>| TMDB API GET 이용|
|Info page| <img src="https://github.com/rlatldus/Lion-Movie/assets/122216298/d9450f46-a651-4ca7-8c56-d7e95b71d9cc"  width="400"/>| kakaoMAP api 사용하여 웹 첫 화면에서 보여질 영역을 좌표로 설정, 로그인 상태일 때 getmatter를 사용하여 이름과 이메일 주소 기입, 문의사항 입력 후 연결된 이메일 계정으로 메일 도착 |
|Mypage | <img src="https://github.com/rlatldus/Lion-Movie/assets/122216298/d8d0cde6-70a1-4954-8163-085099b7b5f6" width="400"/>| vuex로 store에 저장해서 상태관리, Vuex mapGetters 사용 > 편리하게 만듬 |
|User Page | <img src="https://github.com/rlatldus/Lion-Movie/assets/122216298/1e81596f-1dee-4eec-983f-3ffe6cfdf1e9" width="400"/> | Catch try 문으로 예외 처리, vuex로 store에 저장해서 상태관리, Vuex mapGetters 사용|



<br/>
<br/>

느낀점 

- 프로젝트에서 **팀 리더로** 처음 맡게 되었는데, 다행히 노력한 만큼 결과가 좋은 프로젝트가 되었고, 그만큼 많이 성장한 계기가 되었다고 생각한다.
- **소셜 계정 연동 로그인**을 처음 시도해 보았다. 각 사이트에서 제공하는 API 문서를 참고하여 개발하였다.
- react로만 상태관리를 해봤는데, vue로 도전해보다 vuex를 사용해 보게 되었다.  vue 에서 watcheffect() 와 리액트의 useEffect는 같은 기능이라는 사실을 알게되었다. 그외에도 이름이 다르지만, 기능은 같은 몇가지가 있었다.
- 상태관리로 store를 사용할 때 localstorgy와 별개의 기능이라는 사실을 알게 되었다. localstorigy로 저장하면 회원마다 같은 기능이 적용되는 상황이 발생하는데, 이때 store를 사용하면 그러한 오류들을 해결할 수 있다.
- Firebase를 사용하여 회원가입, 로그인, 로그아웃 구현도 처음 해봤는데, 이름은 DB에 직접 name을 만들어서 사용해야한다는 사실을 알게되었다.



