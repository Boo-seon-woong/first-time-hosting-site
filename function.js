function nightdayhandler(self){
    var a=document.querySelector;
    if(document.querySelector('.tog').value === 'night'){
        document.querySelector('body').style.backgroundColor = 'black';
        document.querySelector('body').style.color = 'white';
        document.querySelector('.ver').style.color = 'white';
        document.querySelector('.container').style.border = '1px solid white';
        document.querySelector('.title').style.border = '1px solid white';
        document.querySelector('.icon').style.backgroundColor = 'rgb(208,208,208)';
        document.querySelector('.tog').value='day';
        document.querySelectorAll('hr')[0].style = 'border:4px solid rgb(67,38,14);margin-bottom:0px;';
        if(document.documentElement.clientWidth > 1000){
            document.querySelector('.ver').style.borderRight = '1px solid white'
        }else{
            document.querySelector('ver').style.borderBottom = '1px solid white'
        }
    }else{
        document.querySelector('body').style.backgroundColor = 'rgb(208, 208, 208)';
        document.querySelector('body').style.color = 'black';
        document.querySelector('.ver').style.color = 'black';
        document.querySelector('.container').style.border = '1px solid black';
        document.querySelector('.title').style.border = '1px solid black';
        document.querySelector('.icon').style.backgroundColor = 'rgb(208,208,208)';
        document.querySelector('.tog').value='night';
        document.querySelectorAll('hr')[0].style = 'border:4px solid black;margin-bottom:0px;';
        if(document.documentElement.clientWidth > 1000){
            document.querySelector('.ver').style.borderRight = '1px solid black'
        }else{
            document.querySelector('ver').style.borderBottom = '1px solid black'
        }
    }
}