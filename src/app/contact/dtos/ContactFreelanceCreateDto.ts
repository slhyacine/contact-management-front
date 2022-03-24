export class ContactFreelanceCreateDto {
  type: string;
  name: string;
  lastname: string;
  address: string;
  tva: number;

  constructor(obj: any) {
    this.type = obj.type;
    this.name = obj.name;
    this.lastname = obj.lastname;
    this.address = obj.address;
    this.tva = obj.tva;
  }
}
