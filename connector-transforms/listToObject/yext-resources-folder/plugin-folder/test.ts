import { listToObject } from "./mod.ts";

Deno.test("Testing export function", () => {
  const values =
    "has_wheelchair_accessible_entrance,has_wheelchair_accessible_restroom,has_wheelchair_accessible_elevator,requires_appointments,has_wheelchair_accessible_seating,true,true,true,false,false";
  listToObject(values);
});
