import { Component } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  columns: ITdDataTableColumn[] = [
  { name: 'delete', label: '' },
  { name: 'callSign',  label: 'Callsign', sortable:true },
  { name: 'flightNumber', label: 'Flight #' },
  { name: 'launchStartDateTime', label: 'Launch Date', numeric: true, sortable:true },
  { name: 'launchLocation', label: 'Location', numeric: true, sortable:true },
  { name: 'deviceCount', label: 'Devices', numeric: true },
  { name: 'userIds', label: 'Users', numeric: true }
];

basicData: any[] = [
  {
  "callSign" : "NAUMKEAG",
  "flightNumber" : 1,
  "launchStartDateTime" : "2017-01-23T18:37:25.000Z",
  "launchLocation" : "-72.7127141667,42.3823083333",
  "launchAltitude" : 70,
  "deviceIds" : [
      "312236995699569"
  ].length,
  "registeredTrackers" : [].length,
  "userIds" : [
      "google-oauth2|117580930853584288354",
      "google-oauth2|103798409261155866684",
      "google-oauth2|106203983051883105218",
      "google-oauth2|105550404265429691684",
      "google-oauth2|101369653202436410278"
  ].length
}
  ];
}
