import {Routes} from '@angular/router';
import {PhotoComponent} from "./photo/photo.component";
import {GameComponent} from "./game/game.component";
import {FunComponent} from "./fun/fun.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {path: '', component: HomepageComponent, canActivate: [AuthGuard]},
  {path: 'sweet', component: PhotoComponent, canActivate: [AuthGuard]},
  {path: 'game', component: GameComponent, canActivate: [AuthGuard]},
  {path: 'fun', component: FunComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}];
