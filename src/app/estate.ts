export class Estate {
  constructor(
    public id: string,
    public name: string,
    public city: string,
    public street: string,
    public flat: number,
    public floor: number,
    public areaall: number,
    public deleted: boolean,
    public createdAt: string,
    public modifiedAt: string,
    public house: string,
    public housetype: string,
    public rooms: number,
    public roomstype: string,
    public arearooms: number,
    public areakitchen: number,
    public height: number,
    public layout: string,
    public repair: string,
    public heating: string,
    public flooring: string,
    public price: number,
    public furniture: string,
    public createdById: string
  ) {}
}
