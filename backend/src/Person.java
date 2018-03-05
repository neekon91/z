import java.util.Date;
import java.util.Comparator;

public class Person {
    String ssn;
    Date dateOfBirth;
    String firstName;
    String lastName;
    Double heightIn;
    Double weightLb;

    public Person (String ssn, Date dateOfBirth, String firstName, String lastName, Double heightIn, Double weightLb){
        this.setSsn(ssn);
        this.setDateOfBirth(dateOfBirth);
        this.setFirstName(firstName);
        this.setLastName(lastName);
        this.setHeightIn(heightIn);
        this.setWeightLb(weightLb);
    }

    public static Comparator<Person> ssnComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getSsn().compareTo(p2.getSsn());
        }
    };
    public static Comparator<Person> ssnComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getSsn().compareTo(p1.getSsn());
        }
    };

    public static Comparator<Person> dateOfBirthComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getDateOfBirth().compareTo(p2.getDateOfBirth());
        }
    };
    public static Comparator<Person> dateOfBirthComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getDateOfBirth().compareTo(p1.getDateOfBirth());
        }
    };

    public static Comparator<Person> firstNameComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getFirstName().compareTo(p2.getFirstName());
        }
    };
    public static Comparator<Person> firstNameComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getFirstName().compareTo(p1.getFirstName());
        }
    };

    public static Comparator<Person> lastNameComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getLastName().compareTo(p2.getLastName());
        }
    };
    public static Comparator<Person> lastNameComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getLastName().compareTo(p1.getLastName());
        }
    };

    public static Comparator<Person> heightLbComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getHeightIn().compareTo(p2.getHeightIn());
        }
    };
    public static Comparator<Person> heightLbComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getHeightIn().compareTo(p1.getHeightIn());
        }
    };

    public static Comparator<Person> weightLbComparatorAsc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p1.getWeightLb().compareTo(p2.getWeightLb());
        }
    };
    public static Comparator<Person> weightLbComparatorDesc = new Comparator<Person>() {
        @Override
        public int compare(Person p1, Person p2){
            return p2.getWeightLb().compareTo(p1.getWeightLb());
        }
    };

    @Override
    public String toString() {
        return "Person{" +
                "ssn='" + ssn + '\'' +
                ", dateOfBirth=" + dateOfBirth +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", heightIn=" + heightIn +
                ", weightLb=" + weightLb +
                '}';
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Double getHeightIn() {
        return heightIn;
    }

    public void setHeightIn(Double heightIn) {
        this.heightIn = heightIn;
    }

    public Double getWeightLb() {
        return weightLb;
    }

    public void setWeightLb(Double weightLb) {
        this.weightLb = weightLb;
    }
}
