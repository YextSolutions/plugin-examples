import { applyTemplate } from "./utils.ts";


// define any template IDs to be passed to the generic Apply Template function later on
const template1 = "template1Id";
const template2 = "template2Id";
const template3 = "template3Id";
const template4 = "template4Id";


export async function applyEntityTemplates(payload: any) {
    // as an example, checking for only new location entities
    if (payload.meta.eventType === "ENTITY_CREATED" && payload.primaryProfile.meta.entityType === "location") {
        // logic flow for applying different sets of templates based on the value of a specific field
        if (payload.primaryProfile.c_customField === "value1") {
            await applyTemplate(template1, payload.entityId);
            await applyTemplate(template2, payload.entityId);
            return;
        } else if (payload.primaryProfile.c_customField === "value2") {
            await applyTemplate(template3, payload.entityId);
            await applyTemplate(template4, payload.entityId);
            return;
        }
    }
    // simply return if the initial check did not pass and no templates were applied
    return;
}