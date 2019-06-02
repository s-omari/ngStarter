import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface DialogData {
  address: string;
  name: string;
  id: string;
  contact_info: string;
}

@Component({
  selector: 'create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  form: FormGroup;
  name;
  about;

  submitted;
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,

  ) {
    // this.dialogRef.
    // this.address = data.address;
    // this.name = data.name;
    // console.log('data', data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      about: [null, [Validators.required, Validators.minLength(3)]],

    });
  }

  save() {
    this.submitted = true;

    console.log(this.form.invalid);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    // alert('SUCCESS!! :-)');
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close('exit');
  }
}
