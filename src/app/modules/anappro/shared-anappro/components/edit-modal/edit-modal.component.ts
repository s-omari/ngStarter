import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface DialogData {
  about: string;
  name: string;
  id: string;
}

const coord_Regex = /^-?[0-9]\d*(\.\d+)?$/;


@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  form: FormGroup;
  name;
  about;

  submitted;
  formData;
  constructor(
    private formBuilder: FormBuilder,

    public dialogRef: MatDialogRef<EditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.about = data.about;
    this.name = data.name
    this.formData = data;

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.minLength(3)]],
      about: [this.about, [Validators.required, Validators.minLength(3)]],
    });

  }
  save() {
    this.submitted = true;

    console.log(this.form.invalid);
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.value);


  }

  close() {
    this.dialogRef.close('exit');
  }

}
