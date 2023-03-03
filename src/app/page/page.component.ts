import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  constructor(private route: ActivatedRoute) {};
  title = this.route.snapshot.queryParamMap.get('title');
  category = this.route.snapshot.queryParamMap.get('category');
  date = this.route.snapshot.queryParamMap.get('date');
  file = this.route.snapshot.queryParamMap.get('file');
  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
