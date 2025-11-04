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
### 1.Licheepi
## The basic of Arduino

## input & output

'''md
'''