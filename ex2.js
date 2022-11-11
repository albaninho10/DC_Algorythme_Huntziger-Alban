//Écrivez un algorithme JavaScript pour trouver le plus grand des
//trois entiers donnés.(tableau donné en paramètre de la fonction)


function findBiggest(array) {
    let biggest = Math.max.apply(Math, array);
    console.log(biggest)
    return biggest;
}
 
findBiggest([976760,776856,868798]);