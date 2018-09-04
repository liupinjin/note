import { Component, OnInit } from '@angular/core';
import {SysConfig} from '../../modal/sys-config';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private sysconfig:SysConfig) { }

  ngOnInit() {
  }

}
