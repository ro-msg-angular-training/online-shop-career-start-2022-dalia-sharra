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

import org.openapitools.client.ApiException;
import org.openapitools.client.model.Product;
import org.openapitools.client.model.ProductHeader;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ProductsApi
 */
@Ignore
public class ProductsApiTest {

    private final ProductsApi api = new ProductsApi();

    
    /**
     * Read all products in the catalogue
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void productsGetTest() throws ApiException {
        List<ProductHeader> response = api.productsGet();

        // TODO: test validations
    }
    
    /**
     * Deletes a product from the catalogue
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void productsIdDeleteTest() throws ApiException {
        Integer id = null;
        api.productsIdDelete(id);

        // TODO: test validations
    }
    
    /**
     * Reads a product from the catalogue
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void productsIdGetTest() throws ApiException {
        Integer id = null;
        Product response = api.productsIdGet(id);

        // TODO: test validations
    }
    
    /**
     * Updates a product from the catalogue
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void productsIdPutTest() throws ApiException {
        Integer id = null;
        Product body = null;
        api.productsIdPut(id, body);

        // TODO: test validations
    }
    
    /**
     * Add a new product to the catalogue
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void productsPostTest() throws ApiException {
        Product body = null;
        Product response = api.productsPost(body);

        // TODO: test validations
    }
    
}
