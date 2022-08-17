class Route {
  uri: string;
  name: string;
  link: string;
  typeClass: string;

  constructor(
    uri: string,
    name: string,
    link: string,
    typeClass: string,
  ) {
    this.uri = uri;
    this.name = name;
    this.link = link;
    this.typeClass = typeClass;
  }
}

export default Route;
