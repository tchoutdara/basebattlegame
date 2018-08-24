// o(*_*)o //
//  ( .)/ //
//  0 0  //


$(document).ready( function() {

    var $attack1 = $('#attack1Btn')
    var $attack2 = $('#attack2Btn')
    var $attack3 = $('#attack3Btn')
    var $attackStat = $('#userAttack')
    var $pcAttackStat = $('#compAttack')
    var $userBase = $('#userBase')
    var $pcBase = $('#pcBase')
    var compHealth = 1000
    var userHealth = 1000
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max) + 1);
      }

    $attack1.on('click', function(){          
        var userAttack = getRandomInt(6)
        if (userAttack < 3) {
            $attackStat.text('You Missed')
        } else {
            $attackStat.text('Hit for 25 Dmg')
            compHealth -= 25
            $pcBase.text(compHealth)
        }
        $('#attackChoice').text('Choosen Attack: Attack1')
    })    
    
    $attack1.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Choosen Attack: Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
                userHealth -= 25
                $userBase.text(userHealth)

             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Choosen Attack: Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                userHealth -= 75
                $userBase.text(userHealth)
                }
            } else {
            $('#pcAttackChoice').text('Choosen Attack: Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                userHealth -= 150
                $userBase.text(userHealth)
                } 
            }     
        
    })

    $attack2.on('click', function(){
        var userAttack = getRandomInt(6)
        if (userAttack < 3) {
            $attackStat.text('You Missed')
        } else {
            $attackStat.text('Hit for 75 Dmg')
            compHealth -= 75
            $pcBase.text(compHealth)
        }
        $('#attackChoice').text('Choosen Attack: Attack2')
    }) 
    
    $attack2.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Choosen Attack: Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
                userHealth -= 25
                $userBase.text(userHealth)
             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Choosen Attack: Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                userHealth -= 75
                $userBase.text(userHealth)
                }
            } else {
            $('#pcAttackChoice').text('Choosen Attack: Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                userHealth -= 150
                $userBase.text(userHealth)
                } 
            }     
        
        })
 

    $attack3.on('click', function(){
        var userAttack = getRandomInt(6)
        if (userAttack < 3) {
            $attackStat.text('You Missed')
        } else {
            $attackStat.text('Hit for 150 Dmg')
            compHealth -= 150
            $pcBase.text(compHealth)
        }
        $('#attackChoice').text('Choosen Attack: Attack3')
    })

    $attack3.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Choosen Attack: Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
                userHealth -= 25
                $userBase.text(userHealth)
             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Choosen Attack: Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                userHealth -= 75
                $userBase.text(userHealth)
                }
            } else {
            $('#pcAttackChoice').text('Choosen Attack: Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                userHealth -= 150
                $userBase.text(userHealth)
                } 
            }     
        
    })
})
  