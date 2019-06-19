import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentMedicatieComponent } from 'src/app/component/component-medicatie/component-medicatie.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ComponentMedicatieComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ComponentMedicatieComponent]
})
export class ModuleMedicatieModule { }
