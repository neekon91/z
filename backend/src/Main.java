import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Collections;

public class Main {
    public static void main(String[] args) throws ParseException {
        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Person person4 = new Person("113456789", sdf.parse("2014-02-09"), "Bernard", "Lavilliers", 72d, 198d);
        Person person3 = new Person("923456789", sdf.parse("2014-02-10"), "Neekon", "Etemad", 74d, 205d);
        Person person2 = new Person("223456789", sdf.parse("2014-03-11"), "John", "Floyd", 68d, 100d);
        Person person1 = new Person("323456789", sdf.parse("2014-02-12"), "Anderson", "Council", 78d, 225d);
        Person person = new Person("123456789", sdf.parse("2014-02-11"), "Almond", "Brothers", 70d, 201d);

        List<Person> ppl = new ArrayList<>();
        ppl.add(person2);
        ppl.add(person1);
        ppl.add(person);
        ppl.add(person3);
        ppl.add(person4);

        System.out.println(sort(ppl, "heightIn", "false"));
    }

    static List<Person> sort(List<Person> people, String sortField, String ascending){

        switch (ascending) {
            case "true":
                switch (sortField) {
                    case "ssn":
                        Collections.sort(people, Person.ssnComparatorAsc);
                        break;
                    case "dateOfBirth":
                        Collections.sort(people, Person.dateOfBirthComparatorAsc);
                        break;
                    case "firstName":
                        Collections.sort(people, Person.firstNameComparatorAsc);
                        break;
                    case "lastName":
                        Collections.sort(people, Person.lastNameComparatorAsc);
                        break;
                    case "heightIn":
                        Collections.sort(people, Person.heightLbComparatorAsc);
                        break;
                    case "weightLb":
                        Collections.sort(people, Person.weightLbComparatorAsc);
                        break;
                }
                break;

            case "false":
                switch (sortField) {
                    case "ssn":
                        Collections.sort(people, Person.ssnComparatorDesc);
                        break;
                    case "dateOfBirth":
                        Collections.sort(people, Person.dateOfBirthComparatorDesc);
                        break;
                    case "firstName":
                        Collections.sort(people, Person.firstNameComparatorDesc);
                        break;
                    case "lastName":
                        Collections.sort(people, Person.lastNameComparatorDesc);
                        break;
                    case "heightIn":
                        Collections.sort(people, Person.heightLbComparatorDesc);
                        break;
                    case "weightLb":
                        Collections.sort(people, Person.weightLbComparatorDesc);
                        break;
                }
                break;

        }



        return people;
    }
}
