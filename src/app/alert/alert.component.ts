import { Component, Inject, Input, OnInit } from '@angular/core';
import {  MatSnackBarRef,  MAT_SNACK_BAR_DATA} from "@angular/material/snack-bar";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {


  constructor(  public sbRef: MatSnackBarRef<AlertComponent>,@Inject(MAT_SNACK_BAR_DATA) public data: string[]) { }

  ngOnInit(): void {
  }

}
