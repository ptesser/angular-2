# Travel Dashboard
This repository is use to manage code of Travel Dashboard. A personal webapp to insert all information about my travels.

## Use Case

- User can create a travel;
- User can associate an accomodation to the travel;
- User can associate the expenses of the travel;
- Admin can create locations, countries

## Technology

- [Angular 2](https://angular.io/) manage via [Angular CLI](https://cli.angular.io)
- [Lumen](https://lumen.laravel.com/docs/5.1) manage via composer and via Lumen installer


## Front-End

### Development

- use command `ng serve` and got to http://localhost:4200

### Build


### Testing



## Back-End


### Testing



## Server

### Localhost
Use MAMP to run Apache web server.

Create a symbolic link to **back-end/** directory inside **htdocs/** folder.

## Database

Name: **travel-dashboard**

Encoding: **UTF8 general CI**

### Entity
Use command: `php artisan make:migration create_users_table`

Use command: `php artisan migrate` to run all migrations.

Use command: `php artisan db:seed` to run all seeders inside database. Before use it remember to use command `composer dump-autoload -o` if you've created new seeder's classes.

## TODO

- [x] create Angular scaffold via cli
- [x] create Lumen scaffold via composer
- [x] create symbolic link to the back-end in MAMP
- [x] create database
- [x] configure Lumen
- [ ] configure database with migrations and seeders
- [ ] add compiler for SASS
- [ ] add CSS framework
- [ ] To Plan
