$(document).ready( function() {

    var $attack1 = $('#attack1Btn')
    var $attack2 = $('#attack2Btn')
    var $attack3 = $('#attack3Btn')
    var $attackStat = $('#userAttack')
    var $pcAttackStat = $('#compAttack')
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
        }
        $('#attackChoice').text('Attack1')
    })    
    
    $attack1.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                }
            } else {
            $('#pcAttackChoice').text('Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                } 
            }     
        
    })

    $attack2.on('click', function(){
        var userAttack = getRandomInt(6)
        if (userAttack < 3) {
            $attackStat.text('You Missed')
        } else {
            $attackStat.text('Hit for 75 Dmg')
        }
        $('#attackChoice').text('Attack2')
    }) 
    
    $attack2.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                }
            } else {
            $('#pcAttackChoice').text('Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                } 
            }     
        
        })
 

    $attack3.on('click', function(){
        var userAttack = getRandomInt(6)
        if (userAttack < 3) {
            $attackStat.text('You Missed')
        } else {
            $attackStat.text('Hit for 150 Dmg')
        }
        $('#attackChoice').text('Attack3')
    })

    $attack3.on('click', function() {
        var compAttackChoice = getRandomInt(3)
        if (compAttackChoice == 1) {
            $('#pcAttackChoice').text('Attack1')
                var compAttack = getRandomInt(6)
                if (compAttack < 3) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 25 Dmg')
             } 
         } else if (compAttackChoice == 2) {
            $('#pcAttackChoice').text('Attack2')
                var compAttack = getRandomInt(6)
                if (compAttack < 4) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 75 Dmg')
                }
            } else {
            $('#pcAttackChoice').text('Attack3')
                var compAttack = getRandomInt(6)
                if (compAttack < 5) {
                $pcAttackStat.text('You Missed')
                } else {
                $pcAttackStat.text('Hit for 150 Dmg')
                } 
            }     
        
    })
})
  