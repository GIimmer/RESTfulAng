import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  task = {};
  tasks = [];
  taskDict = {};
  constructor(private _httpService: HttpService){}

  onShowOne(event: any){
    console.log(event);
    console.log(event.originalTarget);
    let orig = event.originalTarget;
    console.log(orig);
    let title = orig.title;
    console.log(orig);
    Object.keys(this.taskDict).forEach(v => this.taskDict[v] = false);
    this.taskDict[title] = true;
    // this.taskDict[name] = true;
  }

  onShowAll(){
    console.log("I'm here!");
    let observable = this._httpService.getTasks();
    observable.subscribe(data=>{
      const dataKeys = Object.keys(data);
      for(let datum in dataKeys){
        this.tasks.push(data[datum]);
        this.taskDict[datum['title']] = false;
      }

    })
  }

}
