# GiGA Genie System Light
인공지능 스피커와 시스템 조명을 연동하여 음성으로 제어한다.
아파치 웹 서버를 사용해 3rd party web server를 구축하여 인공지능 스피커와 연결하고 서버에서는 인공지능 스피커의 SDK를 사용했다.
스피커의 API를 웹 서버에 적용하여 음성 명령어가 인식 되었을 때 RESTful을 사용해 스마트 조명의 gateway로 통신을 보내서 조명을 제어한다.


## 환경 구축

![image](https://user-images.githubusercontent.com/45943080/103729266-68f69500-5023-11eb-8ffb-8baec8abc0c4.png)

![image](https://user-images.githubusercontent.com/45943080/103729298-7b70ce80-5023-11eb-923d-0e77b5c0d842.png)
<br/><br/><br/>

## Service SDK

![image](https://user-images.githubusercontent.com/45943080/103729349-8f1c3500-5023-11eb-8474-214e57350bf6.png)


- 기가기니 서비스를 개발하기 위한 개발 kit

- Java Script API로 제공

- 서비스에 필요한 기가지니 SDK API를 찾아서 코드에 적용

- 사용자 발화문에 맞는 서비스 실행
<br/><br/><br/>

## Dialog Kit

![image](https://user-images.githubusercontent.com/45943080/103729367-9e02e780-5023-11eb-8cae-22a943ce1f51.png)

- 기가지니 대화 플랫폼

- 사용자 발화문의 의도와 기능 정의

- Invoke : 3rd Party 서비스 호출명

- 어휘 사전 : 인텐트를 구성하는 요소

- 인텐트 : 발화문을 하나로 정의하는 실행어
<br/><br/><br/>

## 프로그램 구현 모습
<br/>
![image](https://user-images.githubusercontent.com/45943080/103729391-aeb35d80-5023-11eb-9343-89a9bf469e86.png)

- 인공지능 스피커의 명령어 인식에 따른 시스템 조명 동작 
<br/><br/>

![image](https://user-images.githubusercontent.com/45943080/103729416-bd017980-5023-11eb-95b0-a0688aa5b226.png)

- 3rd Party 웹 서버 페이지





