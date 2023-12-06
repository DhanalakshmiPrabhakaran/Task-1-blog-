//The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided
class movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }

}
let movie1=new movie("Leo","AGS");
let movie2=new movie('Bigil','Seven Screen Entertainment','PG');
console.log(movie1,movie2);
