import { Routes } from '@angular/router';
import { AdminPage } from './admin/admin-page/admin-page';
import { StudentTable } from './student/student-table/student-table';
import { ErrorPage } from './error/error-page/error-page';
import { StudentDetail } from './student/student-detail/student-detail';

export const routes: Routes = [
    { path: "admin", component: AdminPage },
    { path: "home", component: StudentTable },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "student/detail/:id", component: StudentDetail },
    { path: "**", component: ErrorPage }
];
