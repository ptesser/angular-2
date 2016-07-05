import { bootstrap }                from '@angular/platform-browser-dynamic';
import { ContactListComponent }     from './contact-list.component';
import { ContactStore }             from './contact-store';

bootstrap(ContactListComponent, [ContactStore]);