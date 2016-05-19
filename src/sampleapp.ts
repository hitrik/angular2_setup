import {Component, Inject} from "@angular/core";

interface Hero {
    id:number;
    name:string;
}

@Component({
    selector: 'sample-app',
    template: `
<div class="container">
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6 well" style="border-radius: 0;text-align: center">
      <h3>Welcome to {{title}}</h3>
      <div>Selected Hero: {{selectedHero || "No chosen"}}</div>
      </div>
      <div class="col-md-3"></div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <ol>
             <li *ngFor="let hero of heroes" (click)="onSelect(hero.name)">{{hero.name}} - <button (click)="talk(hero.name)">Say name</button></li>
            </ol>   
        </div>
    </div>
</div>
`
})

export default class SampleApp {
    title:string = 'Academy';
    selectedHero:string;
    talk(name:string):void {
        alert(`My name is ${name}`);
    }
    onSelect(name:string):void {
        this.selectedHero = name;
    }
    heroes: Hero[] = [
        { "id": 11, "name": "Mr. Nice" },
        { "id": 12, "name": "Narco" },
        { "id": 13, "name": "Bombasto" },
        { "id": 14, "name": "Celeritas" },
        { "id": 15, "name": "Magneta" },
        { "id": 16, "name": "RubberMan" },
        { "id": 17, "name": "Dynama" },
        { "id": 18, "name": "Dr IQ" },
        { "id": 19, "name": "Magma" },
        { "id": 20, "name": "Tornado" }
    ];

}