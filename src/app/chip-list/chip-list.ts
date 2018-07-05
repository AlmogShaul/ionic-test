import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  template: `
    <ion-chip *ngFor="let chip of chips" [ngClass]="{'selected':chip.selected}" (click)="chipSelected(chip)">
      <ion-label>{{chip.name}}</ion-label>
    </ion-chip>
  `,
  selector:'chips'
})
export class ChipListCmp {

  chips: any[] = [];

  @Input() chipNames = [];
  @Output() selectedChip = new EventEmitter();

  changeValue(index: number) {
    this.chips.forEach((e, i) => {
      if (i <= index) {
        e.selected = true;
      } else {
        e.selected = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

    for (let i = 0; i < this.chipNames.length; i++) {
      this.chips.push({name:this.chipNames[i]});
    }
  }

  chipSelected(chip){
    this.chips.forEach(c=>{
      c.selected = false;
    })
    chip.selected = true;

    this.selectedChip.emit(chip);
  }


}

