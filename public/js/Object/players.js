export default class players {
    
    constructor(scene,x,y){
        this.scene=scene;
        

        //create animation
        const anims = this.scene.anims;
         // 상하좌우 멈출 경우 설정
        //  anims.create({
        //     key: 'down-stop',
        //     frames: anims.generateFrameNumbers('player', { frames : [0]}),
        //     frameRate: 3,
        //     repeat: -1
        // });

        // anims.create({
        //     key: 'left-stop',
        //     frames: anims.generateFrameNumbers('player', { frames : [4]}),
        //     frameRate: 3,
        //     repeat: -1
        // });

        // anims.create({
        //     key: 'right-stop',
        //     frames: anims.generateFrameNumbers('player', { frames : [8]}),
        //     frameRate: 3,
        //     repeat: -1
        // });

        // anims.create({
        //     key: 'up-stop',
        //     frames: anims.generateFrameNumbers('player', { frames : [12]}),
        //     frameRate: 3,
        //     repeat: -1
        // });


        // 이벤트 설정
        anims.create({
			key: 'down',
			frames: anims.generateFrameNumbers('player', {  start: 0, end: 3 }),
			frameRate: 8,
			repeat: 0
		});

		anims.create({
			key: 'left',
			frames: anims.generateFrameNumbers('player', {  start: 4, end: 7 }),
			frameRate: 8,
			repeat: 0
		});

		anims.create({
			key: 'right',
			frames: anims.generateFrameNumbers('player', {  start: 8, end: 11  }),
			frameRate: 8,
			repeat: 0
		});

        anims.create({
			key: 'up',
			frames: anims.generateFrameNumbers('player', {  start: 12, end: 15  }),
			frameRate: 8,
			repeat: 0
		});

        this.sprite = scene.physics.add.sprite(x,y,"player",0).setSize(22,33).setOffset(23,27);

        this.sprite.anims.play("down"); // Player가 정지해있는 경우 animation 정의.

        this.keys = scene.input.keyboard.createCursorKeys();

    
    }
    static preload(){

    }

    update(){
        const keys= this.keys;
        const sprite = this.sprite;
        const speed = 200;
        const prevVelocity = sprite.body.velocity.clone();


        sprite.body.setVelocity(0); //  player가 정지했을 때, 마지막 프레임 형태로 정지함. 

        if (keys.left.isDown)
		{
            sprite.body.setVelocityX(-speed);
            sprite.body.setVelocityY(0);
            // sprite.setFlipX(true);
            // sprite.anims.play('left', true);
		}
		else if (keys.right.isDown)
		{
            sprite.body.setVelocityX(speed);
            sprite.setFlipX(false);
            sprite.setVelocityY(0);
			// sprite.anims.play('right', true);
		}

        if(keys.up.isDown)
		{
            sprite.body.setVelocityY(-speed);
            sprite.setVelocityX(0);
            // sprite.anims.play('up', true)	
        } 
        else if(keys.down.isDown){
            sprite.body.setVelocityY(speed);
            sprite.body.setVelocityX(0);            
            // sprite.anims.play('down', true)
          
        }

        sprite.body.velocity.normalize().scale(speed);


        if(keys.left.isDown){
            sprite.anims.play('left', true);
        }else if(keys.right.isDown){
            sprite.anims.play('right', true);
        }else if(keys.down.isDown){
            sprite.anims.play('down', true);
        }else if(keys.up.isDown){
            sprite.anims.play('up', true);
        }else{
            sprite.anims.stop();
               // If we were moving, pick and idle frame to use
               if (prevVelocity.y < 0) sprite.setTexture("player", 0);
               else sprite.setTexture("player", 46);
        } 
        
        
		// else{
        //     sprite.setVelocityX(0);
        //     sprite.setVelocityY(0);

        //     if(status == "down"){
        //         sprite.anims.play('down-stop', true)
        //     } else if(status == "left"){
        //         sprite.anims.play('left-stop', true)
        //     } else if(status == "right"){
        //         sprite.anims.play('right-stop', true)
        //     } else if(status == "up"){
        //         sprite.anims.play('up-stop', true)
        //     }
        // }
    }
    
}