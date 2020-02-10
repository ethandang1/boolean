controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Box = false
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Box = true
})
let projectile: Sprite = null
let Box = false
Box = false
game.onUpdateInterval(500, function () {
    if (Box) {
        projectile = sprites.createProjectileFromSide(img`
8 8 f 1 9 9 8 1 1 8 9 9 1 f 8 8 
8 f 6 6 6 6 6 6 6 6 6 6 6 6 f 8 
f 6 f f f f f f f f f f f f 6 f 
1 6 f 9 f 6 8 1 1 8 6 f 9 f 6 1 
9 6 f f 1 f 9 8 8 9 f 1 f f 6 9 
9 6 f 6 f 9 f 6 6 f 9 f 6 f 6 9 
8 6 f 8 9 f 1 f f 1 f 9 8 f 6 8 
1 6 f 1 8 6 f 9 9 f 6 8 1 f 6 1 
1 6 f 1 8 6 f 9 9 f 6 8 1 f 6 1 
8 6 f 8 9 f 1 f f 1 f 9 8 f 6 8 
9 6 f 6 f 9 f 6 6 f 9 f 6 f 6 9 
9 6 f f 1 f 9 8 8 9 f 1 f f 6 9 
1 6 f 9 f 6 8 1 1 8 6 f 9 f 6 1 
f 6 f f f f f f f f f f f f 6 f 
8 f 6 6 6 6 6 6 6 6 6 6 6 6 f 8 
8 8 f 1 9 9 8 1 1 8 9 9 1 f 8 8 
`, Math.randomRange(0, 100), Math.randomRange(0, 100))
    } else if (Box) {
        projectile = sprites.createProjectileFromSide(img`
2 2 f 1 4 4 2 1 1 2 4 4 1 f 2 2 
2 f 5 5 5 5 5 5 5 5 5 5 5 5 f 2 
f 5 f f f f f f f f f f f f 5 f 
1 5 f 4 f 5 2 1 1 2 5 f 4 f 5 1 
4 5 f f 1 f 4 2 2 4 f 1 f f 5 4 
4 5 f 5 f 4 f 5 5 f 4 f 5 f 5 4 
2 5 f 2 4 f 1 f f 1 f 4 2 f 5 2 
1 5 f 1 2 5 f 4 4 f 5 2 1 f 5 1 
1 5 f 1 2 5 f 4 4 f 5 2 1 f 5 1 
2 5 f 2 4 f 1 f f 1 f 4 2 f 5 2 
4 5 f 5 f 4 f 5 5 f 4 f 5 f 5 4 
4 5 f f 1 f 4 2 2 4 f 1 f f 5 4 
1 5 f 4 f 5 2 1 1 2 5 f 4 f 5 1 
f 5 f f f f f f f f f f f f 5 f 
2 f 5 5 5 5 5 5 5 5 5 5 5 5 f 2 
2 2 f 1 4 4 2 1 1 2 4 4 1 f 2 2 
`, Math.randomRange(0, -100), Math.randomRange(0, -100))
    } else {
        projectile = sprites.createProjectileFromSide(img`
a a f 1 c c a 1 1 a c c 1 f a a 
a f b b b b b b b b b b b b f a 
f b f f f f f f f f f f f f b f 
1 b f c f b a 1 1 a b f c f b 1 
c b f f 1 f c a a c f 1 f f b c 
c b f b f c f b b f c f b f b c 
a b f a c f 1 f f 1 f c a f b a 
1 b f 1 a b f c c f b a 1 f b 1 
1 b f 1 a b f c c f b a 1 f b 1 
a b f a c f 1 f f 1 f c a f b a 
c b f b f c f b b f c f b f b c 
c b f f 1 f c a a c f 1 f f b c 
1 b f c f b a 1 1 a b f c f b 1 
f b f f f f f f f f f f f f b f 
a f b b b b b b b b b b b b f a 
a a f 1 c c a 1 1 a c c 1 f a a 
`, Math.randomRange(0, -100), Math.randomRange(0, -100))
    }
})
