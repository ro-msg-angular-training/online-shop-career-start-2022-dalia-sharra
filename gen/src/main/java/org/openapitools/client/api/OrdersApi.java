/*
 * Online Shop
 * This is a sample online shop for the Angular training. The product catalog may be accessed even without logging in (the login is just a mock endpoint). Users may have any of the three following roles: 'user' (always), 'customer', 'admin'.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiCallback;
import org.openapitools.client.ApiClient;
import org.openapitools.client.ApiException;
import org.openapitools.client.ApiResponse;
import org.openapitools.client.Configuration;
import org.openapitools.client.Pair;
import org.openapitools.client.ProgressRequestBody;
import org.openapitools.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import org.openapitools.client.model.OrderInput;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class OrdersApi {
    private ApiClient localVarApiClient;

    public OrdersApi() {
        this(Configuration.getDefaultApiClient());
    }

    public OrdersApi(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return localVarApiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.localVarApiClient = apiClient;
    }

    /**
     * Build call for ordersPost
     * @param body Order details (required)
     * @param _callback Callback for upload/download progress
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> successful operation </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> user or product not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call ordersPostCall(OrderInput body, final ApiCallback _callback) throws ApiException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/orders";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        Map<String, String> localVarHeaderParams = new HashMap<String, String>();
        Map<String, String> localVarCookieParams = new HashMap<String, String>();
        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            
        };
        final String localVarAccept = localVarApiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) {
            localVarHeaderParams.put("Accept", localVarAccept);
        }

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = localVarApiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        String[] localVarAuthNames = new String[] {  };
        return localVarApiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAuthNames, _callback);
    }

    @SuppressWarnings("rawtypes")
    private okhttp3.Call ordersPostValidateBeforeCall(OrderInput body, final ApiCallback _callback) throws ApiException {
        
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling ordersPost(Async)");
        }
        

        okhttp3.Call localVarCall = ordersPostCall(body, _callback);
        return localVarCall;

    }

    /**
     * Create an order
     * 
     * @param body Order details (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> successful operation </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> user or product not found </td><td>  -  </td></tr>
     </table>
     */
    public void ordersPost(OrderInput body) throws ApiException {
        ordersPostWithHttpInfo(body);
    }

    /**
     * Create an order
     * 
     * @param body Order details (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> successful operation </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> user or product not found </td><td>  -  </td></tr>
     </table>
     */
    public ApiResponse<Void> ordersPostWithHttpInfo(OrderInput body) throws ApiException {
        okhttp3.Call localVarCall = ordersPostValidateBeforeCall(body, null);
        return localVarApiClient.execute(localVarCall);
    }

    /**
     * Create an order (asynchronously)
     * 
     * @param body Order details (required)
     * @param _callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @http.response.details
     <table summary="Response Details" border="1">
        <tr><td> Status Code </td><td> Description </td><td> Response Headers </td></tr>
        <tr><td> 201 </td><td> successful operation </td><td>  -  </td></tr>
        <tr><td> 401 </td><td> user or product not found </td><td>  -  </td></tr>
     </table>
     */
    public okhttp3.Call ordersPostAsync(OrderInput body, final ApiCallback<Void> _callback) throws ApiException {

        okhttp3.Call localVarCall = ordersPostValidateBeforeCall(body, _callback);
        localVarApiClient.executeAsync(localVarCall, _callback);
        return localVarCall;
    }
}