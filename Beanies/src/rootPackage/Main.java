package Beanies.src.rootPackage;

import java.io.*;
import java.util.*;
import Beanies.src.*;



public class Main {
    
    static List<Location> locations = new ArrayList<>();

    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(new File("Vaccine-Locations.csv"));
        sc.useDelimiter(";");

        int iterator = 0;



        while (sc.hasNext()) {
            Location LineData = new Location(sc.next(), sc.next(), sc.next(), sc.next());
            
            locations.add(LineData);
        }
        System.out.println(locations.size() + " Addresses Loaded.");

        sc.close();
    }

    public List<Location> returnLocations(String zipcode) {
        List<Location> out = new ArrayList<>();
        for (int i = 0; i < locations.size(); i++) {
            if (locations.get(i).zip.equals(zipcode)) {
                out.add(locations.get(i));
            }
        }
        return out;
    }
}
