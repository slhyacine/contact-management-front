export class ContactEmployeeCreateDto {
  type: string;
  name: string;
  lastname: string;
  address: string;

  constructor(obj: any) {
    this.type = obj.type;
    this.name = obj.name;
    this.lastname = obj.lastname;
    this.address = obj.address;
  }
}
