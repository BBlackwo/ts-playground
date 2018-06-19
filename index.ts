class Job {
  constructor ( 
    public title: string,
  ) {}
}

class Person {
  constructor (
    public name: String,
    public job: Job,
  ) {}
}

const ben = new Person('Ben', new Job('FrontEnd Developer'));

console.log(ben.name);