export let Resource = {
    horse: {
        path: [
            {x: -243, y: 236},
            {x: 150, y: 285}
        ], metrics: {
            width: 200,
            height: 179
        }, src: 'images-startup/horse.png'
    },
    tree: {
        path: [ {x: -230, y: 497},  {x: -230, y: -7}], metrics: {
            width: 615, height: 664
        }, src: 'images-startup/tree.png'
    },
    leftTxt: {
        path: [ {x: -338, y: 15},  {x: 135, y: 27}], metrics: {
            width: 335, height: 178
        }, src: 'images-startup/left-txt.png'
    },
    rightTxt: {
        path: [ {x: 604, y: 0},  {x: 346, y: 107}], metrics: {
            width: 195, height: 150
        }, src: 'images-startup/right-txt.png'
    },
    moveTxt: {
        path: [ {x: 604, y: 0},  {x: 346, y: 207}], metrics: {
            width: 312, height: 92
        }, src: 'images-startup/move-txt.png'
    },
    logo: {
        path: [ {x: -10, y: -105},  {x: 27, y: 10}], metrics: {
            width: 120, height: 120
        }, src: 'images-startup/logo.png'
    },
    bird: {
        path: [ {x: 585, y: 30},  {x: 500, y: 58}],
        metrics: {
            width: 85, height: 116
        },
        src: 'images-startup/bird.png'
    },
    //bird: [{x: 585, y: 30}, {x: 500, y: 58},
    //    [
    //        [41, 57],
    //        [85,116]
    //    ],
    //    'images-startup/bird.png']
    duck: {
        path: [{x: 610, y: 510}, {x: 400, y: 390}, {x: 530, y: 400}],
        loop: [1, 2],
        rate: 2,
        metrics: {
            width: 70, height: 50
        },
        src: 'images-startup/duck.png'
    }
}