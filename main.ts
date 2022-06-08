game.splash("BENVINGUTS A L'ESPAI", "Apreta A per començar i B per disperar")
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . . . 2 f f 2 . . . . . . 
    . . . . . . . c 5 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 4 . . . . . . . 
    . . . . . . e e 5 2 . . . . . . 
    . . . 5 e 5 e 4 5 2 5 e 5 . . . 
    . . 5 e e c c c 2 2 2 e e 5 . . 
    . 5 e e 2 2 4 5 5 5 2 2 e e 5 . 
    . e e f f f c c 2 2 f f 2 2 e . 
    . e 2 2 2 2 2 4 4 5 4 5 4 2 e . 
    . e 2 e 2 2 2 2 4 4 5 5 4 4 2 . 
    . e 2 2 2 2 2 2 4 4 4 5 5 4 2 . 
    `, SpriteKind.Player)
mySprite.setPosition(77, 32)
controller.moveSprite(mySprite, 100, 100)
