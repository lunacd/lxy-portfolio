class ProjectDescription {
  name: string;
  duration: string;
  category: string;
  focus: string;
  brief: string;

  constructor(
    name: string,
    duration: string,
    category: string,
    focus: string,
    brief: string,
  ) {
    this.name = name;
    this.duration = duration;
    this.category = category;
    this.focus = focus;
    this.brief = brief;
  }
}

export default ProjectDescription;
