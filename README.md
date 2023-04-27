# plugin-examples
This repo consists of examples of functions used in various Solutions built on top of the Yext platform.

 ##### ***sample-functions-solutions-pm***
***This repo is a collection of functions created for different use cases. Reference any of these files and adapt them for your specific function needs.***
***This repo includes examples of **functions as a source**, **functions for transforms in Connectors**, and **function hooks**. It is updated regularly by Solutions and Platform Product Management teams at Yext.*** 

# Examples of Functions-as-a-Source Connectors
Since native sources do not currently support functions as operations, this is a collection of all used Functions-as-a-source that can be applied to any account via CLI.

- #### freshdesk-articles-shaw
  - Description: Use state-management to make cascading calls and retrieve a complete list of Freshdesk solution articles. Cascading calls are required to navtigate from category, to folder, to article.
  - Author: Max Shaw

- #### freshdesk-articles
  - Description: Another example of a function to pull in Solutions Articles from Freshdesk.
  - Author: Henry Kremer

- #### freshdesk-tickets-with-comments
  - Description: A function to pull in Tickets from your Freshdesk instance.
  - Author: DJ Corbett

- #### tweetsFromHandle
  - Description: A function to pull in your tweets by only inputting your Twitter handle and not your Twitter ID.
  - Author: DJ Corbett

- #### fullVideoInfo
  - Description: Pull in Video info from
  - Author: Henry Kremer

- #### zd-tickets-with-comments
  - Description:
  - Author: Henry Kremer

- #### zendeskFields
  - Description:
  - Author: DJ Corbett

# Examples of Connector Transforms

- #### applyEntityTemplate
  - Description:
  - Author:

- #### codeToCountry
  - Description:
  - Author: Matt Malone

- #### clearRow
  - Description:
  - Author: Matt Malone

- #### unixFormatTimes
  - Description:
  - Author: Adrienne Williams

- #### unixFormatDates
  - Description:
  - Author: Adrienne Williams

- #### generalFunction
  - Description:
  - Author: DJ Corbett
  
- #### codeToCurrency
  - Description:
  - Author: Coleen Truong
  
- #### decodeHTML
 - Description: Use this to transform any left over HTML characters in a string of text, e.g. &#160; or &nbsp;
 - Author: Adrienne Williams (this is just using a #rd-party library)

- #### discourseAvatarUrl
  - Description:
  - Author: Yext engineering

- #### contentful Transforms
  - Description: Various transforms to use to pull in your data from Contentful.
  - Author: Adrienne Williams

- #### extractIdFromUrl
  - Description:
  - Author: Yext engineering

- #### formatDates
  - Description:
  - Author: Yext engineering

- #### generateFullUrl
  - Description:
  - Author: Yext engineering

- #### listToObject
  - Description:
  - Author: Yext engineering

- #### secToMin
  - Description:
  - Author: Yext engineering

- #### xmlToJson
  - Description: Use this plugin as a starting point to convert your XML data to JSON.
  - Author: DJ Corbett

# Examples of Function Hooks
- #### applyEntityTemplatePlugin
  - Description: Use this plugin to apply a template directly to an entity after it's created.
  - Author: DJ Corbett
