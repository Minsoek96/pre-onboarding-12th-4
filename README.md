# 프리온보딩 4주차 과제
## 🌐 배포 주소
### https://ornate-dusk-421792.netlify.app



## ⚙ 실행 방법

1. 프로젝트 내려받기: `git clone` [https://github.com/Minsoek96/pre-onboarding-12th-4.git ./](https://github.com/Minsoek96/pre-onboarding-12th-4.git) 
2. 패키지 설치: `npm install`
3. 애플리케이션 실행: `npm start` (브라우저가 자동으로 실행되어 홈페이지로 이동)
## 프로젝트 계획 상세화

### API 처리

- 본 프로젝트에서는 별도의 API가 제공되지 않으며, 대신 mock 데이터 파일이 제공됩니다.
- API가 제공되지 않는 점을 고려하여, 실 서비스와 유사한 환경을 구축하기 위해 제공된 mock_data.json을 활용하겠습니다. 이를 위해 MSW 라이브러리를 사용하여 mock API를 구현할 계획입니다.

### UI 디자인 및 구현

- 별도의 UI에 대한 요구사항은 없으므로, 스타일 컴포넌트를 활용하여 유연하고 재사용 가능한 스타일링을 구현할 예정입니다.

### 차트 컴포넌트

- 본 프로젝트는 기능구현에 있어 라이브러리 제한이 없으며, 프로젝트 주 목적이 Area 그래프와 Bar그래프를 복합한 그래프 생성이기 때문에 ,차트 그리기에 특화된 라이브러리를 사용할 계획 입니다.
  
## 프로젝트 진행 사항

### 시계열 차트 만들기
- **`useChartDataFetch`** 커스텀 훅을 생성하여, 차트 데이터의 키 값을 포함한 새로운 배열을 반환하도록 구현하였습니다. 이때, 해당 데이터의 time 키를 x축 값으로 사용합니다.
- 차트 컴포넌트의 가독성을 향상시키기 위해, 데이터 구성에 필요한 필수 데이터를 유틸 함수로 분리하였습니다.
- 차트 구성에 필요한 데이터 가공을 담당할 **`ChartManager`**라는 클래스를 생성하여 기능을 분리하였습니다.
    
### 호버 기능 구현
- Chart.js에서 옵션을 이용하여, 툴팁에 필요한 정보를 전달할 수 있도록 콜백 함수를 구현하였습니다.
- 차트 컴포넌트의 가독성을 향상시키기 위해, 유틸 함수로 기능을 분리하였습니다.

### 필터링 기능 구현
- 차트 데이터에서 id 값을 추출하여 새로운 데이터를 생성하고, Set을 활용하여 중복된 값들을 제거하였습니다.
- 추출된 데이터를 이용하여 버튼을 렌더링하고, 버튼의 id 값과 현재 선택된 값이 일치하는지 판단하여, 차트의 배경색을 렌더링하도록 구현하였습니다.

## 🛠Tech Stack
<div>

Area| Tech Stack|
:--------:|:------------------------------:|
**Frontend** | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Axios-5A29E4.svg?&style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093.svg?&style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/chart.js-E34F26?style=for-the-badge&logo=chart.js&logoColor=white">
**Backend** | <img src="https://img.shields.io/badge/Mock Service Worker-FF6A33?&style=for-the-badge">
</div>
