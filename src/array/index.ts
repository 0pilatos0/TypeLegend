
import { union } from "./union";
import { diff } from "./diff";
import { sample } from "./sample";
import { intersect } from "./intersect";
import { zip } from "./zip";
import { shuffle } from "./shuffle";
import { chunk } from "./chunk";
import { random } from "./random";
import { compact } from "./compact";
import { unique } from "./unique";
import { range } from "./range";
import { flatten } from "./flatten";
import { partition } from "./partition";

export class ArrayUtils {
  static union: typeof union = union;
  static diff: typeof diff = diff;
  static sample: typeof sample = sample;
  static intersect: typeof intersect = intersect;
  static zip: typeof zip = zip;
  static shuffle: typeof shuffle = shuffle;
  static chunk: typeof chunk = chunk;
  static random: typeof random = random;
  static compact: typeof compact = compact;
  static unique: typeof unique = unique;
  static range: typeof range = range;
  static flatten: typeof flatten = flatten;
  static partition: typeof partition = partition;
}

export { union } from "./union";
export { diff } from "./diff";
export { sample } from "./sample";
export { intersect } from "./intersect";
export { zip } from "./zip";
export { shuffle } from "./shuffle";
export { chunk } from "./chunk";
export { random } from "./random";
export { compact } from "./compact";
export { unique } from "./unique";
export { range } from "./range";
export { flatten } from "./flatten";
export { partition } from "./partition";

