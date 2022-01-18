import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  start_sec;
  start_min;
  start_hour;
  interval;
  showClock= false;
  ngOnInit() {

  this.reset();
  
  }

  updateTime(){
    if(this.start_sec !== 59){
      this.start_sec++;
    }
    else{
      this.start_sec = 0;
      this.start_min++;
    }

    if(this.start_min ==60){
      this.start_min = 0;
      this.start_hour++;
    }

    if(this.start_hour == 23 && this.start_min == 59 &&  this.start_sec==59){
      //reset
        this.reset();
    }
    this.showClock = true;
    this.addLeadingZeroes();
  }

  reset(){
    
    if(this.interval) {
      clearInterval(this.interval);
      this.showClock = false;
    }
    this.start_sec = 0;
    this.start_min =0;
    this.start_hour=0;
    this.interval= setInterval( this.updateTime.bind(this),1000);
  }

  addLeadingZeroes(){
    //append leading 0
    
    if ((this.start_sec+'').length == 1) {
      this.start_sec = "0" + this.start_sec;
 }
 if ((this.start_min+'').length == 1) {
  this.start_min = "0" + this.start_min;
}
if ((this.start_hour+'').length == 1) {
  this.start_hour = "0" + this.start_hour;
}
  }

  fetchCurrentTime(){
    var msg = new SpeechSynthesisUtterance();
    msg.text = "Hello Supreet!";
    window.speechSynthesis.speak(msg);
    if(this.interval) {
      clearInterval(this.interval);
      this.showClock = false;
    }
    var today = new Date();
    this.start_hour= today.getHours();
    this.start_min = today.getMinutes();
    this.start_sec= today.getSeconds();
    this.interval= setInterval( this.updateTime.bind(this),1000);
  }
}
