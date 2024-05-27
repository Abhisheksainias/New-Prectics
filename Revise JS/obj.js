const ob={
    fname: 'Abhishek',
    lname: 'Saini',
    age:    23,
    email: 'abhi@gmail.com',
    favmovie: ['Bahubali', 'Dhoom', 'dhamal'],
    salary: function(){
        return 25000;
    },
    fullname: function(){
        return this.fname + ' ' + this.lname;
    }
}
console.log(ob.favmovie[1]); // Abhishek