import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;

export interface Order {
    id: string;
    deliveryDate: Timestamp;
    total: number;
    deliveryAddress: Address;
    orderItems: OrderItem[];
    user: User;
}

export interface Address {
    flatNumber: number;
    towerName: string;
    apartment: string;
    city: string;
    state: string;
    pinCode: number;
}

export interface OrderItem {
    id: string;
    brand: string;
    name: string;
    photoUrl: string;
    price: string;
    quantityUnit: string;
    quantityValue: number;
    quantity: number;
}

export interface User {
    id: string;
    displayName: string;
    email: string;
    phone: string;
    photoUrl: string;
}
