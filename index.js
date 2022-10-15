window.onload = startTime();
const main_person = document.querySelector('.main_box');
let person = document.getElementsByClassName('person');
let botton = document.getElementsByClassName('botton')[0];
const add_botton = document.querySelector('.person_add');




const press_exit = (obj) => {
    obj.parentElement.classList.add('disappear');
    obj.parentElement.classList.remove('appear');
    if (obj.parentElement.classList[0]=='main_box'){
        obj.parentElement.classList.toggle('person');
        obj.parentElement.classList.toggle('main_box');
    }
    check_odd();
}


const press_pin = (obj) => {
    var parent = obj.closest('.main_box');
    if (parent){
        parent.classList.toggle('main_box');
        parent.classList.toggle('person');
    }
    else{
        parent = obj.closest('.person');
        let main = document.querySelector('.main_box');
        if(main){
            main.classList.toggle('main_box');
            main.classList.toggle('person');
        }
        parent.classList.toggle('main_box');
        parent.classList.toggle('person');
        parent.classList.remove('wide');
    }
    check_odd();
    Togglefull();        
}


   

const Togglefull = () => {
    let container = document.querySelector('.sub_box');
    let main = document.querySelector('.main_box');
    if(!main){
        container.classList.add('fullscream');
    }
    else {
        console.log("fds")
        container.classList.remove('fullscream');
    }

}


function check_odd(){
    let persons = document.querySelectorAll(".person.appear");
    let main = document.querySelector('.main_box');
    let nums = getnums();
    for(let P of persons){
            P.classList.remove('wide')
        }
    if (main){
        for(let P of persons){
            P.style.width= 'calc((100% - 12px)/2)';
        }
        
        if (nums%2 == 0){
            if(nums==0){
                
            }
            else{
                persons[getnums()-1].classList.remove('wide');
            }
            
        }
        else{
            persons[getnums()-1].style.width = '65%'
        }
        if (nums>=7 && nums<9) {
            for(let P of persons){
                P.style.height = 'calc((100% - 36px)/4)'; 
            }
        }
        else if (nums>=9){
            for(let P of persons){
                P.style.height = 'calc((100% - 48px)/5)'; 
            }
        }
        else{
            for(let P of persons){
                P.style.height = 'calc((100% - 24px)/3)'; 
            }
        }
        main.style.width= 'calc( (100% + 16px)*1.9499)';
        main.style.height = '100%'
        
    }
    else{
        for(let P of persons){
            P.style.height= 'calc((100% - 12px)/2)';
        }
        
        if(nums>=7 && nums<9){
            for(let P of persons){
                P.style.width = 'calc((100% - 36px)/4)'; 
            }
            if(nums%4==1){
                persons[getnums()-1].style.width = '50%';
            }
            else if(nums%4==2){
                persons[getnums()-1].style.width = '40%';
                persons[getnums()-2].style.width = '40%';
            }
            else if(nums%4==3){
                persons[getnums()-1].style.width = '30%';
                persons[getnums()-2].style.width = '30%';
                persons[getnums()-3].style.width = '30%';
            }
        }
        else if(nums>1 && nums<5){
            for(let P of persons){
                P.style.width = 'calc((100% - 12px)/2)'; 
            }
            if(nums%2==1){
                persons[getnums()-1].style.width = '70%';
            }
            if(nums<=2){
                for(let P of persons){
                    P.style.height = '100%'; 
                }
            }
            
            
        }
        else if (nums>=9){
            for(let P of persons){
                P.style.width = 'calc((100% - 48px)/5)'; 
            }
            if(nums%5==1){
                persons[getnums()-1].style.width = '50%';
            }
            else if(nums%5==2){
                persons[getnums()-1].style.width = '40%';
                persons[getnums()-2].style.width = '40%';
            }
            else if(nums%5==3){
                persons[getnums()-1].style.width = '30%';
                persons[getnums()-2].style.width = '30%';
                persons[getnums()-3].style.width = '30%';
            }
            else if(nums%5==4){
                persons[getnums()-1].style.width = '22%';
                persons[getnums()-2].style.width = '22%';
                persons[getnums()-3].style.width = '22%';
                persons[getnums()-4].style.width = '22%';
            }
        }
        else{
            for(let P of persons){
                P.style.width = 'calc((100% - 24px)/3)'; 
            }
            if(nums%3==1){
                persons[getnums()-1].style.width = '50%';
            }
            else if(nums%3==2){
                persons[getnums()-1].style.width = '40%';
                persons[getnums()-2].style.width = '40%';
            }
        }
        
    }
    check_only();
    show_add();
    count_people();
};
const getnums = () => {
    return document.querySelectorAll(".person.appear").length;
}

//時間
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    if(h>12){
        h = h - 12;
        var A = '下午 ';
    }
    else{
        var A = '上午 '
    }
    document.querySelector('.txt').innerHTML =  A + h + ":" + m ;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

const add_person = () => {
    let disp = document.querySelectorAll('.person.disappear');
    let disn = disp.length;
    disp[0].classList.remove('disappear');
    disp[0].classList.add('appear');
    check_odd();
}

const show_add =()=>{
    let disp = document.querySelectorAll('.person.disappear');
    let disn = disp.length;
    if(!disn){
        document.querySelector('.person_add').style.display='none'
    }
    else{
        document.querySelector('.person_add').style.display='block'
    }
}

const check_only=()=>{
    let persons = document.querySelectorAll(".person.appear");
    let main = document.querySelector('.main_box');
    if(main){
        if(persons.length==0){
            main.classList.add('only')
        }
        else{
            main.classList.remove('only')
        }
    }
    else{
        if(persons.length==1){
            persons[0].classList.add('only');

        }
        else{
            persons[0].classList.remove('only')
        }
    }
}

const count_people=()=>{
    let persons = document.querySelectorAll(".person.appear");
    let main = document.querySelector('.main_box');
    let num = main ? persons.length+1 : persons.length;
    document.querySelector('.nums_font').innerHTML = num;
}