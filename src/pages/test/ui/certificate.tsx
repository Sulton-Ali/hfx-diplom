import { ITest } from "../data/types";
import { TestModule } from "./test-module";

import testsModule1 from "../data/module-1";
import testsModule2 from "../data/module-2";
import testsModule3 from "../data/module-3";
import testsModule4 from "../data/module-4";
import testsModule5 from "../data/module-5";

export default function CertificatePage() {
    const tests: ITest[] = [...testsModule1.slice(0, 10), ...testsModule2, ...testsModule3, ...testsModule4, ...testsModule5];
    
    return <TestModule id={99} tests={tests} isFinal />
}