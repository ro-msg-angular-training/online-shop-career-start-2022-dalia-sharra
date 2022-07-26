# OrdersApi

All URIs are relative to *http://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ordersPost**](OrdersApi.md#ordersPost) | **POST** /orders | Create an order


<a name="ordersPost"></a>
# **ordersPost**
> ordersPost(body)

Create an order

### Example
```java
// Import classes:
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.Configuration;
import org.openapitools.client.models.*;
import org.openapitools.client.api.OrdersApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("http://localhost:3000");

    OrdersApi apiInstance = new OrdersApi(defaultClient);
    OrderInput body = new OrderInput(); // OrderInput | Order details
    try {
      apiInstance.ordersPost(body);
    } catch (ApiException e) {
      System.err.println("Exception when calling OrdersApi#ordersPost");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OrderInput**](OrderInput.md)| Order details |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |
**401** | user or product not found |  -  |

