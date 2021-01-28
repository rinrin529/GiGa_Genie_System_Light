<h1 align="center">GiGA Genie System Light</h1>
인공지능 스피커와 시스템 조명을 연동하여 음성으로 제어한다.<br/>
아파치를 사용해 3rd party web server를 구축하여 인공지능 스피커와 연결하고<br/>
서버에서는 인공지능 스피커의 SDK를 사용했다.<br/>
스피커의 API를 웹 서버에 적용하여 음성 명령어가 인식 되었을 때<br/>
RESTful을 사용해 스마트 조명의 gateway로 통신을 보내서 조명을 제어한다.<br/><br/><br/>

## 환경 구축

![image](https://user-images.githubusercontent.com/45943080/103729266-68f69500-5023-11eb-8ffb-8baec8abc0c4.png)

![image](https://user-images.githubusercontent.com/45943080/103729298-7b70ce80-5023-11eb-923d-0e77b5c0d842.png)
<br/><br/><br/>

## Service SDK

![image](https://user-images.githubusercontent.com/45943080/103729349-8f1c3500-5023-11eb-8474-214e57350bf6.png)


- 기가기니 서비스를 개발하기 위한 개발 kit

- Java Script API로 제공

- 서비스에 필요한 기가지니 SDK API를 찾아서 서버 코드에 적용

- 사용자 발화문에 맞는 서비스 실행
<br/><br/><br/>

## Dialog Kit

![image](https://user-images.githubusercontent.com/45943080/103729367-9e02e780-5023-11eb-8cae-22a943ce1f51.png)
<br/>기가지니에 발화문을 학습 시키기 위해서는 인텐트를 구성해야 하고<br/>
그 인텐트는 어휘 사전의 조합으로 만들어진다.<br/>
어휘 사전에는 명사형 어휘 사전인 NE 사전과 동사형 어휘 사전인 PR 사전이 있다.<br/>
Dialog Kit은 NLU를 통해 각 문장 안에서의 주요 명사형 어휘와 동사형 어휘를 파악한다. <br/>
따라서 전치사를 포함하지 않고 명사형 어휘 사전과 동사형 어휘 사전으로 구성하도록 한다.<br/>
(규칙 가능 조합: NE, PR, NE+PR, NE+NE, NE+NE+PR)<br/>

- Invoke : 3rd Party 서비스 호출명

- 어휘 사전 : 인텐트를 구성하는 요소

- 인텐트 : 기가지니에게 어떠한 의도를 전달할 것인지에 대한 표현어 또는 실행어
<br/><br/>

## 인텐트 개별 등록 및 어휘사전
![인텐트](https://user-images.githubusercontent.com/45943080/103897181-7ea8af00-5136-11eb-9459-515c7fdf079f.JPG)
사용자 정의대로 조명을 키는 것을 수행하는 "TurnOnLight"라는 인텐트를 생성했다.<br/>
대화 입력에는해당 인텐트를 실행시키는 대표 발화문을 입력했다.<br/>
이때 명사형 어휘인 "모든","조명" 단어는 어휘사전에서 추가한 단어이고<br/>
동사형 어휘인 "켜줘"는 기가지니 Dialog Kit의 어휘 사전에 이미 저장되어있는 단어이다.<br/>
<br/><br/>

## 인텐트 답변
![대답목록](https://user-images.githubusercontent.com/45943080/103899616-ffb57580-5139-11eb-8c80-c6a50815ed29.JPG)
등록한 인텐트를 실행했을 시 처리하는 방법이다.<br/>
전달 방법 옵션으로는 기가 지니를 통해 음성으로 메세지 전달<br/>
웹앱의 실행 페이지에서 메세지를 출력하는 웹앱 전달, 그리고 아무것도 수행 안함이 있다.<br/><br/>

- 기가지니 서버 코드
```javascript
gigagenie.voice.onActionEvent=function(extra){
  var body = {};
  switch(extra.actioncode){
      case 'TurnOnLight':
          body["onoff"] = "on";
          var light_num = extra.parameter['NE-B-Ordinal'];
          var all = extra.parameter['NE-EVERY'];
          if (all){
            SendVoice("모든 조명 켰습니다"); //음성메세지 전달
            ...
          }
      ...
```      
기가 지니 서버 코드 단에서 인텐트가 실행되었을때 음성으로 메세지를 따로 전달하기 때문에<br/>
인텐드 답변으로 "넵넵 켤게요"는 화면 상에 메세지로 출력된다.<br/><br/><br/>

## 프로그램 구현 모습


![image](https://user-images.githubusercontent.com/45943080/103729807-95f77780-5024-11eb-8cee-176bda16c0e5.png)

- 인공지능 스피커의 명령어 인식에 따른 시스템 조명 동작 
<br/><br/>

![image](https://user-images.githubusercontent.com/45943080/103729416-bd017980-5023-11eb-95b0-a0688aa5b226.png)
- 3rd Party 웹 서버 페이지





