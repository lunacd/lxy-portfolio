class Route {
  uri: "projects" | "overlap" | "lyu" | "soul" | "sunrise" | "mode" | "tron";
  name: string;
  link: string;
  typeClass: string;

  constructor(
    uri: "projects" | "overlap" | "lyu" | "soul" | "sunrise" | "mode" | "tron",
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
