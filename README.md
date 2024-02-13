<h1>first time hosting site</h1>
readme 만들기 귀찮다 ㄹㅇ로<br>글고 왜 갑자기 git push할때마다 아이디 묻는지 모르겠음 가상 메모리 껐다가 다시 켜서 그른가 아니면 그냥 token 기본 30일이 만료돼서 그러는건가
<br>2024-02-13 node.js && typescript 개발환경 구축(굳이 ubuntu에서 할 이유는 없지만 그냥 객기로 계속 ubuntu에서 할거임) 공부는 내일부터

# first time hosting site

<p align="center">
  <strong>모 프로젝트 경험을 통해 프론트&백엔드에 대한 이해를 가지겠다는 목표가 생김<br/>공부해야 된다고 생각하면? 바로 실천하자</strong>
  <br/>
  <br/>
  <br/>

  <img src="https://img.shields.io/badge/html-000000?style=flat-square&logo=asd&logoColor=white"/>
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/> 
  <img src="https://img.shields.io/badge/Google%20Maps-4285F4?style=flat-square&logo=googlemaps&logoColor=white"/>
  <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white"/>
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white"/>
</p>
<br/>
<br/>
  
<p align="center">  
  <strong>아래의 뱃지에서 프로토타입을 확인해보세요.<strong>
  <br/>
  <br/>
  <a href='https://desirable-sea.vercel.app/'>
    <img src="https://img.shields.io/badge/Product-Vercel-000000?style=flat-square"/>
  </a>
  <a href='https://goor.me/edkv2g6bKZt7nopy6'>
    <img src="https://img.shields.io/badge/Model-goorm-ffffff?style=flat-square"/>
  </a>
  <a href='https://colab.research.google.com/drive/13-VZyx3LiYPRS8aw-AcMSBK0Z4--TF2j?usp=sharing'>
    <img src="https://img.shields.io/badge/Tutorial-Google%20Colab-F9AB00?style=flat-square"/>
  </a>
</p>

<br/>
<br/>

# 1. 프로젝트 개요

