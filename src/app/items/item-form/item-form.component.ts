import { Component, ViewChild } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../items.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: [ './item-form.component.scss' ],
})
export class ItemFormComponent {
  @ViewChild('itemForm', { static: false }) itemForm: NgForm;

  constructor(
    private itemService: ItemService,
  ) { }

  onAddItem(): void {
    const text = this.itemForm.value.text;
    if (!text) {
      return;
    }
    this.itemService.addItem({ text } as Item);
    this.itemForm.resetForm();
  }
}
