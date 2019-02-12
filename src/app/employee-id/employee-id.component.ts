import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-id',
  templateUrl: './employee-id.component.html',
  styleUrls: ['./employee-id.component.css']
})
export class EmployeeIdComponent implements OnInit {

  id: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {

    this.id = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return params.get('id');
      })
    );

    console.log(this.id);
  }
}
