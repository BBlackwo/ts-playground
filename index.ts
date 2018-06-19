import 'reflect-metadata';

import { Person, Job } from './Person';
import ApiMock from './api-mock';

// JSON PARSE
const personFromJson: Person = ApiMock.getPerson();
console.log('Json Parse:', personFromJson instanceof Person);


// JSON PARSE WITH MAGIC
const personFromJson2: Person = ApiMock.getPersonWithMagic();
console.log('Json Parse with Magic:', personFromJson2 instanceof Person);


// MANUALLY CREATE
const typedPerson: Person = {
  name: 'Ben',
  job: {
    title: 'FrontEnd Developer'
  }
}
console.log('Manually Create:', typedPerson instanceof Person);


// MANUALLY CREATE NEW
const manualPerson = new Person('Ben', new Job('FrontEnd Developer'));
console.log('Manually Created New:', manualPerson instanceof Person);

