// Section 1
// 1. The difference between interpolation and
// concatenation is that concatenation works with
// strings only. An example of a concatenation is
// "Hello, " + "World" = "Hello, World". 
// Interpolation evalutes a string containing
// one or more placeholders and yields a result
// in which the placesholders are replaced by their
// corresponding values. An example of interpolation 
// is: 
// var dogs = 2;
// console.log('I have ${dogs} dogs');
// The output will be: I have 2 dogs

// 2. The aceonym DRY stands for Don't Repeat Yourself.
// We should pay attention to DRY for a few reasons:
// it is easier to maintain, it is easier to read,
// it is easier to resue, and it performs better.


//Section 2
/*
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(a + b === c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 !== '48');
*/


//Section 3

// Infinite loop? Yes, this is a infinite loop
// because there is no terminating condition.

// Infinite loop II: No, this is not an infinite
// loop because it has a terminating condition.
// The expected outcome is that 'Do not run this loop'
// will be logged to the console once, and then runProgram
// will be set to false, so nothing else will be logged.

// Reading code: I think the code will log "A" the first time,
// then "AA" the second time, then "AAA" the 3rd time, etc. 
// up until 20 A's in a row.

/*
let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);
*/

// The result was almost what I expected. I forgot that
// i started at zero and went to 20, so there were 21 A's.


//Section 4

// For loops: The key difference between a for loop and a while
// loop is that a while loop can run indefinitely, while a for loop
// will run for a fixed number of times. They are similar in that they
// are both used to tell our programs to take repeated action.

// For loop I

/*
for (let i = 0; i < 1000; i++) {
	console.log(i);
}
*/

// For loop control statement:
// The first part of the control statement is: the initialization
// which in this case is i = 0.
// The second part of the control statement is: the condition,
// which in this case is i < 100.
// The third part of the control statement is: the finalExpression,
// which in this case is i ++.

// For loop in reverse:

/*
for (let i = 999; i >= 0; i--) {
	console.log(i);
}
*/

// More counting:

/*
for (let i = 1; i <= 10; i++) {
	console.log(`The value of i is: ${i} of 10`);
}
*/


// Section 5

// Part I:
// 1. Opened terminal app using command + spacebar
// 2. Amandas-MacBook-Pro:6_11_2018_CommandLine_FolderStructure amandamolde$ mkdir homework_part_2
// 	  Amandas-MacBook-Pro:6_11_2018_CommandLine_FolderStructure amandamolde$ cd homework_part_2/
// 3. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mkdir death_star
//	  Amandas-MacBook-Pro:homework_part_2 amandamolde$ cd death_star 
//	  Amandas-MacBook-Pro:death_star amandamolde$ touch darth_vader.txt princess_leia.txt storm_tropper.txt
// 4. Amandas-MacBook-Pro:death_star amandamolde$ cd ..
//	  Amandas-MacBook-Pro:homework_part_2 amandamolde$ mkdir galaxy_far_far_away
//	  Amandas-MacBook-Pro:homework_part_2 amandamolde$ cd galaxy_far_far_away/
//	  Amandas-MacBook-Pro:galaxy_far_far_away amandamolde$ mkdir tatooine
//	  Amandas-MacBook-Pro:galaxy_far_far_away amandamolde$ cd tatooine/
//	  Amandas-MacBook-Pro:tatooine amandamolde$ touch luke.txt ben_kenobi.txt
// 5. Amandas-MacBook-Pro:tatooine amandamolde$ mkdir  millenium_falcon
//	  Amandas-MacBook-Pro:tatooine amandamolde$ cd millenium_falcon/
//	  Amandas-MacBook-Pro:millenium_falcon amandamolde$ touch han_solo.txt chewbaca.txt

// Part II:
// 1. Amandas-MacBook-Pro:millenium_falcon amandamolde$ cd ..
// 	  Amandas-MacBook-Pro:tatooine amandamolde$ mv ben_kenobi.txt obi_wan.txt

// Part III:
// 2. Amandas-MacBook-Pro:homework_part_2 amandamolde$ cp death_star/storm_tropper.txt galaxy_far_far_away/tatooine

// Part IV:
// 3. Amandas-MacBook-Pro:tatooine amandamolde$ mv luke.txt millenium_falcon
// 	  Amandas-MacBook-Pro:tatooine amandamolde$ mv obi_wan.txt millenium_falcon
// 4. Amandas-MacBook-Pro:tatooine amandamolde$ mv millenium_falcon ..
// 5. Amandas-MacBook-Pro:galaxy_far_far_away amandamolde$ mv millenium_falcon ../death_star
// 6. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv death_star/princess_leia.txt death_star/millenium_falcon


// Part V:
// 7. Amandas-MacBook-Pro:homework_part_2 amandamolde$ rm death_star/millenium_falcon/obi_wan.txt 

// Part VI:
// 8. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mkdir galaxy_far_far_away/yavin_4
// 9. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv death_star/millenium_falcon galaxy_far_far_away/yavin_4/
// 10. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mkdir galaxy_far_far_away/yavin_4/x_wing
// 11. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/yavin_4/millenium_falcon/princess_leia.txt galaxy_far_far_away/yavin_4/
//	   Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/yavin_4/millenium_falcon/luke.txt galaxy_far_far_away/yavin_4/x_wing/
// 12. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/yavin_4/millenium_falcon/ galaxy_far_far_away/
//	   Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/yavin_4/x_wing/ galaxy_far_far_away/
// 13. Amandas-MacBook-Pro:death_star amandamolde$ mkdir tie_fighter_1 tie_fighter_2 tie_fighter_3
// 14. Amandas-MacBook-Pro:death_star amandamolde$ mv darth_vader.txt tie_fighter_1 
// 15. Amandas-MacBook-Pro:death_star amandamolde$ cp storm_tropper.txt tie_fighter_2 tie_fighter_3
//	   cp: tie_fighter_2 is a directory (not copied).
//	   Amandas-MacBook-Pro:death_star amandamolde$ cp storm_tropper.txt tie_fighter_2
// 16. Amandas-MacBook-Pro:death_star amandamolde$ mv tie_fighter_1 ../galaxy_far_far_away/
// 	   Amandas-MacBook-Pro:death_star amandamolde$ mv tie_fighter_2 ../galaxy_far_far_away/
// 	   Amandas-MacBook-Pro:death_star amandamolde$ mv tie_fighter_3 ../galaxy_far_far_away/

// Part VII:
// 6. Amandas-MacBook-Pro:homework_part_2 amandamolde$ rm -r galaxy_far_far_away/tie_fighter_2 galaxy_far_far_away/tie_fighter_3

// Part VIII:
// 7. Amandas-MacBook-Pro:homework_part_2 amandamolde$ touch galaxy_far_far_away/x_wing/the_force.txt
// 8. Amandas-MacBook-Pro:homework_part_2 amandamolde$ rm -r death_star/
// 9. Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/
//	  Amandas-MacBook-Pro:homework_part_2 amandamolde$ mv galaxy_far_far_away/x_wing/ galaxy_far_far_away/yavin_4/
