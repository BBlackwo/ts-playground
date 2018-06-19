import { Type } from 'class-transformer';

export class Job {
  constructor ( 
    public title: string,
  ) {}
}

export class Person {
  @Type(() => Job)
  public job: Job;
  
  constructor (
    public name: String,
    job: Job,
  ) {}
}
