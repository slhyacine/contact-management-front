export class EnterpriseCreateDto {
  name: string;
  address: string;
  tva: number;

  constructor(obj: EnterpriseCreateDto) {
    this.name = obj.name;
    this.address = obj.address;
    this.tva = obj.tva;
  }
}
