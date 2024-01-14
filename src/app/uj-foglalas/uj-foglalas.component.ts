import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FoglalasokService } from '../services/foglalasok.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uj-foglalas',
  templateUrl: './uj-foglalas.component.html',
  styleUrls: ['./uj-foglalas.component.scss']
})
export class UjfoglalasComponent implements OnInit {
  foglalasForm: FormGroup;
  today = new Date;
  becsukva: any;

  constructor(
    private formbuilder: FormBuilder,
    private foglalasokService: FoglalasokService,
    private router: Router
  ) {
    this.foglalasForm = this.formbuilder.group({
      cim: '',
      datum: '',
      fo: ['', [Validators.required, Validators.min(2), Validators.max(16)]],
      iranyitoszam: ['', [Validators.required, Validators.pattern("^[0-9]{4}$")]],
      nev: ''
    });
  }

  ngOnInit(): void {
    this.getToday();
  }

  onFormSubmit() {
    if (this.foglalasForm.valid) {

      const foControl = this.foglalasForm.get('fo');
      if (foControl) {
        const foValue = foControl.value;
        if (foValue < 2 || foValue > 16) {
          alert('Csak 2 és 16 közötti részvevő hely foglalható!');
          return;
        }
      }

      const iranyitoszamControl = this.foglalasForm.get('iranyitoszam');
      if (iranyitoszamControl) {
        const iranyitoszamValue = iranyitoszamControl.value;
        if (!/^[0-9]{4}$/.test(iranyitoszamValue)) {
          alert('Az irányítószám 4 számjegyből állhat!');
          return;
        }
      }

      this.foglalasokService.addFoglalas(this.foglalasForm.value).subscribe({
        next: (val: any) => {
          alert('Foglalás sikeres');
          this.router.navigate(['/foglalasok']);
        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
  }

  getToday() {
    this.today = new Date();
    console.log('Ma: ', this.today);
  }
}
