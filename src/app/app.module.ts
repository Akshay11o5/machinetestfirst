import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListItemComponent } from './shared/component/list-item/list-item.component';
import { TableComponent } from './shared/component/table/table.component';
import { ProductComponent } from './shared/component/product/product.component';
import { OrderComponent } from './shared/component/order/order.component';
import { EmployeeComponent } from './shared/component/employee/employee.component';
import { BookComponent } from './shared/component/book/book.component';
import { CricketerTableComponent } from './shared/component/cricketer-table/cricketer-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    TableComponent,
    ProductComponent,
    OrderComponent,
    EmployeeComponent,
    BookComponent,
    CricketerTableComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
