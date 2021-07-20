
function setup() {
  createCanvas(400,400);
  btn_blue = createButton("BLUE");
  btn_blue.position(50,60);
  btn_blue.mousePressed(blue_bg);

  btn_red = createButton("RED");
  btn_red.position(180,60);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(315,60);
  btn_green.mousePressed(green_bg);
}

function draw() 
{
  background(90);
}

function blue_bg()
{
  r = 0;
  g = 0;
  b = 225;
}

function red_bg()
{
  r = 225;
  g = 0;
  b = 0;
}

function green_bg()
{
  r = 0;
  g = 225;
  b = 0;
}