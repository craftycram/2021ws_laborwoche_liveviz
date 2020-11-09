void setup() {
  Serial.begin(9600);

}

void loop() {
  Serial.println(random(50, 240));
  delay(250);
}
