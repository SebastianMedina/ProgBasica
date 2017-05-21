// Pin 13 has an LED connected on most Arduino boards.
// give it a name:
int bombillo = 13;//Este es el puerto en el que se encuentra el led
int espera = 500;

// the setup routine runs once when you press reset:
void setup() {
  // initialize the digital pin as an output.
  pinMode(bombillo, OUTPUT);//OUTPUT quiere decir que la energia se envia
}
// the loop routine runs over and over again forever:
void loop()
{
  digitalWrite(bombillo, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(espera * 2);
  digitalWrite(bombillo, LOW);
  delay(espera);

}
