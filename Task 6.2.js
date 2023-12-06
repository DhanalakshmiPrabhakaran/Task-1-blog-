//Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
}
//this function will give a list of movies with the rating of PG
function getPG(mov) {
        let movies=[];
        for (let i = 0; i < mov.length; i++) {
            if (mov[i].rating == "PG") {
                movies.push(mov[i].title);
               // console.log(movies);
             }
             
        return movies;
    }

}

let mov1=new movie("Leo","Seven Screen Studio","PG");
let mov2=new movie('bigil','AGS Entertainment','r');
let arr = [mov1, mov2]
console.log(getPG(arr));

