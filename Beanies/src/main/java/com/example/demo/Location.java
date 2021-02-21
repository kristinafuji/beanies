package com.example.demo;

public class Location {
    
    public String zip;
    public String address;

    public String name;
    public String hours;
    public String serves;

    public Location (String name, String serves, String address, String hours) {
        this.name = name;
        this.serves = serves;
        this.address = address;
        this.hours = hours;
        splitAddress();
    }

    private void splitAddress() {
        this.zip = address.substring(address.length()-5, address.length());
    }

    public void printAddress() {
        System.out.println(this.address);
    }
}
