console.log('1. Method에서 this = object')

const audio = {
    //속성
    //속성 title : 속성 '값'

    title : 'a',
    play(){
        console.log('play this',this);
        //여기 this는 해당 객체를 가리킨다
    }

}

audio.play();

audio.stop=function(){
    console.log('stop this',this);
}

/*
근데 바로 위에서 audio에 stop메소드를 부를 수 있었던 것은

const audio = {

    title : 'a';

    play(){
        console.log('play this', this);
    }

    
    stop(){
        console.log('stop this', this);
    }
}
*/

audio.stop();
//결국은 stop()도 메소드이기 때문에, play()를 했을 때 나오는 객체를 똑같이 출력함


console.log("========================")
console.log('2. function에서 this = window object')

function playAudio(){
    console.log(this);
}

playAudio();

console.log("========================")
console.log('3. constructor 함수에서 this = 빈 객체')

function piano(title){
    this.title =title;
    console.log(this);
}

const Pianoe = new piano('a');

console.log("========================")
console.log('4. 좀 더 깊게 메소드 안에 있는 함수의 this는 뭐가나올까?')

const sound = {
    title : 'audio',
    categories : [ 'rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function(category){
            console.log(`title : ${this.title}, category : ${category}`);
        })
    }
}

sound.displayCategories();

/*
그러나 console창의 결과는 어떻게 되었을까?
title : undefined, category : rock
title : undefined, category : pop
title : undefined, category : hiphop
이렇게 뜨게 되었다.

const sound = {
    title : 'audio',
    categories : [ 'rock', 'pop', 'hiphop'],
    displayCategories(){
        this(1).categories.forEach(function(category){
            console.log(`title : ${this(2).title}, category : ${category}`);
        })
    }
}

예상으로는 this(2)가 audio로 들어갈 줄 알았는데, 아니다
왜냐? this(2)는 displayCategories()라는 함수 안 에 들어가 있는 것이기 때문이다.
this(1)이 method안에 있는 것이다

함수 안에 들어가 있는 this는 window object를 가리킨다
그러나 window object안에는 title이라는 속성이 들어가 있지 않다.
그러니까 title을 뽑아 봤을 때 undefined가 뜨는 것이다.
*/

console.log("========================")
console.log('5. 함수 안에 있는 this가 다른 걸 참조하게 하고 싶은데 어떻게 해야할까? ')
const soundd = {
    title: `audio`,
    categories: ['rock', 'pop', 'hiphop'],
    displayCategories(){
        this.categories.forEach(function(category){
            console.log(`title : ${this.title}, category:${category}`);
        }, {title:`audio`})
    }
}

soundd.displayCategories();

/*
함수안에 있는 this가 다른 걸 참조하게 하고 싶다면,
두 번째 매개변수로 '다른 걸' 추가해라
*/