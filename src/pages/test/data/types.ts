export interface ITestVariant {
  name: string;
  title: string;
  isCorrect: boolean;
}

export interface ITest {
  id: number;
  question: string;
  variants: ITestVariant[];
}
