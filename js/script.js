document.addEventListener('DOMContentLoaded',()=>{
    const tabParent=document.querySelector('.tabheader__items'),
        tabs=document.querySelectorAll('.tabheader__item'),
        tabsContent=document.querySelectorAll('.tabcontent'),
        loader=document.querySelector('.loader');
        //loader
        setTimeout(()=>{
            loader.style.opacity=0;
            setTimeout(()=>{
                loader.style.display='none';
            },5000);
        },2000);
        //Tabs
        function hideTabContent(){
            tabsContent.forEach((item)=>{
                item.classList.add('hide');
                item.classList.remove('show','fade');
            });
            tabs.forEach(item=>{
                item.classList.remove('tabheader__item__active');
            });
        }
        function showTabContent(i=0){
            tabsContent[i].classList.add('show','fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item__active');
        }
        hideTabContent();
        showTabContent();
        tabParent.addEventListener('click',(event)=>{
            const target=event.target;
            if(target&&target.classList.contains('tabheader__item')){
                tabs.forEach((item,idx)=>{
                    if(target==item){
                        hideTabContent();
                        showTabContent(idx);
                    }
                });
            }
        });
        //timer
        const deadline='2022-12-11';
        function getTimeRemaining(endTime){
            let days,hours,minutes,seconds;
            const timer=Date.parse(endTime)-Date.parse(new Date());
            if(timer<=0){
                days=0;
                hours=0;
                minutes=0;
                seconds=0;
            }
            else{
                days=Math.floor(timer/(1000*60*60*24));
                hours=Math.floor((timer/(1000*60*60))%24);
                minutes=Math.floor((timer/1000/60)%60);
                seconds=Math.floor((timer/1000)%24);
            }
            return {
                timer,
                days,
                hours,
                minutes,
                seconds
            };
        }
        function getZero (num){
            if(num>=0 && num<10){
                return `0${num}`;
            }
            else{
                return num;
            }
        }
        function setClock(selector,endTime){
            const timer=document.querySelector(selector),
                days=timer.querySelector('#days'),
                hours=timer.querySelector('#hours'),
                minutes=timer.querySelector('#minutes'),
                seconds=timer.querySelector('#seconds'),
                timeInterval=setInterval(upDateClock,1000);
                upDateClock();
                function upDateClock(){
                    const t=getTimeRemaining(endTime);
                    days.innerHTML=getZero(t.days); 
                    hours.innerHTML=getZero(t.hours); 
                    minutes.innerHTML=getZero(t.minutes); 
                    seconds.innerHTML=getZero(t.seconds);
                    if(t.timer<=0){
                        clearInterval(timeInterval);
                    }
                }
        }
        setClock('.timer',deadline);
        //modal
        const modalTrigger=document.querySelectorAll('[data-modal]'),
            modal=document.querySelector('modal'),
            modalCloseBtn=document.querySelector('[data-close]');

        }   modalTrigger.addEventListener("click",()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');

        })
});
// console.log(document.documentElement.clientWidth);