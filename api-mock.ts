import { Person } from './Person';
import { plainToClass } from 'class-transformer';

const peopleJson = JSON.stringify([
  {
    "name": "Ben",
    "job": {
      "title": "FrontEnd Developer"
    }
  }
]);

class ApiMock {
  getPerson(): Person {
    return JSON.parse(peopleJson)[0];  
  }

  getPersonWithMagic(): Person {
    return plainToClass(Person, this.getPerson());;
  }
}

export default new ApiMock();
