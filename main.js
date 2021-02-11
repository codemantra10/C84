var canvas=document.getElementById("myCanvas");
BobTheBuilder=canvas.getContext("2d");
rover_width=30;
rover_height=30;
background_image="mars.jpg";
rover_image="rover.png";
rover_X=1;
rover_Y=1;
function roverimage(){
BG_img=new Image();
BG_img.onload=update_Background;
BG_img.src=background_image;
R_img=new Image();
R_img.onload=update_rover;
R_img.src=rover_image;
}
function update_Background(){
BobTheBuilder.drawImage(BG_img,0,0,1000,500);
}
function update_rover(){
BobTheBuilder.drawImage(R_img,rover_X,rover_Y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
keypressed=e.keyCode;
console.log(keypressed);
}

