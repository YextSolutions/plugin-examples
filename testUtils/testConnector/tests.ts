import { assertEquals } from "https://deno.land/std@0.198.0/assert/mod.ts";
import { assertSpyCall, spy} from "https://deno.land/std@0.165.0/testing/mock.ts";
import { testConnector } from "./mod.ts"

function fakeSource(nextPageToken: string) {
	return Promise.resolve('{"nextPageToken":"", "data":[{"test":"123"}]}');
}

function fakeOptions(response: any) {
  console.log(response.data[0].test);
}

Deno.test("test data returned", async () => {
  const logSpy = spy(console, "log");
	const result = await testConnector(fakeSource,  {callbackFunc: fakeOptions});
  assertEquals(result.updatesCount, 1);
  assertEquals(result.data, [{"test": "123"}]);
  assertSpyCall(logSpy, 0, {
    args: ["123"]
  });
});