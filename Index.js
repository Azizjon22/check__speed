const MAX__SPEED = 70;
const KM_PER_POINT = 5;
const MAX__POINT = 12;

sheckSpeed(200)

function sheckSpeed(speed) {
    if(speed < MAX__SPEED + KM_PER_POINT)
    console.log('ok')
    else{
        const points = Math.floor((speed - MAX__SPEED) / KM_PER_POINT);
        if(points >= MAX__POINT) {
            console.log('guvohnama olib qoyiladi');
        }
        else{
            console.log(points);
        }
    }
}