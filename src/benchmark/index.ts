
import { benchmarkAsync } from "./benchmarkAsync";
import { benchmarkIterations } from "./benchmarkIterations";
import { benchmark } from "./benchmark";

export class BenchmarkUtils {
  static benchmarkAsync: typeof benchmarkAsync = benchmarkAsync;
  static benchmarkIterations: typeof benchmarkIterations = benchmarkIterations;
  static benchmark: typeof benchmark = benchmark;
}

export { benchmarkAsync } from "./benchmarkAsync";
export { benchmarkIterations } from "./benchmarkIterations";
export { benchmark } from "./benchmark";

