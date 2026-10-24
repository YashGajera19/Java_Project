public class Main {
    public static void main(String[] args) {
        // 1. String Example
        System.out.println("===== STRING =====");

        String str = "Hello";
        System.out.println("Original String: " + str);

        str = str + " Java";
        System.out.println("After Modification: " + str);

        // 2. StringBuilder Example
        System.out.println("\n===== STRINGBUILDER =====");

        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("Original StringBuilder: " + sb);

        sb.append(" Java");
        System.out.println("After Append: " + sb);

        sb.insert(5, " World");
        System.out.println("After Insert: " + sb);

        sb.reverse();
        System.out.println("After Reverse: " + sb);

        // 3. StringBuffer Example
        System.out.println("\n===== STRINGBUFFER =====");

        StringBuffer sf = new StringBuffer("Hello");
        System.out.println("Original StringBuffer: " + sf);

        sf.append(" Java");
        System.out.println("After Append: " + sf);

        sf.insert(5, " World");
        System.out.println("After Insert: " + sf);

        sf.reverse();
        System.out.println("After Reverse: " + sf);

        System.out.println("\nProject Completed Successfully!");
    }

}
