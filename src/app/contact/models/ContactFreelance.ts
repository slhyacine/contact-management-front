import {Contact} from "./Contact";

export class ContactFreelance extends Contact{

  public tva: number;

  constructor() {
    super();
    this.tva = 0;
  }

}
