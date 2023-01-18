import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-fail-dialog',
  templateUrl: './fail-dialog.component.html',
  styleUrls: ['./fail-dialog.component.css']
})
export class FailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string }) { }

}
