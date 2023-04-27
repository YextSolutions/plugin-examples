import { richTextToPlainText } from "./mod.ts";

const richText = {
  nodeType: "document",
  data: {},
  content: [
    {
      nodeType: "heading-3",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "How to get help with your prepayment meter",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value:
            "If you’re unable to top up your prepayment meter, one of the resources below should help you. ",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "", marks: [], data: {} }],
    },
    {
      nodeType: "heading-3",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Instructions on how to top up",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "You can find instructions on topping up here: ",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "unordered-list",
      data: {},
      content: [
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                { nodeType: "text", value: "", marks: [], data: {} },
                {
                  nodeType: "hyperlink",
                  data: {
                    uri: "https://help.uw.co.uk/article/emergencies_and_outages/prepayment_meter/how-do-i-top-up-my-prepayment-meter",
                  },
                  content: [
                    {
                      nodeType: "text",
                      value: "Traditional (non-smart) meters",
                      marks: [],
                      data: {},
                    },
                  ],
                },
                { nodeType: "text", value: "", marks: [], data: {} },
              ],
            },
          ],
        },
        {
          nodeType: "list-item",
          data: {},
          content: [
            {
              nodeType: "paragraph",
              data: {},
              content: [
                { nodeType: "text", value: "", marks: [], data: {} },
                {
                  nodeType: "hyperlink",
                  data: {
                    uri: "https://help.uw.co.uk/article/energy/smartmeters/how-to-top-up-your-smart-prepayment-meter",
                  },
                  content: [
                    {
                      nodeType: "text",
                      value: "Smart meters",
                      marks: [],
                      data: {},
                    },
                  ],
                },
                { nodeType: "text", value: "", marks: [], data: {} },
              ],
            },
          ],
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "", marks: [], data: {} }],
    },
    {
      nodeType: "heading-3",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "What to do if you’re having a technical issue",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "For problems applying top-ups, during ",
          marks: [],
          data: {},
        },
        {
          nodeType: "hyperlink",
          data: { uri: "https://uw.co.uk/help/contact-us" },
          content: [
            {
              nodeType: "text",
              value: "our opening hours",
              marks: [],
              data: {},
            },
          ],
        },
        { nodeType: "text", value: " please call ", marks: [], data: {} },
        {
          nodeType: "text",
          value: "0333 003 5644",
          marks: [{ type: "bold" }],
          data: {},
        },
        { nodeType: "text", value: ".", marks: [], data: {} },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Outside our opening hours, please call ",
          marks: [],
          data: {},
        },
        {
          nodeType: "text",
          value: "0345 658 9655",
          marks: [{ type: "bold" }],
          data: {},
        },
        { nodeType: "text", value: " (Electricity) or ", marks: [], data: {} },
        {
          nodeType: "text",
          value: "0345 124 5366",
          marks: [{ type: "bold" }],
          data: {},
        },
        { nodeType: "text", value: " (Gas). ", marks: [], data: {} },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "", marks: [], data: {} }],
    },
    {
      nodeType: "heading-3",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Emergency Credit and Friendly Credit ",
          marks: [],
          data: {},
        },
        { nodeType: "text", value: "–", marks: [{ type: "bold" }], data: {} },
        {
          nodeType: "text",
          value: " in case you run out of credit",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value:
            "You can find information on how Emergency Credit and Friendly Credit can help you if you run out of credit ",
          marks: [],
          data: {},
        },
        {
          nodeType: "hyperlink",
          data: {
            uri: "https://help.uw.co.uk/article/energy/prepayment_meter/how-do-i-access-my-emergency-or-friendly-credit-on-my-smart-meter",
          },
          content: [{ nodeType: "text", value: "here", marks: [], data: {} }],
        },
        { nodeType: "text", value: ".", marks: [], data: {} },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [{ nodeType: "text", value: "", marks: [], data: {} }],
    },
    {
      nodeType: "heading-3",
      data: {},
      content: [
        {
          nodeType: "text",
          value: "Help if you’re struggling to afford credit",
          marks: [],
          data: {},
        },
      ],
    },
    {
      nodeType: "paragraph",
      data: {},
      content: [
        {
          nodeType: "text",
          value:
            "If you’re having problems affording your credit top-ups, you can find help ",
          marks: [],
          data: {},
        },
        {
          nodeType: "hyperlink",
          data: {
            uri: "https://help.uw.co.uk/article/energy/other_energy_information/what-additional-help-is-there-if-im-struggling-to-top-up-my-prepayment-meter",
          },
          content: [{ nodeType: "text", value: "here", marks: [], data: {} }],
        },
        { nodeType: "text", value: ". ", marks: [], data: {} },
      ],
    },
  ],
};

// Deno Test
Deno.test("Test", () => {
  const plainText = richTextToPlainText(JSON.stringify(richText));
  console.log(plainText);
});
