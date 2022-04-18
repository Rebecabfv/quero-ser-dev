package com.letscode;

import java.io.EOFException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import java.util.concurrent.ExecutionException;


public class ConverterData {

    public static String converterDataEAjustar(String date){
        LocalDate localDate = LocalDate.parse(date).minusMonths(2);

        return localDate.format(DateTimeFormatter.ofPattern("d-MM-uuuu"));
    }
}
