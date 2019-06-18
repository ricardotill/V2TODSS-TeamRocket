import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  person: any;
  id: string;
  examplePhoto: string;

  constructor(
    private personService: Person,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.examplePhoto = "http://unsplash.it/100/100";
  }

  ngOnInit() {
    //this.person = this.personService.getPatient(this.params.get('id'));
    // this.person (params: ParamMap) =>
    //     this.personService.getPatient(params.get('id')))
    // );

    this.showPatient();

  }

  showPatient() {
    this.route.paramMap.subscribe(params => {
      this.id = (params.get('id'));
    });
    this.personService.personVariable(this.id);
    $('#beschrijving').value = this.personService.patient.beschrijving;
  }

  updatePatient() {
    let huisarts = {
      "naam": $('#naam-huisarts').val,
      "poliadres": $('#adres-huisarts').val,
      "telefoonnummer": $('#telefoon-huisarts').val,
      "spoednummer": $('#spoed-huisarts').val
    }
    let body = {
      "naam": $('#naam').val,
      "adres": $('#adres').val,
      "geboortedatum": $('#geboortedatum').val,
      "telefoon": $('#telefoon').val,
      "verzekeringsgegevens": $('#verzekeringsgegevens').val,
      "fotourl": this.examplePhoto,
      "qrCode": this.personService.patient.PersoonId,
      "probleem": $('#beschrijving').val,
      "Huisarts": [huisarts],
      "handeling": [$('#handeling1').val, $('#handeling2').val]
    };
    body.naam = $('#naam').val;
    this.personService.putPatient(this.id, body);
  }

  deletePatient() {
    this.personService.deletePatient(this.id);
    this.router.navigate(['/gegevens']);
  }

}
