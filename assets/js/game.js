// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
console.log(enemyNames);
console.log(enemyNames.length);
for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index");
  }

console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);

var enemyHealth = 50;
var enemyAttack = 12;



var fight = function(enemyName) {
        window.alert("Welcome to Robot Gladiators!");
        while(enemyHealth > 0){
  

        var promptFight = window.prompt("Would you like to FIGHT or SKIP the battle? Enter FIGHT or SKIP to choose. ");
  
        console.log(promptFight);

            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    
    if (promptFight === "fight" || promptFight === "FIGHT"){

        enemyHealth = enemyHealth - playerAttack;

        // Log a resulting message to the console so we know that it worked.
        console.log(
        playerName + " attacked " + enemyName + ". " +enemyName + " now has " + enemyHealth + " health remaining. ");

            if (enemyHealth <=0){
            window.alert(enemyName + " has died! ");
            }
            else {
            window.alert(enemyName + " still has " + enemyHealth + " health left. ")
            }
            // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
            playerHealth = playerHealth - enemyAttack;

            // Log a resulting message to the console so we know that it worked.

         console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining .");

            if (playerHealth <= 0){
            window.alert(playerName + " has died! ");
            }
            else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
            }
        } else if (promptFight === "skip"  || promptFight === "SKIP"){
             var confirmSkip = window.confirm(" Are you sure you'd like to quit? ");
             if(confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!! ");
            playerMoney = playerMoney - 2;
            } else{
            fight ();
            }
        } else {
            window.alert ("You need to choose a valid option. Try Again! ");
        }
    }
};




for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
  
