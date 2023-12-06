//Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
let movie1=new movie("Leo","Seven Screen Studio","pg13");
let movie2=new movie('bigil','AGS Entertainment','r');
console.log(movie1,movie2);
