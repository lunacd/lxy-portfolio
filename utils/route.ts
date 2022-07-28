class Route {
  uri: "overlap" | "lyu" | "soul" | "sunrise" | "mode" | "tron";
  name: string;

  constructor(
    uri: "overlap" | "lyu" | "soul" | "sunrise" | "mode" | "tron",
    name: string,
  ) {
    this.uri = uri;
    this.name = name;
  }
}

export default Route;
