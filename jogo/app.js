new Vue ({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth:100,
        gameIsRunning: false,
        turns: [],
        // imgv: false
    },
    methods:{
        startGame: function (){
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns=[];
        },
        attack: function() {
            var max=15;
            var min=3;
            var max1=12;
            var min2=3;
            var damage = Math.max(Math.floor(Math.random()*max)+ 1, min);
            var damage2 = Math.max(Math.floor(Math.random()*max1)+ 1, min2);
            this.imgv=true;
            this.playerHealth -= damage;
            this.turns.unshift ({
                isPlayer: true,
                text : 'Player hits Monster for'+' ' + damage
                
            });
            this.monsterHealth -= damage2;
            this.turns.unshift ({
                isPlayer: false,
                text : 'Monster hits Player for'+' ' + damage2
            });


            if(this.monsterHealth <= 0){
                alert ('YOU WON!');
                this.gameIsRunning = false;
                this.monsterHealth = 0;
                return ;
            }
            else if(this.playerHealth <= 0) {
                alert ('YOU LOSE!');
                this.gameIsRunning = false;  
                this.playerHealth = 0;
                return ;

            }
          
            


        },
        specialAttack: function (){
            var max=20;
            var min=10;
            var max1=12;
            var min2=3;
            var damage = Math.max(Math.floor(Math.random()*max)+ 1, min);
            var damage2 = Math.max(Math.floor(Math.random()*max1)+ 1, min2);
            this.monsterHealth -= damage;
            this.turns.unshift ({
                isPlayer: true,
                text : 'Player hits Monster with a special attack for'+' '+ damage
            });
            this.playerHealth -= damage2;
            this.turns.unshift ({
                isPlayer: false,
                text : 'Monster hits Player for'+' '+ damage2
            });

            if(this.monsterHealth <= 0){
                alert ('YOU WON!');
                this.gameIsRunning = false;
                this.monsterHealth = 0;
                return ;
            }
            else if(this.playerHealth <= 0) {
                alert ('YOU LOSE!');
                this.gameIsRunning = false;
                this.playerHealth = 0;
                return ;

            }


        },
        heal:function(){
            var max=20;
            var min=10;
            var max1=12;
            var min2=3;
            var heal = Math.max(Math.floor(Math.random()*max)+ 1, min);
            this.playerHealth += heal;
            this.turns.unshift ({
                isPlayer: true,
                text : 'Player heals himself for'+' '+ heal
            });
            
            if(this.monsterHealth <= 0){
                alert ('YOU WON!');
                this.gameIsRunning = false;
                return ;
            }

            else if(this.playerHealth <= 0) {
                alert ('YOU LOSE!');
                this.gameIsRunning = false;
                return ;
            }
            else if (this.playerHealth >= 100){
                alert ('You cant heal you right now');
                this.playerHealth = 100;
                
            }
            var damage2 = Math.max(Math.floor(Math.random()*max1)+ 1, min2);
            this.playerHealth -= damage2;
            this.turns.unshift ({
                isPlayer: false,
                text : 'Monster hits Player for'+' '+ damage2
            });
            return;
        
        },
        giveUp:function(){
            this.playerHealth-= heal;
            this.turns.unshift ({
                isPlayer: true,
                text : 'The Player give up! Monster wins.'
            });
            this.playerHealth = 0;
        }
    },
});
