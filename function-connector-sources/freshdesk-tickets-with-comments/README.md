# Functions-as-a-Source
## Zendesk Tickets with Comments
This functions returns all the tickets in a given Zendesk instance. Each invocation call `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/tickets?include=company,stats,description,requester&per_page=1`, and then loops the returned ticket ids through `https://${FRESHDESK_SUBDOMAIN}.freshdesk.com/api/v2/tickets/${ticketId}/conversations?per_page=100`.

When a 429 code (rate limit error) is returned it will sleep for the `retryAfter` value, up to five seconds, as to not timeout the function.



