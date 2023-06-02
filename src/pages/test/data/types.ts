export interface ITestVariant {
  name: string;
  title: string;
  isCorrect: boolean;
}

export interface ITest {
  id: string;
  question: string;
  variants: ITestVariant[];
}
