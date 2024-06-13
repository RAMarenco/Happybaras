#include <Servo.h>

int green = 2, red = 3, blue = 7, button = 4, te2 = 2, distance;
bool initiated = false, qrScanned = false;
const int trigPin = 5;
const int echoPin = 6;
unsigned long previousMicros = 0;
long duration;

Servo servo;

void setup()
{
  Serial.begin(9600);
  servo.attach(9, 500, 2500);
  pinMode(green, OUTPUT);
  pinMode(red, OUTPUT);
  pinMode(blue, OUTPUT);
  pinMode(button, INPUT);
  digitalWrite(red, LOW);
  digitalWrite(green, LOW);
  digitalWrite(blue, LOW);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop()
{
  if (initiated) {
    int buttonState = digitalRead(button);
    unsigned long currentMicros = micros();
    
    if (buttonState || qrScanned) {
      digitalWrite(red, LOW);
      digitalWrite(green, HIGH);
      
      servo.write(0);
      delay(4000);
    } else {
      digitalWrite(trigPin, LOW);    
      if (currentMicros - previousMicros > te2) {
        digitalWrite(trigPin, HIGH);     
      }
      if (currentMicros - previousMicros > 5 * te2) {
        digitalWrite(trigPin, LOW);
        previousMicros = currentMicros;
      }
      
      duration = pulseIn(echoPin, HIGH);
      distance = duration * 0.0172;
      
      if (distance > 50) {
      	digitalWrite(red, HIGH); 
      	digitalWrite(green, LOW);
        digitalWrite(blue, LOW);
      	servo.write(90);
      } else {
        digitalWrite(blue, HIGH);
      }
      Serial.println(distance);
    }
  } else {
    digitalWrite(red, HIGH);
    digitalWrite(green, LOW);
    initiated = true;
  }
}