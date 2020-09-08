function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(50, 50);
        ctx.lineTo(75, 25);
        ctx.lineTo(125, 25);
        ctx.lineTo(150, 50);
        ctx.lineTo(125, 75);
        ctx.lineTo(75, 75);
        ctx.lineTo(50, 50);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100, 45);
        ctx.lineTo(75, 25);
        ctx.lineTo(125, 25);
        ctx.lineTo(100, 45);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(100, 45);
        ctx.lineTo(100, 75);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(65, 35);
        ctx.lineTo(100, 60);
        ctx.lineTo(135, 35);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(57, 43);
        ctx.lineTo(100, 75);
        ctx.lineTo(142, 43);
        ctx.stroke();
    }
}