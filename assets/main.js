document.getElementsByClassName('wrapper')[0].style.height = screen.availHeight+'px';
/* Typed.js */
!function(t){"use strict";var s=function(s,e){this.el=t(s),this.options=t.extend({},t.fn.typed.defaults,e),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){for(var s=0;s<t.strings.length;++s)t.sequence[s]=s;t.shuffle&&(t.sequence=t.shuffleArray(t.sequence)),t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},t.startDelay)},build:function(){var s=this;if(this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var e=this.stringsElement.children();t.each(e,function(e,i){s.strings.push(t(i).html())})}this.init()},typewrite:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var e=0,r=t.substr(s);if("^"===r.charAt(0)){var o=1;/^\^\d+/.test(r)&&(r=/\d+/.exec(r)[0],o+=r.length,e=parseInt(r)),t=t.substring(0,s)+t.substring(s+o)}if("html"===i.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s+1).charAt(0)!==h&&(a+=t.substr(s).charAt(0),s++,!(s+1>t.length)););s++,a+=h}}i.timeout=setTimeout(function(){if(s===t.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(t,s)},i.backDelay)}else{0===s&&i.options.preStringTyped(i.arrayPos);var e=t.substr(0,s+1);i.attr?i.el.attr(i.attr,e):i.isInput?i.el.val(e):"html"===i.contentType?i.el.html(e):i.el.text(e),s++,i.typewrite(t,s)}},e)},e)}},backspace:function(t,s){if(this.stop!==!0){var e=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===t.substr(s).charAt(0)){for(var e="";"<"!==t.substr(s-1).charAt(0)&&(e-=t.substr(s).charAt(0),s--,!(0>s)););s--,e+="<"}var r=t.substr(0,s);i.attr?i.el.attr(i.attr,r):i.isInput?i.el.val(r):"html"===i.contentType?i.el.html(r):i.el.text(r),s>i.stopNum?(s--,i.backspace(t,s)):s<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],s))},e)}},shuffleArray:function(t){var s,e,i=t.length;if(i)for(;--i;)e=Math.floor(Math.random()*(i+1)),s=t[e],t[e]=t[i],t[i]=s;return t},reset:function(){var t=this;clearInterval(t.timeout);this.el.attr("id");this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},t.fn.typed=function(e){return this.each(function(){var i=t(this),r=i.data("typed"),o="object"==typeof e&&e;r&&r.reset(),i.data("typed",r=new s(this,o)),"string"==typeof e&&r[e]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery);

 /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({
            strings: ["AIM", "FOR", "THE", "HIGHEST"],
            typeSpeed: 80
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });
        var score1,score2,score3,score4;
        function show1(){
            document.getElementById('intro').style.display = 'none';
            document.getElementById('listening').style.display = 'block';
            return false;
        }
        function show2(){
            score1 = Number(document.getElementById('score1').value);
            if(score1<=40 && score1>=0 && score1!=''){
                document.getElementById('listening').style.display = 'none';
                document.getElementById('reading').style.display = 'block';
            }
            return false;
        }
        function show3(){
            score2 = Number(document.getElementById('score2').value);
            if(score2<=40 && score2>=0 && score2!=''){
                document.getElementById('reading').style.display = 'none';
                document.getElementById('writing').style.display = 'block';
            }
            return false;
        }
        function show4(){
            score3 = Number(document.getElementById('score3').value);
            if(score3<=9 && score3>=0 && score3!=''){
                document.getElementById('writing').style.display = 'none';
                document.getElementById('speaking').style.display = 'block';
            }
            return false;
        }
        function calculate() {
            score4 = Number(document.getElementById('score4').value);
            if(score4<=9 && score4>=0 && score4!=''){
                scoreListening = scoreForListening(score1);
                if (document.getElementById('general').checked) {
                    scoreReading = scoreForGeneral(score2);
                } else {
                    scoreReading = scoreForListening(score2);
                }
                scoreSpeaking = Math.floor(score4*2)/2;
                scoreWriting = Math.floor(score3*2)/2;
                scoreOverall = Math.round((scoreSpeaking*2+scoreWriting*2+scoreReading*2+scoreListening*2)/4)/2;

                if (String(scoreSpeaking).length==1) {
                    scoreSpeakingFull = scoreSpeaking+'.0';
                } else {
                    scoreSpeakingFull = scoreSpeaking;
                } if (String(scoreWriting).length==1) {
                    scoreWritingFull = scoreWriting+'.0';
                } else {
                    scoreWritingFull = scoreWriting;
                } if (String(scoreListening).length==1) {
                    scoreListeningFull = scoreListening+'.0';
                } else {
                    scoreListeningFull = scoreListening;
                } if (String(scoreReading).length==1) {
                    scoreReadingFull = scoreReading+'.0';
                } else {
                    scoreReadingFull = scoreReading;
                } if (String(scoreOverall).length==1) {
                    scoreOverallFull = scoreOverall+'.0';
                } else {
                    scoreOverallFull = scoreOverall;
                }

                document.getElementById('scoreListening').innerHTML = scoreListeningFull;
                document.getElementById('scoreReading').innerHTML = scoreReadingFull;
                document.getElementById('scoreSpeaking').innerHTML = scoreSpeakingFull;
                document.getElementById('scoreWriting').innerHTML = scoreWritingFull;

                document.getElementById('scoreOverall').innerHTML = scoreOverallFull;
            

                document.getElementById('speaking').style.display = 'none';
                document.getElementById('results').style.display = 'block';
            }
            return false;
        }

        function scoreForListening(score){
            if (score>=39 && score<=40) {
                return 9;
            }else if (score>=37 && score<=38) {
                return 8.5;
            }else if (score>=35 && score<=36) {
                return 8;
            }else if (score>=33 && score<=34) {
                return 7.5;
            }else if (score>=30 && score<=32) {
                return 7;
            }else if (score>=26 && score<=29) {
                return 6.5;
            }else if (score>=23 && score<=25) {
                return 6;
            }else if (score>=18 && score<=22) {
                return 5.5;
            }else if (score>=16 && score<=17) {
                return 5;
            }else if (score>=13 && score<=15) {
                return 4.5;
            }else if (score>=10 && score<=12) {
                return 4;
            }else if (score>=8 && score<=9) {
                return 3.5;
            }else if (score>=6 && score<=7) {
                return 3;
            }else if (score>=4 && score<=5) {
                return 2.5;
            }else {
                return 0;
            }
        }
        

        function scoreForGeneral(score){
            if (score==40) {
                return 9;
            }else if (score==39) {
                return 8.5;
            }else if (score>=37 && score<=38) {
                return 8;
            }else if (score==36) {
                return 7.5;
            }else if (score>=34 && score<=35) {
                return 7;
            }else if (score>=32 && score<=33) {
                return 6.5;
            }else if (score>=30 && score<=31) {
                return 6;
            }else if (score>=27 && score<=29) {
                return 5.5;
            }else if (score>=23 && score<=26) {
                return 5;
            }else if (score>=19 && score<=22) {
                return 4.5;
            }else if (score>=15 && score<=18) {
                return 4;
            }else if (score>=12 && score<=14) {
                return 3.5;
            }else if (score>=9 && score<=11) {
                return 3;
            }else if (score>=6 && score<=8) {
                return 2.5;
            }else {
                return 0;
            }
        }