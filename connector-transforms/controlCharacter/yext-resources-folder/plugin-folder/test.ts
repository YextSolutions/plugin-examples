import { controlCharacters } from "./mod";

Deno.test("Testing export function", () => {
  const str =
    "<p>c 95718</p><p>screen -x 16899.migration</p><code>homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763 (3/4): | Analyzing source snapshots of &#39;homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763&#39;... | Analyzing destination snapshots of &#39;homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763&#39; (&#39;homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763&#39;)... | | !! Starting full send/recv of &#39;homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763&#39; (using snapshot &#39;1604883662&#39;)... !! | receiving full stream of homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763@1604883662 into homePool/home/agents/1f7fcd199eb84a56a6a98ef38fda5763@1604883662 ] 0% ETA 0:00:00| 14.9GiB 0:07:43 [33.9MiB/s] [&gt; ] 0% ETA 14:34:2</code><p> </p><p> </p>";
  controlCharacters(str);
});
