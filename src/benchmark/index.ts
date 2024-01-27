
import { benchmarkIterations } from "./benchmarkIterations";
import { benchmark } from "./benchmark";

export class BenchmarkUtils {
  static benchmarkIterations: typeof benchmarkIterations = benchmarkIterations;
  static benchmark: typeof benchmark = benchmark;
}

export { benchmarkIterations } from "./benchmarkIterations";
export { benchmark } from "./benchmark";

