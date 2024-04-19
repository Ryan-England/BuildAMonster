class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.aKey = null;
        this.dKey = null;
        this.speed = 40;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkF.png");
        my.sprite.lArm = this.add.sprite(this.bodyX -95, this.bodyY +30, "monsterParts", "arm_darkA.png");
        my.sprite.lArm.flipX = true;
        my.sprite.rArm = this.add.sprite(this.bodyX +95, this.bodyY +30, "monsterParts", "arm_darkA.png");
        my.sprite.lLeg = this.add.sprite(this.bodyX -50, this.bodyY +150, "monsterParts", "leg_darkD.png");
        my.sprite.lLeg.flipX = true;
        my.sprite.rLeg = this.add.sprite(this.bodyX +50, this.bodyY +150, "monsterParts", "leg_darkD.png");
        my.sprite.rEar = this.add.sprite(this.bodyX +50, this.bodyY -100, "monsterParts", "detail_dark_ear.png");
        my.sprite.lEar = this.add.sprite(this.bodyX -50, this.bodyY -100, "monsterParts", "detail_dark_ear.png");
        my.sprite.lEar.flipX = true;
        my.sprite.anten = this.add.sprite(this.bodyX, this.bodyY -120, "monsterParts", "detail_dark_antenna_small.png");
        my.sprite.lEye = this.add.sprite(this.bodyX +40, this.bodyY, "monsterParts", "eye_yellow.png");
        my.sprite.rEye = this.add.sprite(this.bodyX -40, this.bodyY, "monsterParts", "eye_yellow.png");
        my.sprite.highREye = this.add.sprite(this.bodyX +40, this.bodyY -60, "monsterParts", "eye_angry_red.png");
        my.sprite.highLEye = this.add.sprite(this.bodyX -40, this.bodyY -60, "monsterParts", "eye_angry_red.png");
        my.sprite.highLEye.flipX = true;
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY + 39, "monsterParts", "mouthI.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY +45, "monsterParts", "mouthB.png");
        my.sprite.fangs.visible = false;

        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        });
        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        });

        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if (this.aKey.isDown) {
            for (part in my.sprite) {
                my.sprite.part.x - this.speed;
            } 
            my.sprite.lArm.visible = false;
        }
        if (this.dKey.isDown) {
            for (part in my.sprite) {
                my.sprite.part.x + this.speed;
            }
            my.sprite.rArm.visible = false;
            console.log("D key is down (polling)")
        }
    }

}