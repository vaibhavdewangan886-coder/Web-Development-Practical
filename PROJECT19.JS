let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

/* 🔷 Draw Rectangle */
ctx.fillStyle = "blue";
ctx.fillRect(20, 20, 120, 80);

/* 🔴 Draw Circle */
ctx.beginPath();
ctx.arc(250, 60, 40, 0, Math.PI * 2);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

/* ➖ Draw Line */
ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(200, 250);
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

/* 📝 Draw Text */
ctx.fillStyle = "black";
ctx.font = "20px Arial";
ctx.fillText("Hello Canvas!", 280, 200);