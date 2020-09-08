import { v4 } from "https://deno.land/std/uuid/mod.ts";

const uuid = v4.generate()

console.log(uuid)
console.log(v4.validate(uuid)) // returns true