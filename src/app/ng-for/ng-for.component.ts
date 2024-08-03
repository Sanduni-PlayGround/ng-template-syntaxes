import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let item of [1,2,3,4,5];let i = index">
        List Item {{i+1}}
      </li>
<!--      <li>List Item 2</li>-->
<!--      <li>List Item 3</li>-->
<!--      <li>List Item 3</li>-->
    </ul>

    <ul>
      <li *ngFor="let item of array1;let i = index">
        {{array1[i]}}
      </li>
    </ul>

    <ul>
      <li *ngFor="let name of array1;
      let isOdd = odd; let isEven = even;
      let isFirst = first; let isLast = last">
        {{ name }}
        <span *ngIf="isFirst" class="text-danger">- FIRST</span>
        <span *ngIf="isLast" class="text-danger">- LAST</span>
        <span *ngIf="isOdd">- ODD</span>
        <span *ngIf="isEven">- EVEN</span>
      </li>
    </ul>
    <table>
      <thead>
      <tr>
        <th class="text-center">ID</th>
        <th>NAME</th>
        <th>ADDRESS</th>
      </tr>
      </thead>
      <tbody>
            <tr *ngFor="let customer of customers; trackBy: trackCustomerFn">
              <td>{{customer.id}}</td>
              <td>{{customer.name}}</td>
              <td>{{customer.address}}</td>
              <td class="text-center">
                <i (click)="deleteCustomer(customer.id)" class="bi bi-trash"></i>
              </td>
            </tr>
      </tbody>
      <tfoot *ngIf="!customers.length">
      <tr>
        <td colspan="3" class="text-center">No Customer Records Found</td>
      </tr>
      </tfoot>
    </table>

    <ul>
      <li *ngFor="let item of items">
        {{item}}
      </li>
    </ul>
    <button (click)="updateItems()"
      class="btn btn-danger btn-sm">Update Item
    </button>
    <hr>
    <ul>
      <li *ngFor="let item of items2">
        {{item.value}} - {{item.name}}
      </li>
    </ul>
    <button (click)="updateItems2()"
            class="btn btn-danger btn-sm">Update Item
    </button>
    <hr>
    <h2 class="text-center">Angular 18+</h2>
    @for(customer of customers; track customer.id){
      <li>{{customer.id}} - {{customer.name}} - {{customer.address}}</li>
    } @empty {
<!--      this will appear if there are no customers-->
      No Customer Found
    }
  `,
  styles: `
    .bi-trash{
      font-size: 1.2rem;
      &:hover{
        color: red;
      }
    }
  `
})
export class NgForComponent {
  items=['First', 'Second', 'Third', 'Forth', 'Fifth'];
  items2 = [{value:'First', name:'Kasun'},
    {value:'Second', name:"Ramindu"},
    {value:'Third', name:'Guruli'},
    {value:'Forth', name:'Kapida'}];

  updateItems2(){
    this.items2 = [{value:'First', name:'Kasun'},
      {value:'Second', name:"Ramindu Peiris"},
      {value:'Third', name:'Guruli'},
      {value:'Forth', name:'Kapida Kulasooriya'}];
  }
  updateItems(){
    this.items.unshift('New Item');
  }


  trackItemFn(index:number, item: any){
    return item.value;
  }

  array1 = ["Kasun", "Nuwan", "Supun", "Ruwan"];
  customers:{id: string, name: string, address: string}[] =[
    
  ];

  deleteCustomer(customerId: string){
    this.customers = this.customers.filter(c => c.id !== customerId);
  }

  trackCustomerFn(index:number,
                  customer: {id: string, name: string, address: string}):string{
    return "C001";
    // return customer.id;
  }


}

