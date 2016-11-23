/**
 * Created by kunjieyan on 2016/11/23.
 */
import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}



@Component({
    selector: 'my-app',
    template: `
     <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <!--<input value="{{hero.name}}" placeholder="name">-->
        <input [(ngModel)]="hero.name" placeholder="name">
      </div>
    `,
    styleUrls:["../styles.css"]
})

export class AppComponent {
    title = 'Tour of Heroes';
    hero: Hero = {
        id:1,
        name: 'Yankj'
    };
}
