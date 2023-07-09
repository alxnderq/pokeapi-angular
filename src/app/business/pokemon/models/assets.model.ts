
export class Assets {
  backgroundColor: string;
  textColor: string;

  constructor(private type: string) {
    this.backgroundColor = `bg-${type}`;
    this.textColor = `text-${type}`;
  }
}
