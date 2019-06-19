import { Component, OnInit } from '@angular/core';
import { Person } from '../_services';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
declare var $: any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  public person: any;
  loading: boolean = false;
  id: string;
  examplePhoto: string;

  PersoonId: string = '60';
  owner: string = 'resource:9186';
  naam: string;
  adres: string;
  geboortedatum: string;
  telefoon: string;
  verzekeringsgegevens: string;
  fotourl: string = ' ';
  qrCode: string = '60';
  probleem: string;
  handeling1: string;
  handeling2: string;
  handeling: any = [this.handeling1, this.handeling2];
  huisartsId_h: string = '10';
  huisartsNaam_h: string;
  polieadres_h: string;
  telefoonnummer_h: string;
  spoedlijn_h: string;
  info_h: string;
  vertrouwenspersoon_vp: string = '10';
  naam_vp: string;
  relatie_vp: string;
  telefoonnummer_vp: string;
  medicatieId: string = '10';
  extra_m: string;
  bijwerkingen_m: string;
  bezit_m: boolean;

  constructor(
    public personService: Person,
    private route: ActivatedRoute,
    private router: Router
    ) {
    this.examplePhoto = "http://unsplash.it/100/100";
  }

  ngOnInit() {

    // this.person = this.personService.personVariable(this.id);

    // while (this.person == undefined) {
    // }
    // console.log(this.person);

    // this.showPatient();

    //this.personService.getPatient(id);

    //this.person = this.route.data.pipe(map(res => res.json()));
    //console.log(this.person);

    let id = this.route.snapshot.paramMap.get('id');
    this.personService.getPatient(id);
  }

  async showPatient() {
    let id = this.route.snapshot.paramMap.get('id');
    await this.personService.getPatient(id);
  }

  // showPatient() {
  //   // this.loading = true;
  //   // this.route.paramMap.subscribe(params => {
  //   //   this.id = (params.get('id'));
  //   // });

  //   // this.person = this.personService.personVariable(this.id);
  //   // console.log(this.personService.patient);
  //   // console.log(this.person);
  //   this.loadPatientsInVars();
  //   //$('#beschrijving').value = this.personService.patient.beschrijving;
  //   this.loading = false;
  // }

  // assignPerson() {
  //   return this.personService.personVariable(this.id);
  // }

  loadPatientsInVars() {
    console.log(this.personService.patient);
    this.PersoonId = this.personService.patient.PersoonId;
    this.naam = this.personService.patient.naam;
    this.adres = this.personService.patient.adres;
    this.geboortedatum = this.personService.patient.geboortedatum;
    this.telefoon = this.personService.patient.telefoon;
    this.verzekeringsgegevens = this.personService.patient.verzekeringsgegevens;
    this.qrCode = this.personService.patient.qrCode;
    this.probleem  = this.personService.patient.probleem;
    this.handeling1 = this.personService.patient.handeling[0];
    this.handeling2 = this.personService.patient.handeling[1];
    this.handeling = [this.handeling1, this.handeling2];
    // this.huisartsId_h = this.personService.patient.huisartsId_h;
    // this.huisartsNaam_h = this.personService.patient.huisartsNaam_h;
    // this.polieadres_h = this.personService.patient.polieadres_h;
    // this.telefoonnummer_h = this.personService.patient.;
    // spoedlijn_h: string;
    // info_h: string;
    // vertrouwenspersoon_vp: string = '10';
    // naam_vp: string;
    // relatie_vp: string;
    // telefoonnummer_vp: string;
    // medicatieId: string = '10';
    // extra_m: string;
    // bijwerkingen_m: string;
    // bezit_m: boolean;
  }

  async updatePatient() {
    $('#btn-create').prop('disabled', true);
    $('#spinner').removeClass('d-none');
    $('#btn-txt').addClass('d-none');

    await this.personService.putPatient();

    $('#btn-create').prop('disabled', false);
    $('#spinner').addClass('d-none');
    $('#btn-txt').removeClass('d-none');
  }

  deletePatient() {
    $('#modal').modal({
      show: false
    });
    this.personService.deletePatient();
    this.router.navigate(['/gegevens']);
  }

}
