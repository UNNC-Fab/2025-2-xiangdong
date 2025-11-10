# Assignments of Arduino

## OpenSource hardware

| Name             | Core Features / Positioning                      | Key Hardware Info                                  | Applicable Scenarios                                      |
|------------------|--------------------------------------------------|----------------------------------------------------|-------------------------------------------------------------|
| NanoPi R76S      | Dual 2.5 Gbps network ports, strong network performance | RK3576 chip, optional enclosure                     | Soft router, network firewall, home server                   |
| LCPI Allwinner H3| High cost-performance, low power, optimized for lightweight NAS | Allwinner H3 Cortex-A7 chip, gigabit network port, optimized power for HDD | Lightweight NAS, file sharing, edge compute node            |
| NodeMCU Lua V3   | Ultra-low cost, Wi-Fi networking, entry-level IoT   | ESP8266 chip, supports Lua scripting                | Smart home, Wi-Fi remote control, sensor data acquisition    |
| GD32VW553        | Domestic RISC-V architecture, supports Wi-Fi 6     | Goodix (JiaLiChuang) GD32VW553 chip, RISC-V core    | IoT development, projects requiring communication performance & domestic chips |
| Quectel PI-SC200U| Integrated 4G network, comprehensive interfaces, industrial grade | Qualcomm 8-core processor, 4 GB + 64 GB storage, supports LTE Cat 4 | Mobile medical devices, industrial PDA, smart retail needing cellular connectivity |

##  Run water light program
```md
int val;//定义变量val
int BASE = 2 ;  //第一颗LED 接的I/O脚
int NUM = 4;   //LED 的个数
void setup()
{
   for (int i = BASE; i < BASE + NUM; i ++) 
   {
     pinMode(i, OUTPUT);   //设定数字I/O脚为输出
   }
}
void loop()
{
   for (int i = BASE; i < BASE + NUM; i ++) 
   {
     digitalWrite(i, LOW);    //设定数字I/O脚为输出为"低"，即逐渐关灯
     delay(200);        //延迟
   }
   for (int i = BASE; i < BASE + NUM; i ++) 
   {
     digitalWrite(i, HIGH);    //设定数字I/O脚为输出为"高"，即逐渐开灯
     	   delay(200);        //延迟
   }
}
```

### Sandplay Therapy Projects

Definition of the Sandplay Therapy

### 1.Licheepi
```
"LicheePi" is an embedded development board launched by Sipeed (Silicon Speed Technology), featuring open source and cost-effectiveness as its main characteristics. Its goal is to enable developers and students to learn and practice Linux system development, embedded system design, and Internet of Things applications at a relatively low cost
```
### 2.Core features and application scenarios

| Aspect | Description |
| :--- | :--- |
| **Product Positioning** | An open-source single-board computer, similar to Raspberry Pi, but more focused on **low-level system development** and **hardware customization**. |
| **Core Hardware** | Typically uses **Allwinner Technology's ARM architecture processors**. For example, the Lichee Nano model uses the F1C100s chip, which integrates CPU and memory, and offers a rich set of interfaces. |
| **Software Ecosystem** | Supports running **mainline Linux kernel**, as well as some real-time operating systems (such as RT-Thread) or bare-metal programs (like Xboot). Software resources are typically open-sourced in the official community. |
| **Primary Applications** | Suitable for **embedded product prototyping**, **industrial control**, **academic research**, and serves as an excellent platform for learners to deeply understand **Linux kernel, Bootloader, and file systems**. |


## The basic of Arduino

Definition:Arduino is an open-source electronic prototyping platform that enables ordinary people to easily create interactive electronic projects.

You can think of it as the "Lego" or "universal toolbox" of the electronic world. It consists of two parts:

1.Hardware (circuit board): A microcontroller board, which is equivalent to the brain of the project.
2.Software (IDE) : A computer software used to program the "brain".

![The interfacr of arduino](![](https://raw.githubusercontent.com/RIcardo-H-Dong/2025-10-XiangDong-1/main/img/666.png))

## input & output

```md
```
```