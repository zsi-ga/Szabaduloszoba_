import { Component, OnInit } from '@angular/core';
import { FoglalasokService } from '../services/foglalasok.service';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-foglalasok',
  templateUrl: './foglalasok.component.html',
  styleUrls: ['./foglalasok.component.scss']
})
export class FoglalasokComponent implements OnInit{

  displayedColumns: string[] = ['datum', 'nev', 'fo', 'cim', 'iranyitoszam'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private foglalasokService: FoglalasokService){}

  ngOnInit(): void {
      this.getFoglalasokList();
  }

  getFoglalasokList(){
    this.foglalasokService.getFoglalasList().subscribe({
      next: (res) => {

        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
