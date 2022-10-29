When we want to comunicate between two services we need to decide set of rules through which they can comunicate with each other.

there are different way to comunicate with services

- SOAP
- REST
- GraphQl

## Simple Objects Access Protocol (SOAP)

SOAP is an XML-formatted, highly standardized web communication protocol. Paired with the massive message structure, it makes SOAP the most verbose API style.

The SOAP API logic is written in Web Service Description Language (WSDL). This API description language defines the endpoints and describes all processes that can be performed.

SOAP supports both stateful and stateless messaging. In a stateful scenario, the server stores the received information that can be really heavy.

**SOAP pros**

1. **Language- and platform-agnostic.**
2. **Built-in error handling**
3. **A number of security extensions**

**SOAP cons**

1. **XML only**
2. **Heavyweight**
3. **Specialized knowledge**. Building SOAP API servers requires a deep understanding of all protocols involved and their highly restricted rules.
4. **Tedious message updating**. Requiring additional effort to add or remove the message properties, rigid SOAP schema slows down adoption

**SOAP use cases**

**Highly secured data transmission.** SOAP rigid structure, security and authorization capabilities make it the most suitable option for enforcing a formal software contract between API and client while complying with the legal contract between the API provider and API consumer. That’s why financial organizations and other corporate users opt for SOAP.

## Representational state transfer (REST)

The key part is using hypermedia aka **HATEOAS**, short for **Hypertext As The Engine of Application State**. Basically, it means that with each response, a REST API provides metadata linking to all the related info about how to use the API. That’s what enables decoupling the client and the server. As a result, both API provider and API consumer can evolve independently without hindering their communication.

REST makes server-side data available representing it in simple formats, often JSON and XML.

RESTful architecture should comply with six architectural constraints:

1. **uniform interface**: permitting a uniform way of interacting with a given server regardless of device or application type
2. **stateless**: the necessary state to handle the request as contained within the request itself and without the server storing anything related to the session
   caching
3. **client-server architecture**: allowing for independent evolution of either side
   layered system of the application
4. the ability for servers to **provide executable code** to the client

**REST pros**

1. **Decoupled client and server**
2. **Discoverability**. Communication between the client and server describes everything so that no external documentation is required to understand how to interact with the REST API.
3. **Multiple formats support**
4. **Cache-friendly**

**REST cons**

1. **No single REST structure**
2. **Big payloads** REST returns a lot of rich metadata so that the client can understand everything necessary about the state of the application just from its responses.
3. **Over- and under-fetching problems**

**REST use cases**

1. **Simple resource-driven apps**. REST is a valuable approach for connecting resource-driven apps that don’t need flexibility in queries.
2. **Management APIs**. APIs focused on managing objects in a system and intended for many consumers


## GraphQL

GraphQL is a syntax that describes how to make a precise data request.

GraphQL starts with building a schema, which is a description of all the queries you can possibly make in a GraphQL API and all the types that they return. Sending one massive query to the server, the API returns a JSON response with exactly the shape of the data we asked for.

In addition to the RESTful CRUD operations, GraphQL has subscriptions allowing for real-time notifications from the server.

**GraphQL pros**

1. **Typed schema.** By pointing a client at the GraphQL API, we can find out what queries are available.
2. **No versioning.** The best practice with versioning is not to version the API at all.
3. **Detailed error messages** Its error message includes all the resolvers and refers to the exact query part at fault.
4. **Flexible permissions**. GraphQL allows for selectively exposing certain functions while preserving private information. Meanwhile, REST architecture doesn’t reveal data in portions. It’s either all or nothing.

**GraphQL cons**

1. **Performance issues**. GraphQL trades off complexity for its power. Having too many nested fields in one request can lead to system overload
2. **Caching complexity**. As GraphQL isn’t reusing HTTP caching semantics, it requires a custom caching effort.
   
**GraphQL use cases**

1. **Mobile API**. In this case, network performance and single message payload optimization is important. So, GraphQL offers a more efficient data loading for mobile devices.

2. **Complex systems and microservices**. GraphQL is able to hide the complexity of multiple systems integration behind its API. Aggregating data from multiple places, it merges them into one global schema. 
