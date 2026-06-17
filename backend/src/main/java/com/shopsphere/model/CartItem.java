package com.shopsphere.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class CartItem {

    private String productId;

    private String productName;

    private double price;

    private int quantity;

    private String imageUrl;
}