import { Component , OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../models/skill';
import { Level } from '../types/level';
import { SkillsService } from '../services/skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills!: Skill [];
  //private skillsService! : SkillsService;
  //constructor(skillsService : SkillsService) { this.skillsService = skillsService;  }
  constructor (private skillsService : SkillsService) {}   // essentially same as two lines above
  ngOnInit() {
    this.skills = this.skillsService.skills; console.log("skillsComponent created"); 
  }
}
