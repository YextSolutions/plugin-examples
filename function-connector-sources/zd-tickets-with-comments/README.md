# Functions-as-a-Source
## Zendesk Tickets with Comments
This functions returns all the tickets in a given Zendesk instance. Each invocation call `https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/tickets?page[size]=5`, and then loops the returned ticket ids through `https://${ZENDESK_SUBDOMAIN}.zendesk.com/api/v2/tickets/${ticketId}/comments?page[size]=100`.

When a 429 code (rate limit error) is returned it will sleep for the `retryAfter` value, up to five seconds, as to not timeout the function.



