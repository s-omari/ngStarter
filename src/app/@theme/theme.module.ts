import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
// import { MdePopoverModule } from '@material-extended/mde';

import {


  MatIconRegistry,
  MAT_CHIPS_DEFAULT_OPTIONS,

  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatMenuModule,
  MatProgressBarModule,
  MatChipsModule,
  MatBadgeModule,
  MatTooltipModule,
  MatTabsModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatBottomSheetModule,
  MatSliderModule,
  MatSnackBarModule,
  MatDialogModule

} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    //   MdePopoverModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatSliderModule,

    MatSnackBarModule,
    MatDialogModule

  ],
  exports: [
    //  MdePopoverModule,
    FormsModule,ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressBarModule,
    MatChipsModule,
    MatBadgeModule,
    MatTooltipModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    MatSliderModule,

    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    MatIconRegistry,
    {
      provide: MAT_CHIPS_DEFAULT_OPTIONS,
      useValue: {
        separatorKeyCodes: [13, 188]
      }
    }
  ]
})
export class ThemeModule {
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    matIconRegistry.registerFontClassAlias('fontawesome', 'fab');
  }
}
