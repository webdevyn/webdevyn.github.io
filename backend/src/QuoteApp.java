import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

public class QuoteApp {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        try {
            HttpRequest request = HttpRequest.newBuilder().uri(URI.create("https://api.quotable.io/random")).build();
            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        } catch (java.lang.Exception e) {
            throw new RuntimeException(e);
        }
    }
}