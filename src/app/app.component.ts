import { Component } from '@angular/core';
import { UserEntity } from './entities/user.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors World Online';
  user: UserEntity = new UserEntity();
}
