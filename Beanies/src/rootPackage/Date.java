package Beanies.src.rootPackage;

public class Date {
    
    public String date;
    public int newPosCases;
    public int newProCases;
    public int newSusCases;
    public int newTotCases;
    public int cumCases;
    public int cumTotal;

    public Date(String date, int newPosCases, int newProCases, int newSusCases, int newTotCases, int cumCases, int cumTotal) {
        this.date = date.substring(0,10);
        this.newPosCases = newPosCases;
        this.newProCases = newProCases;
        this.newSusCases = newSusCases;
        this.newTotCases = newTotCases;
        this.cumCases = cumCases;
        this.cumTotal = cumTotal;
    }

    public void displayDate() {
        System.out.println(date);
        System.out.println("New Positive Cases: " + newPosCases);
        System.out.println("New Probable Cases: " + newProCases);
        System.out.println("New Suspect Cases: " + newSusCases);
        System.out.println("Total Cases: " + newTotCases);
        System.out.println("Cumulative Cases: " + cumCases);
        System.out.println("Cumulative Total: " + cumTotal);
    }
}
