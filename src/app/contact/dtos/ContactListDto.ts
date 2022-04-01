export class ContactListDto {

  id: string;
  type: string;
  name: string;
  lastname: string;
  address: string;

  constructor(contact: ContactListDto) {
    this.id = contact.id;
    this.type = contact.type;
    this.name = contact.name;
    this.lastname = contact.lastname;
    this.address = contact.address;
  }


}
