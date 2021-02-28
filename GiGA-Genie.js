gigagenie.voice.onActionEvent=function(extra){
  var body = {};
  switch(extra.actioncode){
      case 'TurnOnLight':
          body["onoff"] = "on";
          var light_num = extra.parameter['NE-B-Ordinal'];
          var all = extra.parameter['NE-EVERY'];
          if (all){
            SendVoice("모든 조명 켰습니다");  
            document.light_1.src = "img/smartlight_2.png";
            document.light_2.src = "img/smartlight_2.png";
            document.light_3.src = "img/smartlight_2.png";
            document.light_4.src = "img/smartlight_2.png";
            document.light_5.src = "img/smartlight_2.png";
            document.light_6.src = "img/smartlight_2.png";
            document.light_7.src = "img/smartlight_2.png";
          }
          else{
            switch (light_num){
              case '1번':
                SendVoice("1번 조명 켰습니다");
                sendMSG_on(1); //조명 키는 RESTful API
                document.light_1.src = "img/smartlight_2.png";
              break;
              case '2번':
                SendVoice("2번 조명 켰습니다");
                sendMSG_on(2); //조명 키는 RESTful API
                document.light_2.src = "img/smartlight_2.png";  
              break;
              case '3번':
                SendVoice("3번 조명 켰습니다");
                sendMSG_on(3); //조명 키는 RESTful API
                document.light_3.src = "img/smartlight_2.png"; 
              break;
              case '4번':
                SendVoice("4번 조명 켰습니다");
                sendMSG_on(4); //조명 키는 RESTful API
                document.light_4.src = "img/smartlight_2.png";
              break;
              case '5번':
                SendVoice("5번 조명 켰습니다");
                sendMSG_on(5); //조명 키는 RESTful API
                document.light_5.src = "img/smartlight_2.png";  
              break;
              case '6번':
                SendVoice("6번 조명 켰습니다");
                sendMSG_on(6); //조명 키는 RESTful API
                document.light_6.src = "img/smartlight_2.png"; 
              break;
              case '7번':
                SendVoice("7번 조명 켰습니다");
                sendMSG_on(7); //조명 키는 RESTful API
                document.light_7.src = "img/smartlight_2.png"; 
              break;
            }
          }
      break;
      case 'TurnOffLight':
          var light_num = extra.parameter['NE-B-Ordinal'];
          var all = extra.parameter['NE-EVERY'];
          if (all){
            SendVoice("모든 조명 껐습니다");
            document.light_1.src = "img/smartlight.png";
            document.light_2.src = "img/smartlight.png";
            document.light_3.src = "img/smartlight.png";
            document.light_4.src = "img/smartlight.png";
            document.light_5.src = "img/smartlight.png";
            document.light_6.src = "img/smartlight.png";
            document.light_7.src = "img/smartlight.png";
          }
          else{
            switch(light_num){
              case '1번':
                SendVoice("1번 조명 껐습니다");
                sendMSG_off(1); //조명 끄는 RESTful API
                document.light_1.src = "img/smartlight.png";
              break;
              case '2번':
                SendVoice("2번 조명 껐습니다");
                sendMSG_off(2); //조명 끄는 RESTful API
                document.light_2.src = "img/smartlight.png";
              break;
              case '3번':
                SendVoice("3번 조명 껐습니다");
                sendMSG_off(3); //조명 끄는 RESTful API
                document.light_3.src = "img/smartlight.png";
              break;
              case '4번':
                SendVoice("4번 조명 껐습니다");
                sendMSG_off(4); //조명 끄는 RESTful API
                document.light_4.src = "img/smartlight.png";
              break;
              case '5번':
                SendVoice("5번 조명 껐습니다");
                sendMSG_off(5); //조명 끄는 RESTful API
                document.light_5.src = "img/smartlight.png";
              break;
              case '6번':
                SendVoice("6번 조명 껐습니다");
                sendMSG_off(6); //조명 끄는 RESTful API
                document.light_6.src = "img/smartlight.png";
              break;
              case '7번':
                SendVoice("7번 조명 껐습니다");
                sendMSG_off(7); //조명 끄는 RESTful API
                document.light_7.src = "img/smartlight.png";
              break;
            }
          }
      break;
      default:
          alert('url 표시 없는 명령어입니다');
      break;
  }
};

function sendMSG_on(num){
  var url = "http://192.168.16.184:8080/gw/device/"+num+"/light";
  var settings = {
    "async":false,
    "crossDomain": true,
    "url": url,
    "method": "PUT",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json",
      "Cookie": "JSESSIONID=44FB8921BF51A67B3168AB46C8AD0502"
    },
    "data": JSON.stringify({"onoff":"on"}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("console").innerHTML=response;
  });
}

function sendMSG_off(num){
  var url = "http://192.168.16.184:8080/gw/device/"+num+"/light";
  var settings = {
    "async":false,
    "crossDomain": true,
    "url": url,
    "method": "PUT",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/json",
      "Cookie": "JSESSIONID=44FB8921BF51A67B3168AB46C8AD0502"
    },
    "data": JSON.stringify({"onoff":"off"}),
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    document.getElementById("console").innerHTML=response;
  });
}

function GetVoice(){
  var options={};
  options.mode=1;
  options.voicemsg="듣고있습니다[P2]말씀하세요"
  gigagenie.voice.getVoiceText(options,function(result_cd,result_msg,extra){
      if(result_cd===200){ 
          onActionEvent(extra);
          console.log("Received Text is "+extra.voicetext);
      }
  });
}


function SendVoice(speechText){
  var options={};
options.ttstext=speechText;
gigagenie.voice.sendTTS(options,function(result_cd,result_msg,extra){
      if(result_cd===200){
          //do next action
      } else {
          //extra.reason 에 voice 오류 전달.
      };
});
}

$("#tts-btn").click(function(){
  GetVoice();
});