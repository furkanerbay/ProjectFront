import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { List_User } from 'src/app/contracts/models/list_user';
import { UserService } from 'src/app/services/models/user/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit{
  constructor(private userService:UserService){}
  
  displayedColumns = ['id','firstName','lastName','eMail','status']
  dataSource: MatTableDataSource<List_User> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getUsers(){
    this.userService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5)
      .subscribe({
        next: (value) => {
          this.dataSource = new MatTableDataSource<List_User>(value.result);
          this.paginator.length = value.totalCount;
        }
      })
  }

  pageChanged(){
    this.getUsers();
  }

  ngOnInit(): void {
    console.log(this.getUsers());
  }

}
