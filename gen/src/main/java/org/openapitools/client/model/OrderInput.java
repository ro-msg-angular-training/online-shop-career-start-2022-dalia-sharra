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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.openapitools.client.model.OrderInputProducts;

/**
 * OrderInput
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2022-07-25T09:22:53.697009+03:00[Europe/Athens]")
public class OrderInput {
  public static final String SERIALIZED_NAME_CUSTOMER = "customer";
  @SerializedName(SERIALIZED_NAME_CUSTOMER)
  private String customer;

  public static final String SERIALIZED_NAME_PRODUCTS = "products";
  @SerializedName(SERIALIZED_NAME_PRODUCTS)
  private List<OrderInputProducts> products = null;


  public OrderInput customer(String customer) {
    
    this.customer = customer;
    return this;
  }

   /**
   * Get customer
   * @return customer
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "doej", value = "")

  public String getCustomer() {
    return customer;
  }


  public void setCustomer(String customer) {
    this.customer = customer;
  }


  public OrderInput products(List<OrderInputProducts> products) {
    
    this.products = products;
    return this;
  }

  public OrderInput addProductsItem(OrderInputProducts productsItem) {
    if (this.products == null) {
      this.products = new ArrayList<OrderInputProducts>();
    }
    this.products.add(productsItem);
    return this;
  }

   /**
   * Get products
   * @return products
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<OrderInputProducts> getProducts() {
    return products;
  }


  public void setProducts(List<OrderInputProducts> products) {
    this.products = products;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderInput orderInput = (OrderInput) o;
    return Objects.equals(this.customer, orderInput.customer) &&
        Objects.equals(this.products, orderInput.products);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customer, products);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderInput {\n");
    sb.append("    customer: ").append(toIndentedString(customer)).append("\n");
    sb.append("    products: ").append(toIndentedString(products)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
