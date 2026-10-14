let titel = "The Matrix";

interface Person {
  fName: string;
  age: number;
}

type Student = {
  isActive: boolean;
} & Person;

interface IStudent extends Person {
  isActive?: boolean;
}

const student: Student = {
  fName: "John",
  age: 35,
  isActive: true,
};

const secondStudent: IStudent = {
  fName: "Jane",
  age: 28,
};

const emptyArr: number[] = [];

let geselecteerdeFilmId: number | null = null;

type DoorState = "open" | "closed";

const currentState: DoorState = "open";

const toonWaarde = (waarde: unknown) => {
  if (typeof waarde === "string") {
    console.log(waarde.toUpperCase());
  } else if (typeof waarde === "number") {
    console.log(waarde.toString());
  }
};

type OwnType = (a: number, b: number, c?: number) => string;

const som: OwnType = (a, b) => {
  return a + "" + b;
};

som(1, 2);

const multiply: OwnType = (a, b, c = 1) => {
  return `${a * b * c}`;
};

interface Book {
  title: string;
}

interface ApiResponse<T> {
  data: T;
  error: string;
  succes: boolean;
}

const booksResponse: ApiResponse<Book[]> = {
  data: [],
  error: "",
  succes: false,
};

const studentResponse: ApiResponse<Student[]> = {
  data: [],
  error: "",
  succes: true,
};

type UpdateStudent = Partial<Student>;
