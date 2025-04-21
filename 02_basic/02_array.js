 const marvel_hero=["thor ","ironmen","spidermen"]
 const dc_hero=["supermen","batmen","flash","flash","superman"]

//PUSH METHOD

//  marvel_hero.push(dc_hero)              //=>[ 'thor ', 'ironmen', 'spidermen', [ 'supermen', 'batmen', 'flash' ] ]



// CONCAT METHOD

//  const all_heros = marvel_hero.concat(dc_hero) //=>[ 'thor ', 'ironmen', 'spidermen', 'supermen', 'batmen', 'flash' ]
//  console.log(all_heros);


//  ****IMP CONTACT & SPREAD OPERATOR ARRAY METHOD****

const all_heros = [...marvel_hero,...dc_hero] //=>[ 'thor ', 'ironmen', 'spidermen', 'supermen', 'batmen', 'flash' ]
// console.log(all_heros); //[...IMP,...]
// const all_hero = all_heros.flat(Infinity) 
// console.log(all_hero);


// 
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array =another_array.flat(Infinity)//=>[
                                                                1, 2, 3, 4, 5,
                                                                6, 7, 6, 7, 4,
                                                                5
                                                            // ]
// console.log(real_another_array);


// of
let score1 = 100
let score2 = 200
let score3 = 300
// console.log(Array.of(score1,score2,score3));


console.log(Array.isArray("taha"));//=>false
console.log(Array.from("taha"));//=>[ 't', 'a', 'h', 'a' ]
console.log(Array.from({name:"taha"})); //interesting =>[]

