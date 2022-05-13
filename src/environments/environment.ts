// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  AuthURL:"https://localhost:44310/api/v1.0/flight/",
  //AuthURL:"https://varunauthapi.azurewebsites.net/api/v1.0/flight/",
  FlightURL:"https://localhost:44304/api/v1.0/flight/",
  //FlightURL:"https://varunflightapi.azurewebsites.net/api/v1.0/flight/",
  BookingURL:"https://localhost:44322/api/v1.0/flight/",
  //BookingURL:"https://varunflightbookingapi.azurewebsites.net/api/v1.0/flight/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
