import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Level } from '../types/level';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills!: Skill [];
  constructor() {

     this.skills = [
      {id: 0, name:'Abstract Mathematics',level: Level.Expert}, 
      {id: 1,name: 'Philosophy', level: Level.Advanced}, 
      {id: 2, name: 'Developing software', level: Level.Expert}
    ];
    console.log("skillsService:constructor");
    console.log(this.skills);
  }
}
