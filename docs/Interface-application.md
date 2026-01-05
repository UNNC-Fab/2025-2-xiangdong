#    Useing the Processing to construct the interface application?

##  What is the processing?

Processing is an open-source programming language and integrated development environment specifically created for electronic art, visual design, creative programming, and graphic education.

Its core objective is to make programming intuitive and easy to get started with for artists, designers, educators and beginners, and to become a "sketchbook of software".

In simple terms, Processing makes it very easy to create visual art, animation and interactive works with code.

## The main feature and core

Main features and core ideas:

Born for vision

It is equipped with a large number of functions specifically designed for drawing 2D and 3D graphics (such as drawing lines, rectangles, circles, processing images, colors, etc.).

The program structure is built around "animation frames", and by default it includes the setup() (initialization) and draw(loop drawing) functions, making it very easy to create dynamic images.

Low threshold, high upper limit

The grammar is simplified from Java. Beginners can quickly draw their first figure, get immediate feedback and build confidence.

But essentially, it is a complete programming language, and experts can utilize all its capabilities to create extremely complex interactive devices or data visualization works.

Cross-platform and derivative projects

The main program can run on Windows, macOS and Linux.

Its ideas and core library have given rise to powerful derivative projects:

p5.js[https://p5js.org/]: Transplanting the concept of Processing to JavaScript, allowing you to directly create in web browsers and easily integrate web elements (HTML, audio and video, etc.), it is currently one of the most active communities.

![](https://raw.githubusercontent.com/RIcardo-H-Dong/2025-10-XiangDong-1/main/img/5.4.png)

Processing for Android: Used for developing Android mobile applications.

Processing.py: Creating Processing using Python syntax.

Strong community and teaching resources

It has a very active and friendly international community that shares a vast amount of tutorials, sample codes and works.

It is the preferred tool for many art and design colleges and introductory programming courses around the world.


The interface of the processing

![](https://raw.githubusercontent.com/RIcardo-H-Dong/2025-10-XiangDong-1/main/img/4.111.png)

##  processing example

```
void setup() {
  size(400, 400); // 创建一个400x400像素的画布
  background(0); // 背景设为黑色
}

void draw() {
  fill(random(255), random(255), random(255), 100); // 随机颜色，半透明
  noStroke(); // 不要边框
  ellipse(mouseX, mouseY, 30, 30); // 在鼠标位置画一个圆
}
```

![](https://raw.githubusercontent.com/RIcardo-H-Dong/2025-10-XiangDong-1/main/img/3213.png)
![](https://raw.githubusercontent.com/RIcardo-H-Dong/2025-10-XiangDong-1/main/img/f016352c50980907fd1cc002ca305135-ezgif.com-video-to-gif-converter.gif)