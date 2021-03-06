(function(){
    'use strict';

    var files =[
        'images/slide_img/slide01.jpg',
        'images/slide_img/slide02.jpg',
        'images/slide_img/slide03.jpg',
        'images/slide_img/slide04.jpg'
    ];

    var currentNum = 0;
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var target = document.getElementById('target');
    var thumbnails = document.getElementById('thumbnails');

    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var timer;

    function createThumbnails(){
        var i;
        var li;
        var img;
        for(i = 0; i < files.length; i++) { 
            li = document.createElement('li');
            li.setAttribute('data-index',i);
            li.addEventListener('click',function(){
                target.src = this.children[0].src;
                thumbnails.children[currentNum].className = '';
                currentNum = this.dataset.index;
                this.className = 'current';
            });
            img = document.createElement('img');
            img.src = files[i];
            li.appendChild(img);
            thumbnails.appendChild(li);    
        }
    }

    function playSlideshow(){
        timer = setTimeout(function(){
            next.click();
            playSlideshow();
        },1500);
    }
    
    createThumbnails();

    thumbnails.children[currentNum].className = 'current';

    prev.addEventListener('click',function(){
        thumbnails.children[currentNum].className = '';
        currentNum--;
        if(currentNum < 0) {
            currentNum = files.length - 1;
        }
        target.src = files[currentNum];
        thumbnails.children[currentNum].className = 'current';
    });

    next.addEventListener('click',function(){
        thumbnails.children[currentNum].className = '';
        currentNum++;
        if( currentNum > files.length - 1) {
             currentNum = 0;
        }
        target.src = files[currentNum];
        thumbnails.children[currentNum].className = 'current';
    });

    play.addEventListener('click',function(){
        playSlideshow();
        this.className ='hidden';
        pause.className = '';
    })

    pause.addEventListener('click',function(){
        clearTimeout(timer);
        this.className ='hidden';
        play.className = '';
    })

})();

