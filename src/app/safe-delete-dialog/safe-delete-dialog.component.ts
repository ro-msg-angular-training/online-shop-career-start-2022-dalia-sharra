import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-safe-delete-dialog',
  templateUrl: './safe-delete-dialog.component.html',
  styleUrls: ['./safe-delete-dialog.component.scss']
})
export class SafeDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {name: string}, private dialogRef: MatDialogRef<SafeDeleteDialogComponent>) { }

  ngOnInit(): void {
  }

}
