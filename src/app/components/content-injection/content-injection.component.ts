import {
  Component,
  OnInit,
  SecurityContext,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-injection',
  templateUrl: './content-injection.component.html',
  styleUrls: ['./content-injection.component.css'],
})
export class ContentInjectionComponent implements OnInit {
  stringData: string;
  parsedData: any;
  @ViewChild('TEST', { read: ViewContainerRef }) test:
    | ViewContainerRef
    | undefined;
  constructor(private sanitizer: DomSanitizer) {
    this.stringData = '';
  }

  ngOnInit() {
    this.stringData = '<div><a [routerLink]="/"></a></div>';
    this.parsedData = this.sanitizer.bypassSecurityTrustHtml(this.stringData);
    console.log(this.parsedData);

    this.test?.createEmbeddedView(this.parsedData);
  }
}
