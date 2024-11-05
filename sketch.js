let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle=0
let r=20
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("font/NotoSansTC-VariableFont_wght.ttf") 
}

function setup() {
  createCanvas(windowWidth, windowHeight);//產生一個畫布
  angleMode(DEGREES)//設定三角函數的角度
  background("#faedcd")//設定背景 (天空色)
  //=================================================================
  points = font.textToPoints("TKUET", -300, 80, 150, {
    sampleFactor:0.2
  });for (let i=0; i<points.length-1; i++) { 
  }
}
function draw() { // 畫圖，每秒會畫60次
  // background(220)
  background("#faedcd");
  rectMode(CENTER)//設定方形座標點放在方形的中間
  noFill()//以下所畫的物件不要充滿顏色
  stroke("#023e8a")//線條的顏色
  strokeWeight(3)//線條粗細
  var rect_width=50+mouseX/100
  var bc_width=50+mouseX/100
  var sc_width=25+mouseY/100

  
  //++++++++++第一組++++++++++++
  // FOR迴圈
  // i=0:i為變數，i從0開始
  for(let j=0;j<20;j=j+1){
      for(let i=0;i<40;i=i+1){
        if(j<5){//第0~4排共5排設定的顏色
          stroke("#d4a373")
        }else if(j<10){
          stroke("#780000")
        }else if(j<10){
          stroke("#003049") 
        }
        ellipse(25+50*i,25+50*j,bc_width)//在座標(x:25, y:25)畫一個直徑為50的方形
        rect(25+50*i,25+50*j,rect_width)//畫方形，在座標(x:25, y:25)畫一個直徑為50的方形
        ellipse(50+50*i,50+50*j,sc_width)//畫一個小圓，直徑為25 
        }
      
      }
      translate(width/2,height/2)//把原本原點(0)在左上角，改為到畫布中心點(width/2,height/2)為原點(0)
      rotate((frameCount)%360)//依照framecount除以360求餘數
      for (let i=0; i<points.length-1; i++) { 
        // text(str(i),points[i].x,points[i].y)//在(points[i].x,points[i].y)座標上，顯示一個文字(數字)
        //fill("#fb6f92")//畫圓的修改顏色
        // noStroke()
       // strokeWeight(1)//畫圓的框線粗細
         //ellipse(points[i].x+r*sin(angle+i*15),points[i].y+r*sin(angle+i*15),10)
        stroke("#99582a")//線條的顏色
        strokeWeight(5)//線條的粗細
       line(points[i].x,points[i].y,points[i+1].x,points[i+1].y)//畫線，兩點構成一條線
      } 
     //==================================================================
       angle=angle+10
  }

