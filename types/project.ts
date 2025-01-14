import { TypedObject } from "@portabletext/types";

interface Project {
  title: string;
  _id: string;
  imageUrl: string;
  category: { title: string }[];
  description: Array<TypedObject>;
  link: string;
  year: number;
}

export default Project;