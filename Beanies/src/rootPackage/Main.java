package Beanies.src.rootPackage;

import java.io.*;
import java.net.http.*;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;
import java.net.http.HttpResponse.BodyHandlers;
import java.net.URI;
import java.util.*;
import Beanies.src.*;



public class Main {
    
    static List<Location> locations = new ArrayList<>();
    static List<Date> dates = new ArrayList<>();

    public static void main(String[] args) throws Exception {

        HttpClient client  = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://data.cambridgema.gov/resource/axxk-jvk8.json")) //API FOR COVID STATS MA
            .build();
        HttpResponse<String> response = client.send(request, BodyHandlers.ofString());
        System.out.println("STATUS: " + response.statusCode());

        Object jar = new JSONParser().parse(response.body());

        JSONArray ja = (JSONArray) jar;

        for (Object o : ja) {
            JSONObject day = (JSONObject) o;

            String dia = (String) day.get("date");
            int newPosCases = Integer.parseInt((String) day.get("new_positive_cases"));
            int newProCases = Integer.parseInt((String) day.get("new_probable_cases"));
            int newSusCases = Integer.parseInt((String) day.get("new_suspect_cases"));
            int newTotCases = Integer.parseInt((String) day.get("new_total_cases"));
            int cumCases = Integer.parseInt((String) day.get("cumulative_cases"));
            int cumTotal = Integer.parseInt((String) day.get("cumulative_total"));

            Date date = new Date(dia, newPosCases, newProCases, newSusCases, newTotCases, cumCases, cumTotal);
            date.displayDate();
            dates.add(date);
        }

        System.out.println(dates.size() + " Dates Loaded.");

        Scanner sc = new Scanner(new File("Vaccine-Locations.csv"));
        sc.useDelimiter(";");

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
