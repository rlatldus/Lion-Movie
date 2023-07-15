# LINE MOVIE
애정하는 영화 좋아요 및 문의 가능한 사이트<br />
- **`Team name` :** 라이언무비 ( 영화 찜하기 사이트 제작 )
- **`Project duration` :** 2023.03.13 - 2023.04.14
- **`Team members` :** 김시연(조장), 장영아, 복영헌
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
|Home|![image](https://github.com/rlatldus/Movie/assets/122216298/d39b35e4-4012-41c4-b588-3d350e03618b) | </br> - 모달 클릭 시<br/> 해당영화 프리뷰 | **FRONT-END** </br> `장영아` </br> |
| Search page |![image](https://github.com/rlatldus/Movie/assets/122216298/5cf491e0-c4db-4eea-a888-9fe11eaea4de)|  - 영화 검색기능 구현<br/>  | **FRONT-END** </br> `장영아` </br> |
| Info page |![image](https://github.com/rlatldus/Movie/assets/122216298/503501e3-742a-4a6d-a494-ead30841f979) | - 문의 메일 기능, 카카오Map 구현 <br/>| **FRONT-END** </br> `복영헌` </br> |
|My Page| ![image](https://github.com/rlatldus/Movie/assets/122216298/f82e0215-aec5-4e02-a4a6-40a4bfdd615b) | - 호버 시 해당영화 정보 프리뷰 구현 <br /> - 좋아요 CRUD <br/> 기능 구현 |  **FRONT-END** </br> `김시연` </br> |
| User Page | ![image](https://github.com/rlatldus/Movie/assets/122216298/56edab3a-e69a-4a0a-8b46-fec50663fea8) | - Sign in/up 기능 <br/> -구글로그인 | **FRONT-END** </br>`김시연` </br> |
<br/>



## Pages

| |페이지/기능 배치 구조|
| :--: | :--: |
|Home|![Common](https://user-images.githubusercontent.com/122377401/233072429-c8a09ffe-e11b-4c63-89ec-04ebaaa7d002.png)|
|Search page|![Home & Preview](https://user-images.githubusercontent.com/122377401/233072426-3177b9fa-e992-4d40-91f3-cd372d3cdbae.png)| 
|Info page|![Detail Page](https://user-images.githubusercontent.com/122377401/233072424-b855b592-797c-4fc9-828c-2d9dba372fb3.png)| 
|Mypage |![My & User](https://user-images.githubusercontent.com/122377401/233072422-e4ffc00a-c2bb-4833-bdea-f9e70e922801.png)| 
|User Page | ![image](https://github.com/rlatldus/Movie/assets/122216298/7efdf85c-3d50-47a0-aa08-b69e24da76e1) | 
![로그인 페이지](https://github.com/rlatldus/Lion-Movie/assets/122216298/1fbe2772-3805-4ffa-a399-9a9594fb6739)


느낀점 
CORS란?
CORS는 Cross-Origin Resource Sharing 의 약자이며 한 출처에서 실행중인 웹 애플리케이션이 다른 출처의 선택한 자원에 접근할숭 있는 권한을 부여하도록 브라우저에 알려주는 체제이다.
개발을 하면서 정말 많이 만날게 될 오류이므로 잘 알아두는게 중요하다.

같은 주소, 같은 포트에 있는 리소스를 불러올 때는 문제가 없지만 다른 출처의 리소스를 요청하게 되면 보안적인 문제로 기본적으로 이를 차단함.



