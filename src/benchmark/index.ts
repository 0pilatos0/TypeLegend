
import { benchmark } from "./benchmark";
import { benchmarkAsync } from "./benchmarkAsync";
import { benchmarkIterations } from "./benchmarkIterations";

export class BenchmarkUtils {
  static benchmark: typeof benchmark = benchmark;
  static benchmarkAsync: typeof benchmarkAsync = benchmarkAsync;
  static benchmarkIterations: typeof benchmarkIterations = benchmarkIterations;
}

export { benchmark } from "./benchmark";
export { benchmarkAsync } from "./benchmarkAsync";
export { benchmarkIterations } from "./benchmarkIterations";