> [!NOTE]
> * 본 아이디어는, 제주특별자치도에서 주최하는 [2023년도 제주 위성데이터 활용 경진대회](https://aifactory.space/task/2700/overview)에 출품하여 대상(제주특별자치도지사상)을 수상한 프로젝트입니다.
>   
> * 본 아이디어는, 제주 위성데이터를 활용하고 컴퓨터 비전의 객체 인식 AI 기술을 적용하여, 제주 지역에서 장기적으로 주차되거나 방치되어 있는 차량을 탐지하고, 해당 정보를 유관 기관이 통합하여 관리할 수 있는 지능형 플랫폼을 연구 및 개발하는 것입니다.

https://github.com/ziweek/desirable-sea/assets/99459331/4a7edb47-754c-47fd-8dab-7d2adbb045ec

<table>
  <tr>
     <td>
      <p align='center'>
        초고상도 이미지 개선 모델
      </p>
    </td>
    <td>
      <p align='center'>
        소형 객체 인식 모델링
      </p>
    </td>
    <td>
      <p align='center'>
        프로덕트 웹페이지
      </p>
    </td>
  </tr>
   <tr>
    <td>
      <img src="./src/preview-super-image-resolution.png"/>
    </td>
    <td>
      <img src="./src/preview-small-object-detection.png"/>
    </td>
    <td>
      <img src="./src/preview-product-webpage.png"/>
    </td>
  </tr>
</table>
<br/>

<br/>
<br/>


<!--
# 업데이트 로그

<details>
  <summary>
    <b>
      예선 제출물 (2024.01.03)
    </b>
  </summary>

  - Product
    - 프론트엔드 개발 완료. 메인 서버와 딥러닝 서버를 구분하여 개발 중에 있음.
  - Model
    - 아래의 프로덕트 > 모델링 > 추론 실행방법을 참고하여, 베이스라인을 기반으로 한 MVP 시연이 가능함.
  
      https://github.com/ziweek/desirable-sea/assets/99459331/a861922b-2486-45da-9844-30aa821bff28

</details>

<details>
  <summary>
    <b>본선 제출물 (2024.01.21)</b>
  </summary>
  
  - Product
    - 공공데이터 포털에서 제공하는 [제주특별자치도_주차장기본정보](https://www.data.go.kr/data/15099715/openapi.do) 사용함.
      <img src="./src/public-api-data.png" width="100%"/>
    - 서버와 데이터베이스 연동
      <img src="./src/server-doc.png" width="100%"/>
    - 반응형 UI 개발 완료 및 다크모드 지원
      <img src="./src/darkmode.png" width="100%"/>
    - PWA(Progressive Web Apps) 지원 ([설치방법](https://github.com/ziweek/desirable-sea/tree/main?tab=readme-ov-file#pwa-%EC%84%A4%EC%B9%98%EB%B0%A9%EB%B2%95))
      <img src="./src/ui-mobile.png"/>
  - Model
    - 원본데이터에 Super Image Resolution 딥러닝 모델을 적용하여 해상도 개선
      <img src="./src/comp-super-image-resolution.png" width="100%">
    - 원본데이터에 대해 데이터 라벨링 진행

      https://github.com/ziweek/desirable-sea/assets/99459331/2212ce20-bb1b-42f8-a97c-bebd22ce3fb3
      
    - 성능지표가 크게 개선됨. (mAP : 73.4 -> 78.9 )
      <img src="./src/model-improvement.png" width="100%"/>
    - 기존의 결과값에 비해 정확도 및 신뢰도가 대폭 상승함. (ship 30% -> small vehicle 91%)
      <img src="./src/dif-precision.png" width="100%"/>
    - 기존의 모델이 흰색 차량만을 식별했던 것과 달리 검은색, 검은색의 차량도 식별함.
      <img src="./src/dif-color.png" width="100%"/>
    - 건물의 그림자가 걸쳐진 차량도 식별함.
      
      <img src="./src/dif-shadow.png" width="100%"/>

  - README
    - CoLab 튜토리얼 추가 [![CoLab](https://img.shields.io/badge/Tutorial-Google%20Colab-F9AB00?style=flat-square)](https://colab.research.google.com/drive/13-VZyx3LiYPRS8aw-AcMSBK0Z4--TF2j?usp=sharing)
      
</details>
<br/>
<br/>
-->



# 2. 프로덕트


> [!IMPORTANT]
> 프로젝트 진행 현황
> - [x] 기획안 작성 완료 :ok_hand:
> - [x] 프론트엔드 개발 완료 :ok_hand:
> - [x] 벡엔드 개발 완료 :ok_hand:
> - [x] 머신러닝 서버 개발 완료 :ok_hand:
> - [x] 데이터베이스 구축 완료 :ok_hand:
> - [x] 소개자료 및 시연영상 제작 완료 :ok_hand:

> [!tip]
> <details > <summary><b>프로토타입 설치방법</b></summary>
> <br/>
>
> iOS에서 설치하는 방법:
>
>  1. iOS 기기에서 Safari를 열고 PWA가 호스팅된 URL로 이동합니다.
>  2. 화면 하단에 있는 공유 아이콘을 탭합니다.
>  3. 화면을 아래로 스크롤하여 "홈 화면에 추가"를 탭합니다.
>  4. 우측 상단의 "추가"를 탭합니다.
>
> Android에서 설치하는 방법:
> 
>  1. Android 기기에서 Chrome 브라우저를 열고 PWA가 호스팅된 URL로 이동합니다.
>  2. 화면 우측 상단의 세 점 메뉴를 탭합니다.
>  3. "홈 화면에 추가"를 탭합니다.
>  4. 우측 상단의 "추가"를 탭합니다.
> </details>


<details >
 <summary><b>핵심기능</b></summary><br/>

 <table>
  <tr>
     <td>
      <p align="left">1.1 초고해상도 이미지 개선 딥러닝 모델</p>
    </td>
     <td>
      <p align="left">1.2 초고해상도 이미지 개선 딥러닝 모델 도입</p>
    </td>
  </tr>
   <tr>
     <td>
      <img src="./src/comp-super-image-resolution.png" width="100%">
    </td>
    <td>

https://github.com/ziweek/desirable-sea/assets/99459331/2212ce20-bb1b-42f8-a97c-bebd22ce3fb3
     
</td>
  </tr>
    <tr>
     <td>
      <p align="left">데이터 전처리 과정에서 초고해상도 이미지 개선 딥러닝 모델을 원본 데이터에 적용하여 해상도를 크게 개선할 수 있었습니다.</p>
    </td>
     <td>
      <p align="left">전처리된 데이터셋을 라벨링하였습니다. 이때, 사전학습된 모델을 활용하여 자동으로 식별하게 하였고, 아래와 같이 예외적인 경우에는 수작업을 병행하였습니다.</p>
    </td>
  </tr>
</table>


 <table>
  <tr>
     <td>
      <p align="left">2.1 객체 탐식 딥러닝 모델 도입</p>
    </td>
     <td>
      <p align="left">2.2 WBF 앙상블 기법으로 성능 개선</p>
    </td>
  </tr>
   <tr>
     <td>
      <img src="./src/result.png" width="100%">
    </td>
    <td>
      <img src="./src/comp-super-image-resolution.png" width="100%">
    </td>
  </tr>
    <tr>
     <td>
      <p align="left">데이터 전처리 과정에서 초고해상도 이미지 개선 딥러닝 모델을 원본 데이터에 적용하여 해상도를 크게 개선할 수 있었습니다.</p>
    </td>
     <td>
      <p align="left">전처리된 데이터셋을 라벨링하였습니다. 이때, 사전학습된 모델을 활용하여 자동으로 식별하게 하였고, 아래와 같이 예외적인 경우에는 수작업을 병행하였습니다.</p>
    </td>
  </tr>
</table>

 <table>
  <tr>
     <td>
      <p align="left">3.1 Google Map API를 활용한 UX 구현</p>
    </td>
     <td>
      <p align="left">3.2 반응형 UI 및 다크모드 지원으로 사용성 개선</p>
    </td>
  </tr>
   <tr>
     <td>
      <img src="./src/result.png" width="100%">
    </td>
    <td>
      <img src="./src/comp-super-image-resolution.png" width="100%">
    </td>
  </tr>
    <tr>
     <td>
      <p align="left">데이터 전처리 과정에서 초고해상도 이미지 개선 딥러닝 모델을 원본 데이터에 적용하여 해상도를 크게 개선할 수 있었습니다.</p>
    </td>
     <td>
      <p align="left">전처리된 데이터셋을 라벨링하였습니다. 이때, 사전학습된 모델을 활용하여 자동으로 식별하게 하였고, 아래와 같이 예외적인 경우에는 수작업을 병행하였습니다.</p>
    </td>
  </tr>
</table>
</details>


<details >
  <summary><b>아키텍처</b></summary><br/>

 <table>
  <tr>
     <td>
      <p align="left">프로덕트 아키텍처</p>
    </td>
     <td>
      <p align="left">AI 아키텍처</p>
    </td>
  </tr>
   <tr>
     <td>
      <img width="100%" src="./src/service-architecture.png">
    </td>
    <td>
      <img src="./src/comp-super-image-resolution.png" width="100%">
    </td>
  </tr>
    <tr>
     <td>
      <p align="left">본 프로젝트의 아키텍처는 데이터 전처리 수행 서버(초고해생도 이미지 개선 딥러닝 모델), 핵심 기능 수행 서버(소형 객체 식별 딥러닝 모델), 그리고 웹 어플리케이션(프론트엔드와 벡엔드 및 데이터베이스)으로 구성되어 있습니다.</p>
    </td>
     <td>
      <p align="left">전처리된 데이터셋을 라벨링하였습니다. 이때, 사전학습된 모델을 활용하여 자동으로 식별하게 하였고, 아래와 같이 예외적인 경우에는 수작업을 병행하였습니다.</p>
    </td>
  </tr>
</table>
</details>


<br/>
<br/>

# 3. 팀원 소개

<table>
  <tr>
    <td>
      <p align='center'>김지욱</p>
    </td>
    <td>
      <p align='center'>
        <img src="https://drive.google.com/uc?export=view&id=1459-NPm4sC50nrQRdjTpmpz_eKunIi04" width=600/>
        <a href='https://github.com/ziweek' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
    <td>
      <p align='left'>
        이 프로젝트에 리더로 참여하여 먼저, 장기 방치 차량 문제에 직면해 이를 관리 하기 위한 지능형 플랫폼의 필요성을 깨닫게 되었습니다. Next.js, Google Map API, 그리고 FastAPI 등의 현대적인 기술들을 통합함으로써 우리의 솔루션은 효율적이고 사용자 친화적인 장기 방치 차량 관리를 실현하며, 위성데이터를 활용한 지능형 플랫폼의 발전에 일조하는 데 자부심을 느낄 수 있었습니다. 이 플랫폼은 제주의 차량문제를 혁신하고 미래 도시 계획에 기여하는 중요한 발판으로서의 역할을 할 것으로 기대됩니다.
      </p>
    </td>
  </tr>
  
   <tr>
    <td>
      <p align='center'>부선웅</p>
    </td>
    <td>
      <p align='center'>
        <img src="https://drive.google.com/uc?export=view&id=1RXq9nhJ5xsv_tMCUZ4l6QwDeiyR1mtSD" width=600/>
        <a href='https://github.com/Boo-seon-woong' target="_blank">
          <img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
        </a>
      </p>
    </td>
    <td>
      <p align='left'>
        CTO로 참여한 이 프로젝트는 최신 기술을 활용하여 제주의 장기 방치 차량 문제에 도전하는 흥미로운 경험이었습니다. 위성데이터와 딥러닝을 결합하여 차량을 정확하게 탐지하는 시스템을 개발하는 과정에서, 기술적인 도전과 혁신의 기회를 마주하게 되었습니다. 이 플랫폼은 미래 제주의 스마트한 지능형 시스템을 모색하는 데 있어 핵심적인 역할을 할 것으로 자부하고 있습니다.
      </p>
    </td>
  </tr>
</table>
