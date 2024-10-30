// class person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }

//     play () {
//         console.log(`${this.name} is playing. He is ${this.age} years old`);
//     }
// }

// const person1 = new person("Marwan", 12) ;
// const person2 = new person("Safwan", 14) ;
// const person3 = new person("Mahtab", 21) ;

// person1.play()
// person2.play()
// person3.play()



const sentence =
    "My school is ten kilometers away from my home, and I go by the school bus every morning.I love to go to school. I learn so many new things at school every day. There are many different subjects I study at school.I study languages like Sanskrit, Hindi and English,and other subjects like mathematics, science and social studies.My school is very beautiful.There are nice, lush gardens with beautiful plants and trees. In spring time the blooming flowers are a spectacle. My school has a well equipped library, and I enjoy reading books.There are also computers in the school for our use.";

    const matches = sentence.match(/school/gi);
    const occurrences = matches ? matches.length : 0;
    // console.log(occurrences)

    // const position = sentence.search(/school/i);
    
    function linearSearch(arr,val) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === val) {
                return i;
            }
            return 'not found!';
        }
    }

    console.log(linearSearch(['a', 'b', 'c', 'd', 'c'], 'c'));