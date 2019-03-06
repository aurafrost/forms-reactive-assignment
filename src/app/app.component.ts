import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statuses = ['Stable', 'Critical', 'Finished'];
  projectForm: FormGroup;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.projectForm = new FormGroup({
      'pName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl()
    });
    this.projectForm.setValue({
      'pName': 'P1',
      'email': 'joe@gmail.com',
      'status': 'Finished'
    })
    this.projectForm.statusChanges.subscribe(status => {
      console.log(status)
    });
  }

  onSubmit() {
    console.log(this.projectForm)
    // this.projectForm.reset();
  }
}
