import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "";
  dateval = new Date();
  panel = [];
  description = "";
  wind_speed = "";
  min_temp = "";
  max_temp = "";
  humidity = "";
  clouds = "";

  getWeather(i): void {
    // console.log(this.name);
    // alert(i);
    this.panel[i] = [];
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        this.name +
        "&appid=5e3cdf9ffdcea6e5287405320efbc8e3"
    )
      .then(response => response.json())
      .then(data => {
        // this.translate.get(data['weather'][0]['description']).subscribe((text:string) => {console.log(text)});
        this.min_temp = data["main"]["temp_min"] + " K";
        this.max_temp = data["main"]["temp_max"] + " K";
        this.humidity = data["main"]["humidity"] + " %";
        this.description = data["weather"][0]["description"].toUpperCase();
        this.wind_speed = data["wind"]["speed"] + " Miles/Hr";
        this.clouds = data["clouds"]["all"] + "%";
        console.log(data);
      })
      .catch(err => alert("Wrong city name!"));
  }
}
